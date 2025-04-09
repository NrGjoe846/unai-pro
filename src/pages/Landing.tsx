import React from "react";
import { useNavigate } from "react-router-dom";
import ParticleRing from "../components/ParticleRing";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleUpgradeClick = () => {
    navigate("/Home");
  };

  return (
    <div className="relative min-h-screen">
      {/* Particle Ring Background */}
      <div className="absolute inset-0 z-0">
        <ParticleRing />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Animated Text Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-unai-blue via-[#7E69AB] to-unai-lightblue animate-gradient-shift">
              Unai Verse
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            
          </p>
        </motion.div>

        {/* Animated Button Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <button
            onClick={handleUpgradeClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-unai-blue to-unai-lightblue rounded-full 
                     transform hover:scale-105 transition-all duration-300 
                     shadow-[0_0_20px_rgba(0,119,255,0.3)] hover:shadow-[0_0_30px_rgba(0,119,255,0.5)]"
          >
            {/* Button Content */}
            <div className="relative flex items-center gap-2 text-white font-bold text-lg">
              <span>Upgrade Your Skills</span>
              <Rocket className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>

            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-unai-blue to-unai-lightblue opacity-0 
                          group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-unai-blue/20 rounded-full filter blur-[100px] animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[40vw] h-[40vw] bg-unai-blue/10 rounded-full filter blur-[120px] animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] bg-[#9b87f5]/20 rounded-full filter blur-[150px] animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Landing;
