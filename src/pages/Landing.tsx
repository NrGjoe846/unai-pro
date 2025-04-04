import React from "react";
import { useNavigate } from "react-router-dom";
import ParticleRing from "../components/ParticleRing";
import GradientText from "../components/GradientText";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleUpgradeClick = () => {
    navigate("/Home");
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <ParticleRing />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Unai Verse</h1>
        <p className="text-xl mb-8">Discover a universe of knowledge and skills.</p>
        <button
          onClick={handleUpgradeClick}
          className="glass-panel px-8 py-4 rounded-full hover:bg-white/5 transition-all duration-300 shadow-[0_0_15px_rgba(0,119,255,0.3)] hover:shadow-[0_0_25px_rgba(0,119,255,0.5)] transform hover:scale-105"
        >
          <GradientText
            colors={["#0077ff", "#00a8ff", "#0077ff"]}
            animationSpeed={3}
            showBorder={false}
            className="text-xl font-bold tracking-wide"
          >
            Upgrade Your Skills
          </GradientText>
        </button>
      </div>
    </div>
  );
};

export default Landing;
