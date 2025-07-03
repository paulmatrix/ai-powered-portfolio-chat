
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatInterface } from "@/components/ChatInterface";

const InteractivePortfolio = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400">Paul Mwangi</h1>
          <div className="flex space-x-6">
            <button
              onClick={() => navigate("/")}
              className="text-cyan-400 hover:text-pink-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/portfolio")}
              className="text-pink-400 font-semibold"
            >
              Portfolio
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-cyan-400 hover:text-pink-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Profile Section with Circular Glow */}
      <div className="pt-24 pb-8 flex justify-center">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 p-1 group-hover:scale-105 transition-transform duration-300 relative">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-cyan-400/30">
              <span className="text-3xl font-bold text-cyan-400">PM</span>
            </div>
            {/* Circular Glowing Animation */}
            <div className="absolute inset-0 rounded-full animate-spin">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 via-purple-500 to-cyan-400 opacity-75 blur-md"></div>
            </div>
            <div className="absolute inset-2 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
              <div className="w-full h-full rounded-full bg-gradient-to-l from-pink-400 via-cyan-500 via-purple-400 to-pink-400 opacity-50 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-6 pb-8">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full p-2 border border-cyan-500/30">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="flex items-center">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-500 to-pink-600 text-black shadow-lg shadow-cyan-500/25"
                      : "text-cyan-400 hover:text-pink-400 hover:bg-cyan-500/10"
                  }`}
                >
                  {tab.label}
                </button>
                {index < tabs.length - 1 && (
                  <div className="text-cyan-500/50 mx-2">|</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <ChatInterface activeTab={activeTab} />
      </div>

      {/* Background Neon Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 -z-20 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};

export default InteractivePortfolio;
