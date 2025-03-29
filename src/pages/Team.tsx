import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Alex Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
      bio: 'Former AI Research Lead at Google with over 15 years of experience in machine learning and AI education.',
      links: {
        email: 'alex@unaitech.com',
        github: 'https://github.com/alexchen',
        linkedin: 'https://linkedin.com/in/alexchen'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'AI Research Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
      bio: 'PhD in Computer Science from MIT, specializing in deep learning and natural language processing.',
      links: {
        email: 'sarah@unaitech.com',
        github: 'https://github.com/sarahj',
        linkedin: 'https://linkedin.com/in/sarahj'
      }
    },
    {
      name: 'Michael Zhang',
      role: 'Lead AI Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      bio: 'Full-stack AI developer with expertise in building scalable machine learning systems.',
      links: {
        email: 'michael@unaitech.com',
        github: 'https://github.com/michaelz',
        linkedin: 'https://linkedin.com/in/michaelz'
      }
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Education',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
      bio: 'Former professor of Computer Science with a passion for making AI education accessible to all.',
      links: {
        email: 'priya@unaitech.com',
        github: 'https://github.com/priyas',
        linkedin: 'https://linkedin.com/in/priyas'
      }
    },
    {
      name: 'David Wilson',
      role: 'AI Ethics Lead',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
      bio: 'Expert in AI ethics and responsible AI development with a focus on fairness and transparency.',
      links: {
        email: 'david@unaitech.com',
        github: 'https://github.com/davidw',
        linkedin: 'https://linkedin.com/in/davidw'
      }
    },
    {
      name: 'Emily Chen',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop',
      bio: 'Product visionary with experience in EdTech and AI platforms.',
      links: {
        email: 'emily@unaitech.com',
        github: 'https://github.com/emilyc',
        linkedin: 'https://linkedin.com/in/emilyc'
      }
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-unai-black">
      <Navbar />
      
      {/* Header */}
      <div className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-unai-darkblue/30 to-unai-black"></div>
        
        <div className="relative section-container pt-12">
          <div className="text-center">
            <h1 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
              Our Team
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="gradient-text">Meet the Innovators</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/70 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our diverse team of AI experts, educators, and innovators are dedicated to 
              revolutionizing AI education and making it accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="section-container py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="glass-panel overflow-hidden rounded-xl group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-unai-darkblue transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-unai-black via-transparent to-transparent"></div>
                </div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <a 
                    href={`mailto:${member.links.email}`}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                    title="Email"
                  >
                    <Mail className="h-4 w-4 text-white" />
                  </a>
                  <a 
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                    title="GitHub"
                  >
                    <Github className="h-4 w-4 text-white" />
                  </a>
                  <a 
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-unai-blue mb-4">{member.role}</p>
                <p className="text-white/70 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
