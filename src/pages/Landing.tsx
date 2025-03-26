// src/pages/Landing.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleUpgradeClick = () => {
    navigate("/home"); // Redirect to the Index page (now at /home)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Unai Verse</h1>
      <p className="text-xl mb-8">Discover a universe of knowledge and skills.</p>
      <button
        onClick={handleUpgradeClick}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition duration-300"
      >
        Upgrade Your Skills
      </button>
    </div>
  );
};

export default Landing;
