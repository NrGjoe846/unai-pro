import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Lightbulb, Target, Users, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Alex Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
      delay: 0.1
    },
    {
      name: 'Sarah Johnson',
      role: 'AI Research Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
      delay: 0.2
    },
    {
      name: 'Michael Zhang',
      role: 'Lead AI Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      delay: 0.3
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Education',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
      delay: 0.4
    }
  ];

  const testimonials = [
    {
      quote: "UNAI TECH transformed my understanding of AI. Their hands-on approach and real-world projects gave me the confidence to transition into AI development.",
      name: "Emily Chen",
      title: "AI Developer at TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "The gamified learning experience made complex AI concepts accessible and enjoyable. I went from a complete beginner to deploying my first ML model in weeks.",
      name: "Marcus Johnson",
      title: "Data Scientist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "Their AI ethics course opened my eyes to the importance of responsible AI development. UNAI TECH is setting the standard for comprehensive AI education.",
      name: "Dr. Sarah Williams",
      title: "AI Ethics Researcher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "The community support and networking opportunities are unmatched. I found my current role through UNAI TECH's industry partnerships.",
      name: "David Park",
      title: "ML Engineer at AI Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "The project-based curriculum helped me build a strong portfolio. The mentorship from industry experts was invaluable for my career growth.",
      name: "Lisa Rodriguez",
      title: "AI Product Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-unai-black">
      <Navbar />
      
      {/* Header */}
      <div className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-unai-darkblue/30 to-unai-black"></div>
        
        <div className="relative section-container pt-12">
          <div className="text-center">
            <h1 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
              Our Story
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="gradient-text">About</span> <span className="text-white">UNAI TECH</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/70 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We're revolutionizing AI education through innovative learning experiences,
              cutting-edge technology, and a commitment to accessible AI knowledge for all.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Mission & Vision */}
      <div className="section-container py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 animate-slide-in-left">
            <div className="glass-panel p-8 h-full">
              <div className="h-12 w-12 rounded-full bg-unai-blue/20 flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-unai-blue" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
              <p className="text-white/70 mb-4">
                To democratize AI education by creating engaging, accessible, and effective learning experiences that empower individuals to master artificial intelligence technologies and contribute to innovation.
              </p>
              <p className="text-white/70">
                We believe that AI literacy is critical for the future workforce, and our mission is to make AI knowledge accessible to everyone regardless of their background or prior experience.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-slide-in-right">
            <div className="glass-panel p-8 h-full">
              <div className="h-12 w-12 rounded-full bg-unai-blue/20 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-unai-blue" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Our Vision</h3>
              <p className="text-white/70 mb-4">
                To create a world where AI literacy is universal, where humans and AI systems collaborate effectively, and where ethical AI development is the standard across all industries and applications.
              </p>
              <p className="text-white/70">
                We envision UNAI TECH as the global leader in AI education, setting the standard for how AI skills are taught, learned, and applied in real-world contexts.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="section-container py-16">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
            What Drives Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">Our Core Values</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-xl font-semibold mb-3 text-white">Innovation</h4>
            <p className="text-white/70">
              We constantly push the boundaries of what's possible in AI education, embracing new technologies and pedagogical approaches to create the most effective learning experiences.
            </p>
          </div>
          
          <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-semibold mb-3 text-white">Accessibility</h4>
            <p className="text-white/70">
              We believe AI education should be available to everyone. We design our platforms and content to be approachable for learners of all backgrounds and experience levels.
            </p>
          </div>
          
          <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-xl font-semibold mb-3 text-white">Ethics</h4>
            <p className="text-white/70">
              We promote responsible AI development by embedding ethical considerations throughout our curriculum and leading by example in our own AI implementations.
            </p>
          </div>
          
          <div className="glass-panel p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-xl font-semibold mb-3 text-white">Community</h4>
            <p className="text-white/70">
              We foster a collaborative environment where learners, educators, and AI practitioners can connect, share knowledge, and grow together.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="section-container py-16 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
            Success Stories
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">What Our Students Say</span>
          </h3>
        </div>

        <div className="relative">
          {/* First Row */}
          <div className="flex gap-6 animate-[slide_250s_linear_infinite]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="glass-panel p-6 rounded-xl min-w-[400px] flex-shrink-0"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white/80 mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-unai-blue">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex gap-6 mt-6 animate-[slide_200s_linear_infinite_reverse]">
            {[...testimonials.reverse(), ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="glass-panel p-6 rounded-xl min-w-[400px] flex-shrink-0"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white/80 mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-unai-blue">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-full w-1/3 bg-gradient-to-r from-unai-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-unai-black to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="section-container py-16">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
            The Visionaries
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">Meet Our Team</span>
          </h3>
          <p className="max-w-2xl mx-auto text-white/70 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our team of AI experts, educators, and innovators are dedicated to creating 
            the future of AI education and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="glass-panel overflow-hidden rounded-xl animate-fade-in"
              style={{ animationDelay: `${member.delay}s` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-unai-darkblue"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-unai-blue">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/team" className="btn-secondary flex items-center gap-2">
            View Full Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      
      {/* Join Us CTA */}
      <div className="section-container py-20">
        <div className="glass-panel relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-unai-blue/20 to-transparent"></div>
          
          <div className="relative z-10 p-10 md:p-16 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-unai-blue/20 mb-6 mx-auto">
              <Rocket className="h-8 w-8 text-unai-blue" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Join Our AI Revolution</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Whether you're a student, professional, or organization, there's a place for you
              in our community of AI innovators and learners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/signup" className="btn-primary text-base">
                Join UNAI TECH
              </Link>
              <Link to="/contact" className="btn-secondary text-base">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
