
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
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
              className="text-cyan-400 hover:text-pink-400 transition-colors"
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

      {/* Main Content */}
      <div className="text-center space-y-8 max-w-4xl mx-auto pt-20">
        {/* Profile Image with Circular Glow Animation */}
        <div className="relative group flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 p-1 group-hover:scale-105 transition-transform duration-300 relative">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-cyan-400/30">
              <span className="text-6xl font-bold text-cyan-400">PM</span>
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

        {/* Introduction */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Hi there,
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-2">
            <p>I am <span className="text-cyan-400 font-semibold glow-text">Paul Mwangi</span></p>
            <p>Software Engineer passionate about building</p>
            <p>innovative web applications and exploring</p>
            <p>cutting-edge technologies</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            onClick={() => navigate("/portfolio")}
            className="bg-gradient-to-r from-cyan-500 to-pink-600 hover:from-cyan-400 hover:to-pink-500 text-black font-bold px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-pink-500/25 border border-cyan-400/50"
          >
            Explore My Portfolio
          </Button>
        </div>
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
