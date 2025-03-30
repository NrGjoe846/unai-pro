import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Target, Rocket, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Dr. Alex Chen',
      role: 'Founder & CEO @ UNAI TECH',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
      quote: "Our mission is to democratize AI education and make it accessible to everyone, regardless of their background.",
    },
    {
      name: 'Sarah Johnson',
      role: 'AI Research Director @ UNAI TECH',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
      quote: "The future of AI education lies in personalized, adaptive learning experiences that cater to each student's unique needs.",
    },
    {
      name: 'Michael Zhang',
      role: 'Lead AI Engineer @ UNAI TECH',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      quote: "Building scalable AI systems is not just about code, it's about creating solutions that can positively impact millions of lives.",
    }
  ];

  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isDragging, setIsDragging] = useState(false);

  const paginate = (newDirection: number) => {
    setCurrentIndex([currentIndex + newDirection, newDirection]);
  };

  const handleDragEnd = (event: any, { offset, velocity }: any) => {
    setIsDragging(false);
    const swipe = Math.abs(offset.x) * velocity.x;
    
    if (swipe < -10000) {
      paginate(1);
    } else if (swipe > 10000) {
      paginate(-1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 10
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <div className="min-h-screen bg-unai-black">
      <Navbar />
      
      {/* Header section... */}
      
      {/* Mission & Vision section... */}
      
      {/* Values section... */}

      {/* Team Section with Stacked Cards */}
      <div className="section-container py-16">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-unai-blue mb-3">
            The Visionaries
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Meet Our Team</span>
          </h3>
          <p className="max-w-2xl mx-auto text-white/70">
            Swipe or drag to view our team members
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative h-[500px] w-full max-w-md">
            <AnimatePresence custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                className="absolute w-full h-full bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex-shrink-0 mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-unai-blue/50 ring-offset-2 ring-offset-transparent">
                      <img 
                        src={teamMembers[Math.abs(currentIndex % teamMembers.length)].image} 
                        alt={teamMembers[Math.abs(currentIndex % teamMembers.length)].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {teamMembers[Math.abs(currentIndex % teamMembers.length)].name}
                    </h3>
                    <p className="text-unai-blue text-sm mb-4">
                      {teamMembers[Math.abs(currentIndex % teamMembers.length)].role}
                    </p>
                    <p className="text-white/80 italic">
                      "{teamMembers[Math.abs(currentIndex % teamMembers.length)].quote}"
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 text-center text-white/50 text-sm">
                    {!isDragging && (
                      <>Swipe to view {currentIndex < teamMembers.length - 1 ? 'next' : 'first'} member</>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/team" className="btn-secondary flex items-center gap-2">
            View Full Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      
      {/* Join Us CTA section... */}
      
      <Footer />
    </div>
  );
};

export default About;
