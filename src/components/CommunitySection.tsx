import { Heart, MessageSquare, Coins, Award, Users, MapPin, Star, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { ScrollAnimation } from "./ui/scroll-animation";

// Single testimonial instead of multiple
const testimonial = {
  name: "Maya Singh",
  location: "Bangalore, India",
  image: "public/customer-review.png",
  comment: "Finding the perfect pet sitter used to be a challenge until I discovered Critter Rover. The platform connected me with trusted sitters in my neighborhood. My dog Bruno loves his new friend, and the peace of mind is priceless!",
  rating: 5,
  likes: 217,
  coins: 45,
  service: "Pet Walking"
};

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
    <section className="py-8 px-4 bg-gray-50 relative overflow-hidden" id="community" ref={sectionRef}>
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

      <div className="container mx-auto max-w-5xl relative z-10">
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center bg-purple-100 px-3 py-1 rounded-full mb-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Users size={14} className="text-critter-purple mr-1" />
              </motion.div>
              <span className="text-xs font-semibold text-critter-purple">Pet Parent Community</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Meet Our <span className="text-critter-purple">Happy Pet Parents</span>
            </h2>

            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Join thousands of pet parents who've found the perfect care for their pets.
            </p>
          </div>
        </ScrollAnimation>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div
            variants={item}
            className="w-full"
          >
            <Card className="overflow-hidden border-none shadow hover:shadow-md transition-all duration-300 bg-white backdrop-blur-sm bg-opacity-90">
              <div className="flex flex-row">
                {/* Left side - Image */}
                <div className="relative w-2/3 h-96 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-gradient-to-r from-critter-purple to-purple-600 text-white font-medium px-2 py-0.5 text-xs">
                    <Sparkles size={8} className="mr-1" /> {testimonial.service}
                  </Badge>
                </div>

                {/* Right side - Content */}
                <div className="w-1/3 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2 ring-1 ring-critter-purple/20"
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
                          <MapPin size={8} className="mr-1" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-2 mb-3">
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

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-gray-50 p-3 rounded-lg mb-2 border border-gray-100"
                  >
                    <p className="text-gray-700 italic text-xs leading-relaxed">"{testimonial.comment}"</p>
                  </motion.div>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center">
                      <motion.div whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="sm" className="px-2 py-0 h-auto hover:bg-gray-100">
                          <Heart size={12} className="text-gray-400 hover:text-red-500 mr-1" />
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
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        <ScrollAnimation animation="fadeUp" delay={0.3} className="mt-6 text-center">
          <div className="relative inline-block">
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 opacity-70"
              animate={{
                rotate: [0, 15, 0, -15, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Award size={16} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-critter-purple text-critter-purple hover:bg-critter-purple/5 px-4 py-2 text-sm"
              >
                <Users size={14} className="mr-2" />
                Join Our Community
              </Button>
            </motion.div>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Over 15,000 pet parents sharing experiences and reviews
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CommunitySection;
