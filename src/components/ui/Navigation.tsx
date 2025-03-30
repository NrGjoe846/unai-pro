import { Home, Code2, BookOpen, Calendar, Users, Info } from 'lucide-react';
import { FloatingDock } from './ui/floating-dock';

const Navigation = () => {
  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-white/70 group-hover:text-unai-blue transition-colors" />,
      href: "/home",
    },
    {
      title: "Courses",
      icon: <BookOpen className="h-full w-full text-white/70 group-hover:text-unai-blue transition-colors" />,
      href: "/courses",
    },
    {
      title: "Eve Platform",
      icon: <Code2 className="h-full w-full text-white/70 group-hover:text-unai-blue transition-colors" />,
      href: "/eve-platform",
    },
    {
      title: "Events",
      icon: <Calendar className="h-full w-full text-white/70 group-hover:text-unai-blue transition-colors" />,
      href: "/events",
    },
    {
      title: "Team",
      icon: <Users className="h-full w-full text-white/70 group-hover:text-unai-blue transition-colors" />,
      href: "/team",
    },
    {
      title: "About",
      icon: <Info className="h-full w-full text-white/70 group-hover:text-unai-blue transition-colors" />,
      href: "/about",
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
};

export default Navigation;
