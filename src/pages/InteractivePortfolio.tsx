
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Paul Mwangi</h1>
          <div className="flex space-x-6">
            <button
              onClick={() => navigate("/")}
              className="text-white hover:text-purple-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/portfolio")}
              className="text-purple-300 font-semibold"
            >
              Portfolio
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-white hover:text-purple-300 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Tab Navigation */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full p-2 border border-white/10">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="flex items-center">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
                {index < tabs.length - 1 && (
                  <div className="text-gray-500 mx-2">|</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Interface */}
        <ChatInterface activeTab={activeTab} />
      </div>
    </div>
  );
};

export default InteractivePortfolio;
