
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EvePlatform from '../components/EvePlatform';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import Statistics from '../components/Statistics';
import WhyChooseUs from '../components/WhyChooseUs';
import UpcomingEvents from '../components/UpcomingEvents';
import EveBot from '../components/EveBot';
import { Calendar, Zap, Code, Lightbulb, Users, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-unai-black overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Statistics Section */}
      <Statistics />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Upcoming Events Section */}
      <UpcomingEvents />
      
      {/* Featured Programs Section */}
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-unai-blue mb-3 animate-fade-in">
            AI Excellence
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Featured Programs
          </h3>
          <p className="max-w-2xl mx-auto text-white/70 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover our cutting-edge AI programs designed to propel you into the future of technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Zap className="h-6 w-6" />}
            title="Eve AI Learning Platform"
            description="Personalized AI learning paths with interactive challenges and real-time feedback."
            delay={0.1}
          />
          <FeatureCard 
            icon={<Calendar className="h-6 w-6" />}
            title="AI Workshops & Events"
            description="Join hackathons, bootcamps, and workshops led by industry experts."
            delay={0.2}
          />
          <FeatureCard 
            icon={<Code className="h-6 w-6" />}
            title="Internships & Careers"
            description="Launch your AI career with our industry partnerships and internship programs."
            delay={0.3}
          />
          <FeatureCard 
            icon={<Lightbulb className="h-6 w-6" />}
            title="AI Research Programs"
            description="Contribute to cutting-edge AI research and innovation projects."
            delay={0.4}
          />
          <FeatureCard 
            icon={<Users className="h-6 w-6" />}
            title="AI Community Hub"
            description="Connect with a global community of AI enthusiasts, learners, and experts."
            delay={0.5}
          />
          <FeatureCard 
            icon={<Book className="h-6 w-6" />}
            title="Certification Courses"
            description="Earn industry-recognized certifications in AI, ML, and data science."
            delay={0.6}
          />
        </div>
      </div>
      
      {/* Eve Platform Section */}
      <EvePlatform />
      
      {/* CTA Section */}
      <div className="section-container py-20">
        <div className="glass-panel relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-unai-blue/20 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-unai-blue/20 rounded-full filter blur-[80px] animate-float opacity-60"></div>
          
          <div className="relative z-10 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              <span className="gradient-text">Ready to Lead the AI Revolution?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Join thousands of learners embracing the future of AI education with UNAI TECH's innovative learning ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/signup" className="btn-primary text-base">
                Start Your AI Journey
              </Link>
              <Link to="/courses" className="btn-secondary text-base">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Eve Bot */}
      <EveBot />
      
      <Footer />
    </div>
  );
};

export default Index;
