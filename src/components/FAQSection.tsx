import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    question: "How do I book a pet sitter or dog walker?",
    answer: "It's simple! Enter your location, browse profiles of available caregivers, check their reviews and availability. Once you find the right match, select your dates and times, add any special instructions for your pet, and complete the booking with our secure payment system."
  },
  {
    question: "How are pet sitters verified?",
    answer: "All Critter caregivers go through our comprehensive verification process including ID verification, background checks, and interviews. We continuously monitor reviews to ensure high-quality service. Your pet's safety is our priority."
  },
  {
    question: "What if I need to cancel a booking?",
    answer: "You can easily cancel through your account dashboard. If you cancel 48+ hours in advance, you'll receive a full refund. Cancellations within 48 hours may be subject to a partial fee to compensate sitters who've reserved that time for you."
  },
  {
    question: "Is there insurance coverage for my pet?",
    answer: "Yes, all bookings include insurance coverage for your pet during the service period. This covers veterinary expenses up to ₹20,000 for any issues that may arise during our care."
  },
  {
    question: "How do reward points work?",
    answer: "You earn points each time you book services, refer friends, or leave reviews. These points can be redeemed for discounts on future services, premium features, or exclusive partner offers."
  },
  {
    question: "Can I meet the sitter before booking?",
    answer: "Absolutely! We encourage a complimentary meet-and-greet before your first booking with a new sitter. This helps ensure both you and your pet are comfortable with the caregiver before the actual service."
  },
  {
    question: "How do I become a pet sitter on Critter?",
    answer: "To join as a caregiver, click on the 'Apply Now' button and complete your profile detailing your experience and services offered. You'll need to pass our verification process, which includes ID verification and a background check. Once approved, you can start accepting bookings!"
  },
  {
    question: "How do I set my rates as a caregiver?",
    answer: "You can set your own rates based on your experience, services, and local market. We provide suggested rate ranges based on your location and service type to help you price competitively."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 bg-white" id="faq" ref={sectionRef}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center justify-center bg-[#B9E900]/20 px-4 py-1.5 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HelpCircle size={18} className="text-[#6220D9] mr-2" />
            <span className="text-sm font-semibold text-[#6220D9]">Frequently Asked Questions</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Common Questions
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Find answers to common questions about our pet care services, booking process, and more.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                openIndex === index
                  ? 'border-[#6220D9] shadow-sm'
                  : 'border-gray-200'
              }`}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="flex justify-between items-center w-full px-6 py-4 text-left"
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-[#6220D9]" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-6 pb-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600">
            Still have questions? {" "}
            <motion.a
              href="#"
              className="text-[#6220D9] font-medium hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact our support team
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
