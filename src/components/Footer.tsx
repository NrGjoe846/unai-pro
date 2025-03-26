
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-unai-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Logo and info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 text-xl font-bold mb-4">
              <span className="gradient-text">UNAI</span>
              <span className="text-white">TECH</span>
            </div>
            <p className="text-white/60 mb-6">
              Revolutionizing AI education through immersive, gamified learning experiences that prepare you for the future.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" className="text-white/70 hover:text-unai-blue transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" className="text-white/70 hover:text-unai-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" className="text-white/70 hover:text-unai-blue transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" className="text-white/70 hover:text-unai-blue transition-colors" aria-label="Youtube">
                <Youtube size={18} />
              </a>
              <a href="https://discord.com" className="text-white/70 hover:text-unai-blue transition-colors" aria-label="Discord">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/eve-platform" className="text-white/60 hover:text-white transition-colors">
                  Eve Platform
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/60 hover:text-white transition-colors">
                  AI Courses
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white/60 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-white/60 hover:text-white transition-colors">
                  Research
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/60 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/60 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/60 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-4">Join our newsletter</h4>
            <p className="text-white/60 mb-4">
              Get the latest news and updates on AI learning, events, and career opportunities.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-l-full px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-unai-blue w-full"
              />
              <button className="bg-unai-blue hover:bg-unai-blue/90 text-white rounded-r-full px-4 transition-colors flex items-center">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            © 2023 UNAI TECH. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/legal" className="text-white/40 hover:text-white text-sm transition-colors">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
