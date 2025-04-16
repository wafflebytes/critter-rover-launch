import { Heart, MessageSquare, Coins, Award, Users, MapPin, Star, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { ScrollAnimation } from "./ui/scroll-animation";

const testimonials = [
  {
    id: 1,
    name: "Ravi Sharma",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    comment: "My pup Max had the best time with his sitter! Highly recommend the service to all pet parents.",
    rating: 5,
    likes: 142,
    coins: 20,
    service: "Pet Sitting"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    comment: "My cat Whiskers is so picky, but loved the sitter we found on Critter! The app made it super easy to book.",
    rating: 4.5,
    likes: 98,
    coins: 35,
    service: "Pet Sitting"
  },
  {
    id: 3,
    name: "Ankit Verma",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    comment: "Found amazing dog walkers in my area. My Golden Retriever is so happy now! Critter has been a game-changer.",
    rating: 5,
    likes: 217,
    coins: 45,
    service: "Pet Sitting"
  }
];

const CommunitySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-14 px-4 bg-gray-50 relative overflow-hidden" id="community" ref={sectionRef}>
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-300"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-300"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -10, 0],
            y: [0, 10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center bg-purple-100 px-4 py-1.5 rounded-full mb-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Users size={18} className="text-critter-purple mr-2" />
              </motion.div>
              <span className="text-sm font-semibold text-critter-purple">Pet Parent Community</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Meet Our <span className="text-critter-purple">Happy Pet Parents</span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of pet parents who've found the perfect care for their pets.
            </p>
          </div>
        </ScrollAnimation>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white backdrop-blur-sm bg-opacity-90">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-gradient-to-r from-critter-purple to-purple-600 text-white font-medium px-2.5 py-1">
                    <Sparkles size={10} className="mr-1" /> Pet Sitting
                  </Badge>
                </div>

                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3 ring-2 ring-critter-purple/20"
                      >
                        <img
                          src={`https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=random`}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin size={10} className="mr-1" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i, duration: 0.2 }}
                        >
                          <Star
                            size={12}
                            className={i < Math.floor(testimonial.rating) ? "text-yellow-400" : "text-gray-300"}
                            fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 p-3 rounded-xl mb-2 border border-gray-100"
                  >
                    <p className="text-gray-700 italic text-xs">"{testimonial.comment}"</p>
                  </motion.div>
                </CardContent>

                <CardFooter className="px-5 py-3 bg-gray-50 flex justify-between items-center border-t border-gray-100">
                  <div className="flex items-center">
                    <motion.div whileTap={{ scale: 0.9 }}>
                      <Button variant="ghost" size="sm" className="px-2 py-0 h-auto hover:bg-gray-100">
                        <Heart size={14} className="text-gray-400 hover:text-red-500 mr-1" />
                        <span className="text-xs text-gray-600">{testimonial.likes}</span>
                      </Button>
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-gradient-to-r from-yellow-100 to-amber-100 px-2 py-1 rounded-full text-xs font-medium text-yellow-700"
                  >
                    <Coins size={10} className="text-yellow-600 mr-1" />
                    <span>+{testimonial.coins} Coins</span>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <ScrollAnimation animation="fadeUp" delay={0.5} className="mt-10 text-center">
          <div className="relative inline-block">
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 text-yellow-400 opacity-70"
              animate={{
                rotate: [0, 15, 0, -15, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Award size={24} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-critter-purple text-critter-purple hover:bg-critter-purple/5 px-6 py-6"
              >
                <Users size={16} className="mr-2" />
                Join Our Community
              </Button>
            </motion.div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Over 15,000 pet parents sharing experiences and reviews
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CommunitySection;
