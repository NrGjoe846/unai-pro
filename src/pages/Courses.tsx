
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Book, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, category, rating, duration, level, image, delay = 0 }) => {
  return (
    <div 
      className="glass-panel overflow-hidden rounded-xl card-hover animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-unai-black/80 z-10"></div>
        <div className="absolute top-3 left-3 bg-unai-blue/90 text-white text-xs py-1 px-3 rounded-full z-20">
          {category}
        </div>
        <div 
          className="absolute inset-0 bg-unai-darkblue"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-unai-gold fill-unai-gold" />
            <span className="ml-1 text-white/90 text-sm">{rating}</span>
          </div>
          
          <div className="flex items-center text-white/70 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          
          <div className="text-white/70 text-sm">
            {level} Level
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/courses/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-unai-blue hover:text-unai-lightblue transition-colors flex items-center text-sm group"
          >
            View Course
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div className="flex items-center">
            <Book className="h-4 w-4 text-white/50 mr-2" />
            <span className="text-white/50 text-sm">12 Modules</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const courseCategories = [
    'All Courses',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'AI Ethics',
    'Data Science'
  ];
  
  const courses = [
    {
      title: 'Foundations of Machine Learning',
      category: 'Machine Learning',
      rating: '4.9',
      duration: '8 weeks',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Advanced Natural Language Processing',
      category: 'NLP',
      rating: '4.8',
      duration: '10 weeks',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Deep Learning for Computer Vision',
      category: 'Computer Vision',
      rating: '4.7',
      duration: '12 weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2066&auto=format&fit=crop'
    },
    {
      title: 'AI in Healthcare Applications',
      category: 'AI Ethics',
      rating: '4.9',
      duration: '6 weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Reinforcement Learning Masterclass',
      category: 'Machine Learning',
      rating: '4.6',
      duration: '8 weeks',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Ethical AI Development',
      category: 'AI Ethics',
      rating: '4.8',
      duration: '4 weeks',
      level: 'All Levels',
      image: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?q=80&w=2069&auto=format&fit=crop'
    },
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
              AI Education
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="gradient-text">AI Academy</span> <span className="text-white">Courses</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/70 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover our comprehensive range of AI courses designed by industry experts. 
              From beginner to advanced, find your perfect AI learning path.
            </p>
          </div>
        </div>
      </div>
      
      {/* Course Categories */}
      <div className="section-container py-0">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {courseCategories.map((category, index) => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                index === 0 
                  ? 'bg-unai-blue text-white' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Course Grid */}
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard 
              key={course.title}
              {...course}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="btn-secondary flex items-center gap-2">
            Load More Courses
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="section-container py-20">
        <div className="glass-panel relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-unai-gold/10 to-transparent"></div>
          
          <div className="relative z-10 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              <span className="gradient-gold">Accelerate Your AI Career</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Join our premium AI certification program and gain access to all courses, 
              expert mentorship, and exclusive job opportunities.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/certification" className="btn-primary text-base">
                Get Certified
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Courses;
