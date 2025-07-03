
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-4">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
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
              className="text-white hover:text-purple-300 transition-colors"
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

      {/* Main Content */}
      <div className="text-center space-y-8 max-w-4xl mx-auto pt-20">
        {/* Profile Image */}
        <div className="relative group">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-500 p-1 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-6xl font-bold text-white">PM</span>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        </div>

        {/* Introduction */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi there,
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-2">
            <p>I am <span className="text-purple-400 font-semibold">Paul Mwangi</span></p>
            <p>Software Engineer passionate about building</p>
            <p>innovative web applications and exploring</p>
            <p>cutting-edge technologies</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            onClick={() => navigate("/portfolio")}
            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Explore My Portfolio
          </Button>
        </div>
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default Index;
