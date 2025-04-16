import { useState, useEffect, useRef } from 'react';
import {
  Search, MessageSquare, Heart, Share2, Calendar,
  Users, TrendingUp, Filter, MapPin, Clock, ChevronDown,
  Image, Smile, PlusCircle, X, Send, Link2, Facebook, Twitter, Mail, Copy, MoreHorizontal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Types
interface Comment {
  id: number;
  author: {
    name: string;
    image: string;
  };
  content: string;
  timePosted: string;
  likes: number;
  liked: boolean;
}

interface Post {
  id: number;
  author: {
    name: string;
    image: string;
    role: string;
    location: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  shares: number;
  tags: string[];
  timePosted: string;
  liked: boolean;
  isExpanded?: boolean;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  image: string;
}

interface Member {
  id: number;
  name: string;
  image: string;
  role: string;
  bio: string;
  pets: number;
  followers: number;
}

const Community = () => {
  // State
  const [activeTab, setActiveTab] = useState("trending");
  const [posts, setPosts] = useState<Post[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // New state for creating posts
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState<string | null>(null);
  const [newPostTags, setNewPostTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [isNewPostDialogOpen, setIsNewPostDialogOpen] = useState(false);

  // New state for comments
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});
  const [activePostId, setActivePostId] = useState<number | null>(null);
  const [showShareOptions, setShowShareOptions] = useState<number | null>(null);

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Function to handle adding a new tag
  const handleAddTag = () => {
    if (tagInput.trim() && !newPostTags.includes(tagInput.trim())) {
      setNewPostTags([...newPostTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // Function to handle removing a tag
  const handleRemoveTag = (tagToRemove: string) => {
    setNewPostTags(newPostTags.filter(tag => tag !== tagToRemove));
  };

  // Function to handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle creating a new post
  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      const newPost: Post = {
        id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
        author: {
          name: "Current User",
          image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          role: "Pet Owner",
          location: "Your Location"
        },
        content: newPostContent,
        image: newPostImage || undefined,
        likes: 0,
        comments: [],
        shares: 0,
        tags: newPostTags,
        timePosted: "Just now",
        liked: false
      };

      setPosts([newPost, ...posts]);

      // Reset form
      setNewPostContent("");
      setNewPostImage(null);
      setNewPostTags([]);
      setIsNewPostDialogOpen(false);
    }
  };

  // Function to toggle expanding a post's comments
  const togglePostExpansion = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, isExpanded: !post.isExpanded }
        : post
    ));
    setActivePostId(postId);
  };

  // Function to add a comment to a post
  const handleAddComment = (postId: number) => {
    const commentContent = commentInputs[postId];

    if (commentContent?.trim()) {
      setPosts(posts.map(post => {
        if (post.id === postId) {
          const newComment: Comment = {
            id: post.comments.length > 0
              ? Math.max(...post.comments.map(c => c.id)) + 1
              : 1,
            author: {
              name: "Current User",
              image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            },
            content: commentContent,
            timePosted: "Just now",
            likes: 0,
            liked: false
          };

          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      }));

      // Clear input
      setCommentInputs({
        ...commentInputs,
        [postId]: ""
      });
    }
  };

  // Function to like a comment
  const handleLikeComment = (postId: number, commentId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments.map(comment => {
            if (comment.id === commentId) {
              const newLikedStatus = !comment.liked;
              return {
                ...comment,
                liked: newLikedStatus,
                likes: newLikedStatus ? comment.likes + 1 : comment.likes - 1
              };
            }
            return comment;
          })
        };
      }
      return post;
    }));
  };

  // Function to copy post link
  const copyPostLink = (postId: number) => {
    const url = `${window.location.origin}/community/post/${postId}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        alert("Link copied to clipboard!");
        setShowShareOptions(null);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  // Sample data
  useEffect(() => {
    // Sample posts data with comments
    setPosts([
      {
        id: 1,
        author: {
          name: "Jason Reynolds",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          role: "Pet Owner",
          location: "San Francisco, CA"
        },
        content: "Just had the most amazing experience with our new dog walker from Critter! Max was so excited to see her again. Anyone else have amazing experiences to share?",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 42,
        comments: [
          {
            id: 1,
            author: {
              name: "Sarah Kim",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            },
            content: "Yes! Our walker sends us pictures during every walk. It really puts our minds at ease.",
            timePosted: "1 hour ago",
            likes: 5,
            liked: false
          },
          {
            id: 2,
            author: {
              name: "Mike Thompson",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            },
            content: "What area are you in? Looking for a good walker for my pup!",
            timePosted: "45 minutes ago",
            likes: 2,
            liked: false
          }
        ],
        shares: 5,
        tags: ["DogWalking", "PetCare"],
        timePosted: "2 hours ago",
        liked: false
      },
      {
        id: 2,
        author: {
          name: "Sophia Martinez",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          role: "Pet Sitter",
          location: "Chicago, IL"
        },
        content: "Pro tip for new pet sitters: Always bring extra treats and toys! I've found that having a variety helps when meeting new pets who might be a bit nervous at first. What are your go-to tools for making pets comfortable?",
        likes: 87,
        comments: [],
        shares: 15,
        tags: ["PetSitterTips", "PetCare"],
        timePosted: "5 hours ago",
        liked: true
      },
      {
        id: 3,
        author: {
          name: "Marcus Johnson",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          role: "Dog Trainer",
          location: "Austin, TX"
        },
        content: "Just hosted my first puppy socialization meetup through Critter's community feature! We had 12 puppies and their owners show up. Amazing to see these little ones learn to play together.",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        likes: 134,
        comments: [],
        shares: 23,
        tags: ["PuppyTraining", "DogSocialization"],
        timePosted: "1 day ago",
        liked: false
      }
    ]);

    // Sample events data
    setEvents([
      {
        id: 1,
        title: "Downtown Dog Meetup",
        description: "Join us for a fun afternoon at the dog park! All breeds welcome.",
        date: "May 15, 2023",
        time: "3:00 PM",
        location: "Central Park Dog Run",
        attendees: 32,
        image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        id: 2,
        title: "Pet First Aid Workshop",
        description: "Learn essential first aid skills for your pets in this hands-on workshop.",
        date: "May 22, 2023",
        time: "10:00 AM",
        location: "Community Center",
        attendees: 18,
        image: "https://images.unsplash.com/photo-1612531822120-3d11c059df1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        id: 3,
        title: "Cat Lovers Convention",
        description: "The purr-fect event for cat enthusiasts! Shop vendors, meet adoptable cats, and more.",
        date: "June 5, 2023",
        time: "11:00 AM",
        location: "City Convention Center",
        attendees: 156,
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    ]);

    // Sample members data
    setMembers([
      {
        id: 1,
        name: "Emma Wilson",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        role: "Pet Sitter & Dog Walker",
        bio: "5 years experience with all dog breeds. Certified in pet first aid and CPR.",
        pets: 2,
        followers: 248
      },
      {
        id: 2,
        name: "David Chen",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        role: "Veterinary Assistant",
        bio: "I love sharing pet care tips and helping owners keep their furry friends healthy!",
        pets: 3,
        followers: 412
      },
      {
        id: 3,
        name: "Tanya Brooks",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        role: "Pet Photographer",
        bio: "Capturing the personality of your pets in every shot. Available for bookings!",
        pets: 4,
        followers: 598
      }
    ]);
  }, []);

  // Handle liking a post
  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newLikedStatus = !post.liked;
        return {
          ...post,
          liked: newLikedStatus,
          likes: newLikedStatus ? post.likes + 1 : post.likes - 1
        };
      }
      return post;
    }));
  };

  // Filter posts by category
  const filteredPosts = selectedCategory === "all"
    ? posts
    : posts.filter(post => post.tags.some(tag =>
      tag.toLowerCase().includes(selectedCategory.toLowerCase())
    ));

  // Search functionality
  const searchedPosts = searchQuery
    ? filteredPosts.filter(post =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    : filteredPosts;

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with Pet Lovers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share experiences, get advice, and join events with pet owners and caregivers in your area.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Search posts, topics, or members..."
                    className="pl-10 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter size={16} />
                    Filters
                    <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                  </Button>

                  {/* New Post Dialog */}
                  <Dialog open={isNewPostDialogOpen} onOpenChange={setIsNewPostDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-critter-purple hover:bg-deep-purple">
                        <PlusCircle size={16} className="mr-2" />
                        New Post
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle>Create a New Post</DialogTitle>
                        <DialogDescription>
                          Share your pet story, ask a question, or connect with other pet lovers.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4 my-2">
                        <div className="flex items-center gap-3 mb-2">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Your profile" />
                            <AvatarFallback>YP</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">Current User</div>
                            <div className="text-xs text-gray-500">Posting to community</div>
                          </div>
                        </div>

                        <Textarea
                          placeholder="What's on your mind about your pets?"
                          value={newPostContent}
                          onChange={(e) => setNewPostContent(e.target.value)}
                          className="min-h-[120px] border border-gray-300 focus:border-critter-purple"
                        />

                        {newPostImage && (
                          <div className="relative">
                            <img
                              src={newPostImage}
                              alt="Upload preview"
                              className="w-full h-auto max-h-40 object-cover rounded-lg"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-6 w-6"
                              onClick={() => setNewPostImage(null)}
                            >
                              <X size={14} />
                            </Button>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 mb-2">
                          {newPostTags.map(tag => (
                            <Badge key={tag} variant="secondary" className="flex items-center gap-1 bg-gray-100">
                              #{tag}
                              <button onClick={() => handleRemoveTag(tag)} className="ml-1 text-gray-500 hover:text-gray-700">
                                <X size={12} />
                              </button>
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center">
                          <Input
                            type="text"
                            placeholder="Add a tag (press Enter)"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddTag();
                              }
                            }}
                            className="flex-grow"
                          />
                          <Button
                            variant="outline"
                            onClick={handleAddTag}
                            className="ml-2"
                          >
                            Add
                          </Button>
                        </div>

                        <input
                          type="file"
                          accept="image/*"
                          ref={fileInputRef}
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>

                      <DialogFooter className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => fileInputRef.current?.click()}
                                  className="rounded-full h-9 w-9"
                                >
                                  <Image size={18} className="text-gray-600" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Add an image</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="rounded-full h-9 w-9"
                                >
                                  <Smile size={18} className="text-gray-600" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Add emoji</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>

                        <Button
                          className="bg-critter-purple hover:bg-deep-purple"
                          disabled={!newPostContent.trim()}
                          onClick={handleCreatePost}
                        >
                          Post
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Filter Options */}
              {showFilters && (
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 pt-4 border-t"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    className={selectedCategory === 'all' ? 'bg-critter-purple' : ''}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All Posts
                  </Button>
                  <Button
                    variant={selectedCategory === 'DogWalking' ? 'default' : 'outline'}
                    className={selectedCategory === 'DogWalking' ? 'bg-critter-purple' : ''}
                    onClick={() => setSelectedCategory('DogWalking')}
                  >
                    Dog Walking
                  </Button>
                  <Button
                    variant={selectedCategory === 'PetCare' ? 'default' : 'outline'}
                    className={selectedCategory === 'PetCare' ? 'bg-critter-purple' : ''}
                    onClick={() => setSelectedCategory('PetCare')}
                  >
                    Pet Care
                  </Button>
                  <Button
                    variant={selectedCategory === 'Training' ? 'default' : 'outline'}
                    className={selectedCategory === 'Training' ? 'bg-critter-purple' : ''}
                    onClick={() => setSelectedCategory('Training')}
                  >
                    Training
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Posts Feed */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {searchedPosts.length > 0 ? (
                searchedPosts.map(post => (
                  <motion.div
                    key={post.id}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                    variants={itemVariants}
                  >
                    <div className="p-5">
                      {/* Author Info */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={post.author.image} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">{post.author.name}</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <span>{post.author.role}</span>
                              <span className="text-gray-300">•</span>
                              <span>{post.timePosted}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-xs text-gray-500 flex items-center">
                            <MapPin size={12} className="mr-1" />
                            {post.author.location}
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Save Post</DropdownMenuItem>
                              <DropdownMenuItem>Follow User</DropdownMenuItem>
                              <DropdownMenuItem>Report Post</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="mb-4">
                        <p className="text-gray-700">{post.content}</p>
                      </div>

                      {/* Post Image */}
                      {post.image && (
                        <div className="mt-3 mb-4 rounded-lg overflow-hidden">
                          <img
                            src={post.image}
                            alt="Post attachment"
                            className="w-full h-auto object-cover max-h-96"
                          />
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-50">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Engagement */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex gap-1 text-xs text-gray-500">
                          <span>{post.likes} likes</span>
                          <span>•</span>
                          <span>{post.comments.length} comments</span>
                        </div>

                        <div className="flex gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`text-sm flex items-center gap-1 ${post.liked ? 'text-red-500' : 'text-gray-500'}`}
                            onClick={() => handleLike(post.id)}
                          >
                            <Heart
                              size={16}
                              className={post.liked ? 'fill-red-500' : ''}
                            />
                            Like
                          </Button>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-sm flex items-center gap-1 text-gray-500"
                            onClick={() => togglePostExpansion(post.id)}
                          >
                            <MessageSquare size={16} />
                            Comment
                          </Button>

                          <div className="relative">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-sm flex items-center gap-1 text-gray-500"
                              onClick={() => setShowShareOptions(showShareOptions === post.id ? null : post.id)}
                            >
                              <Share2 size={16} />
                              Share
                            </Button>

                            {/* Share Options Popup */}
                            <AnimatePresence>
                              {showShareOptions === post.id && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  className="absolute right-0 bottom-10 bg-white shadow-lg rounded-lg p-2 border border-gray-200 z-10 w-[220px]"
                                >
                                  <div className="text-xs font-medium text-gray-500 px-2 py-1 mb-1">
                                    Share this post
                                  </div>
                                  <div className="grid grid-cols-1 gap-1">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="justify-start text-sm"
                                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                                    >
                                      <Facebook size={14} className="mr-2 text-blue-600" />
                                      Facebook
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="justify-start text-sm"
                                      onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                    >
                                      <Twitter size={14} className="mr-2 text-blue-400" />
                                      Twitter
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="justify-start text-sm"
                                      onClick={() => window.open(`mailto:?body=${encodeURIComponent(window.location.href)}`, '_blank')}
                                    >
                                      <Mail size={14} className="mr-2 text-gray-600" />
                                      Email
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="justify-start text-sm"
                                      onClick={() => copyPostLink(post.id)}
                                    >
                                      <Copy size={14} className="mr-2 text-gray-600" />
                                      Copy Link
                                    </Button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>

                      {/* Comments Section */}
                      <AnimatePresence>
                        {post.isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-gray-100"
                          >
                            {/* Existing Comments */}
                            {post.comments.length > 0 && (
                              <div className="space-y-3 mb-4">
                                {post.comments.map(comment => (
                                  <div key={comment.id} className="flex gap-3">
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage src={comment.author.image} alt={comment.author.name} />
                                      <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                      <div className="bg-gray-50 p-3 rounded-lg">
                                        <div className="font-semibold text-sm">{comment.author.name}</div>
                                        <p className="text-sm text-gray-700">{comment.content}</p>
                                      </div>
                                      <div className="flex gap-4 mt-1">
                                        <button
                                          className={`text-xs ${comment.liked ? 'text-red-500' : 'text-gray-500'}`}
                                          onClick={() => handleLikeComment(post.id, comment.id)}
                                        >
                                          Like • {comment.likes}
                                        </button>
                                        <span className="text-xs text-gray-500">{comment.timePosted}</span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Add Comment */}
                            <div className="flex gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage
                                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                                  alt="Your profile"
                                />
                                <AvatarFallback>YP</AvatarFallback>
                              </Avatar>
                              <div className="flex-1 flex">
                                <Input
                                  type="text"
                                  placeholder="Write a comment..."
                                  className="flex-1 bg-gray-50 border-gray-200"
                                  value={commentInputs[post.id] || ''}
                                  onChange={(e) => setCommentInputs({
                                    ...commentInputs,
                                    [post.id]: e.target.value
                                  })}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                      e.preventDefault();
                                      handleAddComment(post.id);
                                    }
                                  }}
                                />
                                <Button
                                  className="ml-2 bg-critter-purple hover:bg-deep-purple"
                                  onClick={() => handleAddComment(post.id)}
                                  disabled={!commentInputs[post.id]?.trim()}
                                >
                                  <Send size={16} />
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="text-gray-400 mb-3">
                    <Search size={40} className="mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No posts found</h3>
                  <p className="text-gray-500">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </motion.div>

            {searchedPosts.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  Load More
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Community Tabs */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Tabs defaultValue="trending" onValueChange={setActiveTab}>
                <div className="px-4 pt-4">
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="trending" className="data-[state=active]:bg-critter-purple data-[state=active]:text-white">
                      <TrendingUp size={16} className="mr-2" />
                      Trending
                    </TabsTrigger>
                    <TabsTrigger value="events" className="data-[state=active]:bg-critter-purple data-[state=active]:text-white">
                      <Calendar size={16} className="mr-2" />
                      Events
                    </TabsTrigger>
                    <TabsTrigger value="members" className="data-[state=active]:bg-critter-purple data-[state=active]:text-white">
                      <Users size={16} className="mr-2" />
                      Members
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="trending" className="p-4">
                  <h3 className="font-semibold mb-3">Trending Topics</h3>
                  <ul className="space-y-3">
                    <li className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium">#DogTrainingTips</div>
                      <div className="text-xs text-gray-500">324 posts this week</div>
                    </li>
                    <li className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium">#CatCare</div>
                      <div className="text-xs text-gray-500">198 posts this week</div>
                    </li>
                    <li className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium">#RescuePets</div>
                      <div className="text-xs text-gray-500">156 posts this week</div>
                    </li>
                  </ul>
                </TabsContent>

                <TabsContent value="events" className="p-0">
                  <div className="px-4 pt-4 pb-2">
                    <h3 className="font-semibold mb-3">Upcoming Events</h3>
                  </div>
                  <div className="space-y-1">
                    {events.map(event => (
                      <div key={event.id} className="hover:bg-gray-50 transition-colors">
                        <div className="p-4 border-b border-gray-100">
                          <div className="flex gap-3">
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{event.title}</h4>
                              <div className="text-xs text-gray-500 flex items-center mt-1 mb-2">
                                <Calendar size={12} className="mr-1" />
                                {event.date}, {event.time}
                              </div>
                              <div className="text-xs text-gray-500 flex items-center">
                                <MapPin size={12} className="mr-1" />
                                {event.location}
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 flex justify-between items-center">
                            <span className="text-xs text-gray-500">
                              {event.attendees} attending
                            </span>
                            <Button size="sm" variant="outline" className="text-xs h-7">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3">
                    <Button variant="ghost" className="w-full text-sm text-critter-purple hover:text-deep-purple">
                      View All Events
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="members" className="p-0">
                  <div className="px-4 pt-4 pb-2">
                    <h3 className="font-semibold mb-3">Featured Members</h3>
                  </div>
                  <div className="space-y-1">
                    {members.map(member => (
                      <div key={member.id} className="hover:bg-gray-50 transition-colors">
                        <div className="p-4 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={member.image} alt={member.name} />
                              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex justify-between items-center">
                                <h4 className="font-medium text-gray-900">{member.name}</h4>
                                <Button size="sm" variant="outline" className="text-xs h-7">
                                  Follow
                                </Button>
                              </div>
                              <div className="text-xs text-gray-500">{member.role}</div>
                              <div className="text-xs text-gray-500 mt-1">
                                {member.pets} pets • {member.followers} followers
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3">
                    <Button variant="ghost" className="w-full text-sm text-critter-purple hover:text-deep-purple">
                      View All Members
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-semibold mb-3">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1 h-4 w-4 rounded-full bg-[#B9E900] flex items-center justify-center text-white text-xs">
                    1
                  </div>
                  <p>Be respectful and kind to all community members.</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1 h-4 w-4 rounded-full bg-[#B9E900] flex items-center justify-center text-white text-xs">
                    2
                  </div>
                  <p>Share helpful information and support other pet owners.</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1 h-4 w-4 rounded-full bg-[#B9E900] flex items-center justify-center text-white text-xs">
                    3
                  </div>
                  <p>Only share appropriate and relevant content.</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1 h-4 w-4 rounded-full bg-[#B9E900] flex items-center justify-center text-white text-xs">
                    4
                  </div>
                  <p>Report any concerns to our community moderators.</p>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <Button variant="link" className="text-critter-purple hover:text-deep-purple p-0 h-auto">
                  Read Full Guidelines
                </Button>
              </div>
            </div>

            {/* Join the Community */}
            <div className="bg-gradient-to-br from-critter-purple to-deep-purple rounded-xl shadow-sm p-5 text-white">
              <h3 className="font-bold text-xl mb-2">Join Our Pet Care Community</h3>
              <p className="text-sm text-white/90 mb-4">
                Connect with local pet lovers, share stories, and get support for all your pet care needs.
              </p>
              <Button className="w-full bg-white text-critter-purple hover:bg-gray-100">
                Create Your Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
