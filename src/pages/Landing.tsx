import React from "react";
import { useNavigate } from "react-router-dom";
import Spline from '@splinetool/react-spline';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleUpgradeClick = () => {
    navigate("/Home");
  };

  return (
    <div className="relative min-h-screen bg-unai-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-unai-black via-unai-darkblue/40 to-unai-black z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/ZpDCYJYTdNJ2w4cW/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Welcome to <span className="gradient-text">Unai Verse</span>
          </h1>
          <p className="text-xl mb-8 text-white/70">
            Discover a universe of knowledge and skills.
          </p>
          <button
            onClick={handleUpgradeClick}
            className="btn-primary text-lg"
          >
            Upgrade Your Skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing
