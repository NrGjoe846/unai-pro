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

  // Company milestones
  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'UNAI TECH was founded with a vision to revolutionize AI education.'
    },
    {
      year: '2021',
      title: 'Launch of Eve Platform',
      description: 'Introduced our flagship AI-powered learning platform.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to 50+ countries with 100,000+ active learners.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Named "Most Innovative EdTech Company" by Tech Innovation Awards.'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      content: "UNAI TECH's AI courses completely transformed my career. The hands-on projects and personalized learning path helped me land my dream job in machine learning.",
      author: "Emily Chen",
      role: "ML Engineer @ Microsoft",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      content: "The gamified learning experience made complex AI concepts easy to understand. The community support is incredible, and the mentorship program is top-notch.",
      author: "James Wilson",
      role: "Data Scientist @ Tesla",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      content: "As someone transitioning into AI from a different field, UNAI TECH provided the perfect structured learning path. Their project-based approach is revolutionary.",
      author: "Maria Garcia",
      role: "AI Researcher @ Stanford",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop"
    },
    {
      content: "The Eve AI platform's adaptive learning system is incredible. It's like having a personal AI tutor available 24/7.",
      author: "David Kim",
      role: "NLP Engineer @ OpenAI",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-unai-black">
      <Navbar />
      
      {/* About UNAI TECH Section */}
      <div className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-unai-darkblue/30 to-unai-black"></div>
        
        <div className="relative section-container">
          <div className="text-center mb-16">
            <h1 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
              About Us
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Pioneering the Future of <span className="gradient-text">AI Education</span>
            </h2>
            <p className="max-w-3xl mx-auto text-white/70 text-lg animate-fade-in">
              UNAI TECH is a leading AI education platform dedicated to making artificial intelligence 
              accessible, understandable, and practical for learners worldwide.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
              <p className="text-white/70 mb-6">
                To democratize AI education by providing accessible, high-quality learning experiences 
                that empower individuals to master artificial intelligence and shape the future of technology.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80">
                  <div className="h-2 w-2 bg-unai-blue rounded-full"></div>
                  <span>Making AI education accessible to everyone</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="h-2 w-2 bg-unai-blue rounded-full"></div>
                  <span>Building a global community of AI practitioners</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="h-2 w-2 bg-unai-blue rounded-full"></div>
                  <span>Fostering innovation through hands-on learning</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
              <p className="text-white/70 mb-6">
                To create a world where AI literacy is universal, enabling individuals and organizations 
                to harness the power of artificial intelligence for positive global impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80">
                  <div className="h-2 w-2 bg-unai-blue rounded-full"></div>
                  <span>Leading innovation in AI education</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="h-2 w-2 bg-unai-blue rounded-full"></div>
                  <span>Bridging the AI skills gap globally</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="h-2 w-2 bg-unai-blue rounded-full"></div>
                  <span>Shaping the future of work and technology</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Milestones */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Our Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="glass-panel p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-unai-blue font-bold text-xl mb-2">{milestone.year}</div>
                  <h4 className="text-white font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-white/70 text-sm">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="glass-panel p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100K+</div>
              <div className="text-white/70 text-sm">Active Learners</div>
            </div>
            <div className="glass-panel p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-white/70 text-sm">Countries</div>
            </div>
            <div className="glass-panel p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">200+</div>
              <div className="text-white/70 text-sm">Industry Partners</div>
            </div>
            <div className="glass-panel p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <div className="text-white/70 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

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

      {/* Testimonials Section */}
      <div className="section-container py-16 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-unai-blue mb-3">
            Success Stories
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">What Our Students Say</span>
          </h3>
          <p className="max-w-2xl mx-auto text-white/70">
            Hear from our community of learners who have transformed their careers through UNAI TECH
          </p>
        </div>

        <div className="relative">
          {/* First row */}
          <div className="flex gap-6 animate-[slide_250s_linear_infinite]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[500px] glass-panel p-8 rounded-xl"
              >
                <div className="flex gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-unai-blue">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-6 text-white/80">"{testimonial.content}"</div>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="flex gap-6 mt-6 animate-[slide_200s_linear_infinite_reverse]">
            {[...testimonials.reverse(), ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[500px] glass-panel p-8 rounded-xl"
              >
                <div className="flex gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-unai-blue">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-6 text-white/80">"{testimonial.content}"</div>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-unai-black to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-unai-black to-transparent"></div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
