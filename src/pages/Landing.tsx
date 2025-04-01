import React from "react";
import { useNavigate } from "react-router-dom";
import ParticleRing from "../components/ParticleRing";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleUpgradeClick = () => {
    navigate("/Home"); // Changed from "/Home" to "/" since Index is our main route
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
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition duration-300"
        >
          Upgrade Your Skills
        </button>
      </div>
    </div>
  );
};

export default Landing;
