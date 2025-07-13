
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-2 py-2 flex justify-between items-center min-h-0">
          <h1 className="text-base font-bold text-cyan-400">Paul Mwangi</h1>
          <div className="flex space-x-3">
            <button
              onClick={() => navigate("/")}
              className="text-cyan-400 hover:text-pink-400 transition-colors text-sm"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/portfolio")}
              className="text-cyan-400 hover:text-pink-400 transition-colors text-sm"
            >
              Portfolio
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-cyan-400 hover:text-pink-400 transition-colors text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="text-center space-y-8 max-w-4xl mx-auto pt-20">
        {/* Profile Image without Circular Glow Animation */}
        <div className="relative group flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 p-1 group-hover:scale-105 transition-transform duration-300 relative">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-cyan-400/30 overflow-hidden">
              <img 
                src="/lovable-uploads/515667a5-b652-4e46-b703-4846fb5750a3.png" 
                alt="Paul Mwangi"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Hi there,
          </h1>
          <div className="text-base md:text-xl text-gray-300 leading-relaxed space-y-2">
            <p>I am <span className="text-cyan-400 font-semibold glow-text">Paul Mwangi,</span></p>
            <p>Software Engineer and AI/ML Developer passionate about building smart, scalable web applications</p>
            <p>I thrive at the intersection of innovation and intelligence, crafting solutions</p>
            <p>powered by modern tech and machine learning to drive meaningful impact.</p>
          </div>
          <div className="pt-4">
            <Button
              onClick={() => navigate("/portfolio")}
              className="bg-gradient-to-r from-cyan-500 to-pink-600 hover:from-cyan-400 hover:to-pink-500 text-black font-bold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-pink-500/25 border border-cyan-400/50"
            >
              Explore My Portfolio
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .glow-text {
          text-shadow: 0 0 10px currentColor;
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
