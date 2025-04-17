import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaw, FaGift, FaHistory, FaDog, FaCut, FaClinicMedical, FaBone, FaCoins, FaTrophy, FaArrowRight, FaCalendarAlt, FaExchangeAlt, FaStar, FaCheck } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const CritterCoins = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const coinBalance = 150;
  const [showConfetti, setShowConfetti] = useState(false);
  const [coinAnimation, setCoinAnimation] = useState(false);

  // Trigger coin balance animation on page load
  useEffect(() => {
    setCoinAnimation(true);

    // Show confetti effect when the component mounts
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Fire confetti effect with shorter duration
  useEffect(() => {
    if (showConfetti) {
      const duration = 1500;
      const end = Date.now() + duration;

      const colors = ['#8A4FFE', '#4ECDC4', '#FF9933']; // Updated brand colors for confetti

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });

        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }
  }, [showConfetti]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const coinCounterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        delay: 0.3
      }
    }
  };

  // Ways to earn coins
  const earnMethods = [
    {
      icon: <FaDog />,
      title: 'Dog Walking',
      description: 'Earn 10-30 coins per walk depending on your subscription tier',
      rate: '10-30 coins/walk',
      color: 'from-[#8A4FFE] to-[#6930c3]'  // Brand purple
    },
    {
      icon: <FaPaw />,
      title: 'Pet Sitting',
      description: 'Earn coins for each day of pet sitting services',
      rate: '20 coins/day',
      color: 'from-[#4ECDC4] to-[#33a39c]'  // New teal color replacing yellow-green
    },
    {
      icon: <FaCut />,
      title: 'Grooming',
      description: 'Book grooming appointments to earn coins',
      rate: '15 coins/session',
      color: 'from-[#FF9933] to-[#e07a1b]'  // Brand orange
    },
    {
      icon: <FaClinicMedical />,
      title: 'Vet Consultations',
      description: 'Earn coins when you book vet consultations',
      rate: '25 coins/visit',
      color: 'from-[#8A4FFE] to-[#6930c3]'  // Brand purple
    }
  ];

  // Ways to spend coins
  const spendOptions = [
    {
      icon: <FaDog />,
      title: 'Free Dog Walk',
      cost: 100,
      description: 'Redeem for a free dog walking session',
      color: 'from-[#8A4FFE] to-[#6930c3]'  // Brand purple
    },
    {
      icon: <FaPaw />,
      title: 'Pet Sitting Discount',
      cost: 150,
      description: '20% off your next pet sitting booking',
      color: 'from-[#4ECDC4] to-[#33a39c]'  // New teal color replacing yellow-green
    },
    {
      icon: <FaCut />,
      title: 'Grooming Service',
      cost: 200,
      description: 'Get a free basic grooming service',
      color: 'from-[#FF9933] to-[#e07a1b]'  // Brand orange
    },
    {
      icon: <FaClinicMedical />,
      title: 'Vet Consultation',
      cost: 250,
      description: 'Free online vet consultation',
      color: 'from-[#8A4FFE] to-[#6930c3]'  // Brand purple
    }
  ];

  // Milestone rewards
  const milestones = [
    {
      coins: 100,
      title: 'Treat Pack',
      description: 'Premium treats for your furry friend',
      unlocked: true,
      icon: <FaBone />,
      color: 'from-[#4ECDC4] to-[#33a39c]'  // Teal instead of green
    },
    {
      coins: 250,
      title: 'Toy Bundle',
      description: 'Collection of fun toys for your pet',
      unlocked: false,
      icon: <FaGift />,
      color: 'from-[#8A4FFE] to-[#6930c3]'  // Brand purple
    },
    {
      coins: 500,
      title: 'Critter Care Kit',
      description: 'Essential grooming tools and supplies',
      unlocked: false,
      icon: <FaCut />,
      color: 'from-[#FF9933] to-[#e07a1b]'  // Brand orange
    },
    {
      coins: 1000,
      title: 'Premium Hamper',
      description: 'Luxury accessories and premium food',
      unlocked: false,
      icon: <FaTrophy />,
      color: 'from-[#8A4FFE] to-[#6930c3]'  // Brand purple
    }
  ];

  // Recent transactions
  const transactions = [
    { id: 1, date: '2023-05-15', description: 'Dog Walking - 60min', amount: '+15', icon: <FaDog /> },
    { id: 2, date: '2023-05-10', description: 'Redeemed Treat Pack', amount: '-100', icon: <FaGift /> },
    { id: 3, date: '2023-05-07', description: 'Pet Sitting - 2 days', amount: '+40', icon: <FaPaw /> },
    { id: 4, date: '2023-05-01', description: 'Grooming Session', amount: '+15', icon: <FaCut /> }
  ];

  // Visual progress data
  const progressPercentage = (coinBalance / 1000) * 100;

  // User stats
  const userStats = [
    { label: 'Earned this Month', value: '70', icon: <FaCoins />, color: 'bg-[#4ECDC4]/10 text-[#33a39c]' },
    { label: 'Next Reward at', value: '250', icon: <FaGift />, color: 'bg-[#8A4FFE]/10 text-[#8A4FFE]' },
    { label: 'Lifetime Earned', value: '450', icon: <FaTrophy />, color: 'bg-[#FF9933]/10 text-[#FF9933]' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Refined header - more compact with better alignment */}
      <div className="bg-gradient-to-r from-[#8A4FFE] to-[#FF5F7E] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold text-white">CritterCoins Rewards</h1>
            <p className="text-white/90 text-base mt-2 max-w-2xl">
              Earn coins while caring for your furry friends and redeem them for exciting pet rewards!
            </p>
          </header>
        </div>
      </div>

      {/* Main content with adjusted spacing for better proportion */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Coins Dashboard - adjusted position for better proportion with header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 -mt-14 relative z-10"
          >
            <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Coin Balance with Animation */}
              <motion.div
                initial="hidden"
                animate={coinAnimation ? "visible" : "hidden"}
                variants={coinCounterVariants}
                className="text-center md:text-left"
              >
                <p className="text-gray-600 font-medium mb-1">Your CritterCoins</p>
                <div className="flex items-center justify-center md:justify-start">
                  <div className="bg-[#8A4FFE]/10 p-3 rounded-full mr-4">
                    <FaCoins className="text-[#8A4FFE] text-2xl md:text-3xl" />
                  </div>
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8A4FFE] to-[#FF5F7E] text-transparent bg-clip-text">
                    {coinBalance}
                  </span>
                </div>
              </motion.div>

              {/* Stats Dashboard */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
                {userStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 border border-gray-100 hover:shadow-sm transition-all flex items-center">
                    <div className={`${stat.color} p-2 rounded-lg mr-3`}>
                      {React.cloneElement(stat.icon, { size: 18 })}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{stat.label}</p>
                      <p className="font-semibold text-gray-800">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress to next reward */}
              <div className="flex flex-col items-center md:items-end">
                <p className="text-sm font-medium text-gray-500 mb-2">Progress to Premium Hamper</p>
                <div className="w-full max-w-[200px] bg-gray-100 h-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#8A4FFE] to-[#FF5F7E]"
                  ></motion.div>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  <span className="font-medium">{coinBalance}</span>/1000 coins
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area with Navigation + Content - improved layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation - improved styles */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md sticky top-24">
                <nav className="p-3">
                  {[
                    { id: 'dashboard', label: 'Dashboard', icon: <FaPaw /> },
                    { id: 'earn', label: 'Ways to Earn', icon: <FaCoins /> },
                    { id: 'spend', label: 'Redeem Rewards', icon: <FaGift /> },
                    { id: 'history', label: 'Transaction History', icon: <FaHistory /> }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center p-3 mb-1 rounded-lg transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-[#8A4FFE] text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-3">
                        {React.cloneElement(item.icon, {
                          size: 18,
                          className: activeTab === item.id ? "text-white" : "text-gray-400"
                        })}
                      </span>
                      <span className="font-medium">{item.label}</span>

                      {activeTab === item.id && (
                        <motion.div
                          layoutId="activePill"
                          className="ml-auto bg-white/20 rounded-full h-2 w-2"
                        />
                      )}
                    </button>
                  ))}
                </nav>

                {/* Quick Actions - refined styling */}
                <div className="px-6 py-5 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Quick Actions</h3>
                  <button className="w-full bg-[#8A4FFE] hover:bg-[#7340e0] text-white py-2.5 rounded-lg font-medium mb-3 transition-colors text-sm flex items-center justify-center shadow-sm">
                    <FaDog className="mr-2" /> Book a Service
                  </button>
                  <button className="w-full border border-[#8A4FFE] text-[#8A4FFE] hover:bg-[#8A4FFE]/5 py-2.5 rounded-lg font-medium transition-colors text-sm flex items-center justify-center">
                    <FaExchangeAlt className="mr-2" /> Redeem Coins
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content Container */}
            <div className="lg:col-span-3">
              {/* Tab Content with AnimatePresence */}
              <AnimatePresence mode="wait">
                {/* Dashboard Tab - New Tab for Overview */}
                {activeTab === 'dashboard' && (
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {/* Available Rewards Section */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                      <div className="p-5 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                          <FaGift className="mr-3 text-[#8A4FFE]" /> Available Rewards
                        </h2>
                      </div>

                      <div className="p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {spendOptions.slice(0, 2).map((option, index) => (
                            <div key={index} className="flex border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow">
                              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center mr-4 text-white`}>
                                {React.cloneElement(option.icon, { size: 20 })}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                  <h3 className="font-semibold text-gray-800">{option.title}</h3>
                                  <div className="flex items-center bg-[#8A4FFE]/10 text-[#8A4FFE] px-2 py-1 rounded-full text-xs font-medium">
                                    <FaCoins className="mr-1" size={10} />
                                    {option.cost}
                                  </div>
                                </div>
                                <p className="text-gray-600 text-sm">{option.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 text-center">
                          <button
                            onClick={() => setActiveTab('spend')}
                            className="text-[#8A4FFE] hover:text-[#6930c3] font-medium text-sm inline-flex items-center"
                          >
                            View All Rewards <FaArrowRight size={12} className="ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                      <div className="p-5 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                          <FaHistory className="mr-3 text-[#8A4FFE]" /> Recent Activity
                        </h2>
                      </div>

                      <div className="divide-y divide-gray-50">
                        {transactions.slice(0, 3).map(transaction => {
                          const isPositive = transaction.amount.startsWith('+');

                          return (
                            <div key={transaction.id} className="px-5 py-3 flex justify-between items-center">
                              <div className="flex items-center">
                                <div className={`h-9 w-9 rounded-lg flex items-center justify-center mr-3 ${
                                  isPositive
                                    ? 'bg-[#4ECDC4]/10 text-[#33a39c]'
                                    : 'bg-[#8A4FFE]/10 text-[#8A4FFE]'
                                }`}>
                                  {transaction.icon}
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800 text-sm">{transaction.description}</p>
                                  <p className="text-xs text-gray-500">{transaction.date}</p>
                                </div>
                              </div>
                              <span className={`font-semibold ${
                                isPositive
                                  ? 'text-[#33a39c]'
                                  : 'text-[#8A4FFE]'
                              }`}>
                                {transaction.amount}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="p-4 text-center border-t border-gray-50">
                        <button
                          onClick={() => setActiveTab('history')}
                          className="text-[#8A4FFE] hover:text-[#6930c3] font-medium text-sm inline-flex items-center"
                        >
                          View Full History <FaArrowRight size={12} className="ml-1" />
                        </button>
                      </div>
                    </div>

                    {/* Next Milestone */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 p-5">
                      <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
                        <FaTrophy className="mr-3 text-[#FF9933]" /> Your Next Milestone
                      </h2>

                      {milestones.find(m => m.coins > coinBalance) && (
                        <div className="flex items-start">
                          {(() => {
                            const nextMilestone = milestones.find(m => m.coins > coinBalance);
                            if (!nextMilestone) return null;

                            return (
                              <>
                                <div className={`h-14 w-14 rounded-lg bg-gradient-to-br ${nextMilestone.color} flex items-center justify-center mr-4 text-white`}>
                                  {React.cloneElement(nextMilestone.icon, { size: 24 })}
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start mb-3">
                                    <div>
                                      <h3 className="font-semibold text-gray-800">{nextMilestone.title}</h3>
                                      <p className="text-gray-600 text-sm">{nextMilestone.description}</p>
                                    </div>
                                    <div className="bg-[#8A4FFE]/10 text-[#8A4FFE] px-3 py-1 rounded-full text-sm font-medium">
                                      {nextMilestone.coins} coins
                                    </div>
                                  </div>

                                  <div>
                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                      <span>Your progress</span>
                                      <span>{coinBalance}/{nextMilestone.coins} coins</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-gradient-to-r from-[#8A4FFE] to-[#FF5F7E]"
                                        style={{ width: `${(coinBalance / nextMilestone.coins) * 100}%` }}
                                      ></div>
                                    </div>
                                    <p className="text-sm mt-3 text-gray-600">
                                      You need <span className="font-semibold text-[#8A4FFE]">{nextMilestone.coins - coinBalance}</span> more coins to unlock this reward.
                                    </p>
                                  </div>
                                </div>
                              </>
                            );
                          })()}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Earn Tab */}
                {activeTab === 'earn' && (
                  <motion.div
                    key="earn"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {/* Hero banner - brand colors */}
                    <div className="relative bg-gradient-to-r from-[#8A4FFE] to-[#FF5F7E] rounded-xl p-6 text-white overflow-hidden shadow-md">
                      <div className="absolute right-0 bottom-0 opacity-5">
                        <FaCoins size={180} className="transform -rotate-12" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2">Earn More CritterCoins</h2>
                      <p className="mb-4 max-w-xl opacity-95 text-white/90">Complete pet care activities to earn coins and unlock special rewards.</p>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-[#8A4FFE] py-2 px-5 rounded-lg font-medium shadow-sm"
                      >
                        Book a Service
                      </motion.button>
                    </div>

                    {/* Earn Method Cards */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    >
                      {earnMethods.map((method, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
                        >
                          <div className="p-5">
                            <div className="flex items-center mb-4">
                              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mr-4 text-white shadow-sm`}>
                                {React.cloneElement(method.icon, { size: 22 })}
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-800">{method.title}</h3>
                                <div className="text-[#8A4FFE] font-medium text-sm mt-0.5 flex items-center">
                                  <FaCoins className="mr-1 text-[#8A4FFE]" size={12} />
                                  <span>{method.rate}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                            <div className="border-t border-gray-100 pt-3 mt-1">
                              <button className="text-[#8A4FFE] font-medium hover:text-[#6930c3] transition-colors text-sm flex items-center">
                                Book now <FaArrowRight className="ml-1.5" size={12} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Tips section - brand colors */}
                    <div className="bg-[#8A4FFE]/5 rounded-xl p-5 border border-[#8A4FFE]/10">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <FaStar className="mr-2 text-[#FF9933]" size={16} /> Pro Tips to Earn Faster
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="bg-[#4ECDC4] text-white h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 text-xs font-medium">1</div>
                          <p className="text-gray-700 text-sm">Book recurring services to earn loyalty bonuses (+5 coins per recurring booking)</p>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-[#4ECDC4] text-white h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 text-xs font-medium">2</div>
                          <p className="text-gray-700 text-sm">Leave reviews after completed services to earn extra coins (+3 coins per review)</p>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-[#4ECDC4] text-white h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 text-xs font-medium">3</div>
                          <p className="text-gray-700 text-sm">Refer friends to Critter and earn 50 coins for each friend who completes their first booking</p>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Spend Tab */}
                {activeTab === 'spend' && (
                  <motion.div
                    key="spend"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Rewards Grid */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8"
                    >
                      {spendOptions.map((option, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                          {/* Card header with indicator bar */}
                          <div className={`h-1 bg-gradient-to-r ${option.color}`}></div>

                          <div className="p-5">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center">
                                <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center mr-4 text-white shadow-sm`}>
                                  {React.cloneElement(option.icon, { size: 22 })}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{option.title}</h3>
                              </div>
                              <div className="flex items-center bg-[#8A4FFE]/10 text-[#8A4FFE] px-2.5 py-1 rounded-full text-sm">
                                <FaCoins className="mr-1.5 text-[#8A4FFE]" size={12} />
                                <span className="font-medium">{option.cost}</span>
                              </div>
                            </div>

                            <p className="text-gray-600 text-sm mb-4">{option.description}</p>

                            <div className="relative">
                              {coinBalance < option.cost && (
                                <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] rounded flex items-center justify-center z-10">
                                  <span className="bg-white px-3 py-1 rounded text-xs font-medium text-gray-500 shadow-sm border border-gray-100">
                                    {option.cost - coinBalance} more coins needed
                                  </span>
                                </div>
                              )}
                              <motion.button
                                whileHover={coinBalance >= option.cost ? { scale: 1.02 } : {}}
                                whileTap={coinBalance >= option.cost ? { scale: 0.98 } : {}}
                                className={`w-full py-2.5 rounded-lg font-medium text-sm transition-colors ${
                                  coinBalance >= option.cost
                                    ? `bg-gradient-to-r ${option.color} text-white shadow-sm`
                                    : 'bg-gray-100 text-gray-400'
                                }`}
                                disabled={coinBalance < option.cost}
                              >
                                {coinBalance >= option.cost ? 'Redeem Now' : 'Not Enough Coins'}
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Milestone Rewards */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-xl shadow-sm overflow-hidden p-5"
                    >
                      <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FaTrophy className="mr-3 text-[#FF9933]" size={18} />
                        Milestone Rewards
                      </h2>

                      <div className="relative pl-8 pb-4">
                        {/* Progress line */}
                        <div className="absolute left-[9px] top-2 bottom-0 w-0.5 bg-gray-200"></div>

                        <div className="space-y-8">
                          {milestones.map((milestone, index) => {
                            const isComplete = coinBalance >= milestone.coins;

                            return (
                              <div key={index} className="relative">
                                {/* Milestone marker */}
                                <div className={`absolute -left-8 h-[18px] w-[18px] rounded-full border-[3px] ${isComplete ? 'border-[#4ECDC4] bg-white' : 'border-gray-300 bg-white'} flex items-center justify-center z-10`}>
                                  {isComplete && (
                                    <div className="h-[6px] w-[6px] rounded-full bg-[#4ECDC4]"></div>
                                  )}
                                </div>

                                {/* Milestone content */}
                                <div className={`${milestone.unlocked ? 'opacity-100' : 'opacity-90'}`}>
                                  <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center">
                                      <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${milestone.color} flex items-center justify-center mr-3 text-white shadow-sm opacity-${isComplete ? '100' : '70'}`}>
                                        {React.cloneElement(milestone.icon, { size: 18 })}
                                      </div>
                                      <div>
                                        <h3 className="text-base font-semibold text-gray-800">{milestone.title}</h3>
                                        <p className="text-gray-500 text-sm">{milestone.description}</p>
                                      </div>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                      isComplete
                                        ? 'bg-[#4ECDC4]/10 text-[#33a39c] border border-[#4ECDC4]/20'
                                        : 'bg-gray-50 text-gray-500 border border-gray-100'
                                    }`}>
                                      {isComplete ? 'Unlocked!' : `${milestone.coins} coins`}
                                    </div>
                                  </div>

                                  {isComplete && (
                                    <div className="ml-[52px]">
                                      <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`px-4 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r ${milestone.color} text-white shadow-sm mt-2`}
                                      >
                                        Claim Reward
                                      </motion.button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* History Tab */}
                {activeTab === 'history' && (
                  <motion.div
                    key="history"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-800">Transaction History</h2>
                      <div className="flex space-x-2">
                        <button className="px-2.5 py-1 text-xs font-medium border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
                          <FaCalendarAlt className="inline mr-1" size={11} /> Filter
                        </button>
                        <button className="px-2.5 py-1 text-xs font-medium border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 transition-colors">
                          <FaExchangeAlt className="inline mr-1" size={11} /> Sort
                        </button>
                      </div>
                    </div>

                    <div className="divide-y divide-gray-50">
                      {transactions.map(transaction => {
                        const isPositive = transaction.amount.startsWith('+');

                        return (
                          <motion.div
                            key={transaction.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="px-5 py-3.5 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className={`h-9 w-9 rounded-lg flex items-center justify-center mr-3 ${
                                  isPositive
                                    ? 'bg-[#4ECDC4]/10 text-[#33a39c]'
                                    : 'bg-[#8A4FFE]/10 text-[#8A4FFE]'
                                }`}>
                                  {transaction.icon}
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800 text-sm">{transaction.description}</p>
                                  <p className="text-xs text-gray-500">{transaction.date}</p>
                                </div>
                              </div>
                              <span className={`font-semibold ${
                                isPositive
                                  ? 'text-[#33a39c]'
                                  : 'text-[#8A4FFE]'
                              }`}>
                                {transaction.amount}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="px-5 py-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500">Showing 4 of 24 transactions</span>
                      </div>
                      <button className="px-4 py-1.5 bg-[#8A4FFE]/10 text-[#8A4FFE] rounded-lg text-sm font-medium hover:bg-[#8A4FFE]/20 transition-colors">
                        View All Transactions
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CritterCoins;
