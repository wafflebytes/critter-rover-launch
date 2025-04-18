import { useState } from "react";
import {
  Calendar, MapPin, Heart, Award, Settings, Edit,
  PawPrint, Clock, Shield, MessageSquare, Plus,
  Camera, Medal, Coins, Zap, Coffee
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Pet profile data
  const pet = {
    name: "Sheru",
    breed: "Golden Retriever",
    age: "3 years",
    weight: "30 kg",
    birthday: "May 12, 2020",
    photo: "https://images.unsplash.com/photo-1612774412771-005aa083aebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    coverPhoto: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    bio: "Energetic and friendly Golden Retriever who loves long walks, playing fetch, and cuddling. Sheru is gentle with children and gets along well with other dogs.",
    toys: ["Cricket balls", "Rope toys", "Stuffed squirrel"],
    personality: ["Friendly", "Energetic", "Loyal", "Smart"],
    favoriteTreats: ["Paneer", "Peanut butter", "Carrots"],
    activities: ["Fetch", "Swimming", "Morning walks"],
    vetInfo: {
      name: "Dr. Priya Sharma",
      clinic: "Pawsome Pet Care Bangalore",
      lastCheckup: "March 15, 2023",
      nextAppointment: "September 18, 2023"
    },
    careSchedule: [
      { day: "Monday", activity: "Morning Walk", time: "7:00 AM", caregiver: "Rahul S." },
      { day: "Wednesday", activity: "Grooming", time: "2:00 PM", caregiver: "Ananya B." },
      { day: "Friday", activity: "Cubbon Park Visit", time: "5:00 PM", caregiver: "Owner" },
    ],
    stats: {
      walkStreak: 14,
      totalWalks: 156,
      averageDistance: 2.3,
      favoriteParks: ["Cubbon Park", "Lalbagh Gardens"],
      energyLevel: 85,
      coinsEarned: 247
    },
    achievements: [
      { name: "Walk Warrior", description: "Completed 150+ walks", icon: <PawPrint size={14} /> },
      { name: "Social Butterfly", description: "Met 50+ dog friends", icon: <Heart size={14} /> },
      { name: "Healthy Pup", description: "Perfect vet record", icon: <Shield size={14} /> }
    ],
    favoriteCaregivers: [
      { id: 1, name: "Rahul Sharma", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", rating: 4.9, services: ["Walking", "Sitting"] },
      { id: 2, name: "Ananya Bhatt", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", rating: 5.0, services: ["Grooming", "Training"] }
    ],
    upcomingBookings: [
      { id: 1, service: "Dog Walking", date: "Tomorrow", time: "10:00 AM", caregiver: "Rahul Sharma" },
      { id: 2, service: "Grooming", date: "Aug 30, 2023", time: "2:00 PM", caregiver: "Ananya Bhatt" }
    ],
    recentActivities: [
      { date: "Aug 15", activity: "Visited the vet", note: "Annual checkup - all healthy!" },
      { date: "Aug 12", activity: "Cubbon Park", note: "Made friends with a Labrador" },
      { date: "Aug 10", activity: "Grooming", note: "Got a summer haircut" }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-0 pb-12">
      {/* Cover Photo */}
      <div className="relative h-64 w-full bg-gradient-to-r from-critter-purple to-deep-purple overflow-hidden">
        <img
          src={pet.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover opacity-50"
        />
        <Button
          size="sm"
          variant="outline"
          className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm border-white/50 text-white hover:bg-white/40"
        >
          <Camera size={14} className="mr-2" />
          Change Cover
        </Button>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Profile Header */}
        <div className="relative -mt-24 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Pet Avatar */}
            <div className="relative">
              <Avatar className="h-36 w-36 md:h-48 md:w-48 rounded-full ring-4 ring-white shadow-lg">
                <AvatarImage src={pet.photo} alt={pet.name} className="object-cover" />
                <AvatarFallback className="bg-critter-purple text-4xl text-white">
                  {pet.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute bottom-1 right-1 rounded-full h-8 w-8 bg-critter-purple hover:bg-deep-purple"
              >
                <Camera size={14} />
              </Button>
            </div>

            {/* Pet Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{pet.name}</h1>
                  <div className="text-gray-500 mt-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                    <span className="flex items-center justify-center md:justify-start">
                      <PawPrint size={14} className="mr-1 text-critter-purple" />
                      {pet.breed}
                    </span>
                    <span className="hidden md:inline text-gray-300">•</span>
                    <span className="flex items-center justify-center md:justify-start">
                      <Calendar size={14} className="mr-1 text-critter-purple" />
                      {pet.age}
                    </span>
                    <span className="hidden md:inline text-gray-300">•</span>
                    <span className="flex items-center justify-center md:justify-start">
                      <MapPin size={14} className="mr-1 text-critter-purple" />
                      Bangalore, Karnataka
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 md:mt-0 justify-center md:justify-start">
                  <Button size="sm" className="bg-critter-purple hover:bg-deep-purple">
                    <Edit size={14} className="mr-2" />
                    Edit Profile
                  </Button>
                  <Button size="sm" variant="ghost" className="ml-2">
                    <Settings size={14} className="mr-2" />
                    Settings
                  </Button>
                </div>
              </div>

              <p className="mt-4 text-gray-700">{pet.bio}</p>

              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                {pet.personality.map((trait) => (
                  <Badge key={trait} variant="outline" className="bg-purple-50 text-critter-purple">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 flex items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <PawPrint size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Walk Streak</p>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900">{pet.stats.walkStreak}</span>
                <span className="text-gray-500 text-sm ml-1">days</span>
              </div>
              <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                <Zap size={12} />
                <span>+3 from last week</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 flex items-center">
            <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
              <Coins size={20} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">CritterCoins Earned</p>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900">{pet.stats.coinsEarned}</span>
                <span className="text-gray-500 text-sm ml-1">coins</span>
              </div>
              <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                <Zap size={12} />
                <span>Redeemed 5 this month</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 flex items-center">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <Award size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Achievements</p>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-gray-900">12</span>
                <span className="text-gray-500 text-sm ml-1">badges earned</span>
              </div>
              <div className="flex items-center gap-1 text-purple-600 text-xs font-medium">
                <Medal size={12} />
                <span>3 new awards!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-6">
                <TabsTrigger value="overview" className="data-[state=active]:bg-critter-purple data-[state=active]:text-white">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="health" className="data-[state=active]:bg-critter-purple data-[state=active]:text-white">
                  Health & Care
                </TabsTrigger>
                <TabsTrigger value="activities" className="data-[state=active]:bg-critter-purple data-[state=active]:text-white">
                  Activities
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Energy Level */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Today's Energy Level</h3>
                  <div className="flex items-center gap-3">
                    <Coffee size={18} className="text-gray-400" />
                    <Progress value={pet.stats.energyLevel} className="h-3" />
                    <span className="text-sm font-medium">{pet.stats.energyLevel}%</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {pet.name} has plenty of energy today! A long walk in Cubbon Park or play session would be perfect.
                  </p>
                </div>

                {/* Upcoming Bookings */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">Upcoming Bookings</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-critter-purple hover:text-deep-purple hover:bg-purple-50">
                      View All
                    </Button>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {pet.upcomingBookings.map((booking) => (
                      <div key={booking.id} className="py-3 flex justify-between items-center">
                        <div>
                          <div className="flex items-center gap-2">
                            {booking.service === "Dog Walking" ? (
                              <PawPrint size={16} className="text-green-500" />
                            ) : (
                              <Heart size={16} className="text-amber-500" />
                            )}
                            <span className="font-medium">{booking.service}</span>
                          </div>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <Calendar size={12} className="mr-1" />
                            {booking.date}, {booking.time}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            with {booking.caregiver}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="h-8">Manage</Button>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    <Plus size={14} className="mr-2" />
                    Book a New Service
                  </Button>
                </div>

                {/* Favorite Caregivers */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-900">Favorite Caregivers</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-critter-purple hover:text-deep-purple hover:bg-purple-50">
                      View All
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pet.favoriteCaregivers.map((caregiver) => (
                      <div key={caregiver.id} className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={caregiver.image} alt={caregiver.name} />
                          <AvatarFallback>{caregiver.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium">{caregiver.name}</div>
                          <div className="flex items-center text-sm">
                            <Award size={12} className="text-yellow-500 mr-1" />
                            <span>{caregiver.rating}</span>
                            <span className="mx-2 text-gray-300">•</span>
                            {caregiver.services.join(", ")}
                          </div>
                        </div>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <MessageSquare size={14} />
                        </Button>
                      </div>
                    ))}
                    <div className="flex items-center justify-center p-3 border border-dashed border-gray-200 rounded-lg">
                      <Button variant="ghost" className="h-auto py-6 text-critter-purple hover:text-deep-purple hover:bg-purple-50">
                        <Plus size={16} className="mr-2" />
                        Find New Caregivers
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="health" className="space-y-6">
                {/* Placeholder for health tab content */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Health Information</h3>
                  <p className="text-gray-600">Health details will appear here.</p>
                </div>
              </TabsContent>

              <TabsContent value="activities" className="space-y-6">
                {/* Placeholder for activities tab content */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Pet Activities</h3>
                  <p className="text-gray-600">Activity details will appear here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 space-y-6">
            {/* Achievements Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Award size={18} className="text-critter-purple mr-2" />
                  Achievements
                </CardTitle>
                <CardDescription>
                  Milestones and badges {pet.name} has earned
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pet.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-critter-purple to-deep-purple flex items-center justify-center text-white">
                      {achievement.icon}
                    </div>
                    <div>
                      <div className="font-medium">{achievement.name}</div>
                      <div className="text-xs text-gray-500">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-critter-purple hover:bg-purple-50">
                  View All Achievements
                </Button>
              </CardFooter>
            </Card>

            {/* Care Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calendar size={18} className="text-critter-purple mr-2" />
                  Care Schedule
                </CardTitle>
                <CardDescription>
                  {pet.name}'s weekly care routine
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {pet.careSchedule.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <div>
                      <div className="font-medium">{schedule.day}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={12} className="mr-1" />
                        {schedule.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">{schedule.activity}</div>
                      <div className="text-xs text-gray-500">with {schedule.caregiver}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Plus size={14} className="mr-2" />
                  Add to Schedule
                </Button>
              </CardFooter>
            </Card>

            {/* Photos Gallery Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Camera size={18} className="text-critter-purple mr-2" />
                  Photo Gallery
                </CardTitle>
                <CardDescription>
                  Recent photos of {pet.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Gallery"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="Gallery"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Gallery"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80"
                    alt="Gallery"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
                    alt="Gallery"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    +24
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-critter-purple hover:bg-purple-50">
                  View Full Gallery
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
