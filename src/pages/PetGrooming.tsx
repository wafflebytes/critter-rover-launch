import React from 'react';
import { Scissors, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PetGrooming = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="max-w-2xl w-full">
        <motion.div
          className="bg-white rounded-3xl shadow-lg overflow-hidden p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-5 rounded-full">
              <Scissors size={60} className="text-critter-purple" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Coming Soon!
          </h1>

          <p className="text-xl text-critter-purple font-medium mb-4">
            We're still grooming this page to perfection!
          </p>

          <p className="text-gray-600 mb-8">
            Our team is working like a dog to bring you the best pet grooming services. We don't want to brush off the importance of a well-designed experience, so we're taking our time to make it paw-sitively amazing!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Link>
            </Button>

            <Button asChild className="bg-critter-purple hover:bg-purple-700">
              <Link to="/find-walkers">
                Try Pet Walking instead
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PetGrooming;
