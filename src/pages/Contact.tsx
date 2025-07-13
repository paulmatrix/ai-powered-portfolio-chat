
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your form submission logic here
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    alert("Message sent!");
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-2 py-2 flex justify-between items-center min-h-0">
          <h1 className="text-base font-bold text-cyan-400">Paul Mwangi</h1>
          <div className="flex space-x-3">
            <button
              onClick={() => window.location.href = "/"}
              className="text-cyan-400 hover:text-pink-400 transition-colors text-sm"
            >
              Home
            </button>
            <button
              onClick={() => window.location.href = "/portfolio"}
              className="text-cyan-400 hover:text-pink-400 transition-colors text-sm"
            >
              Portfolio
            </button>
            <button
              onClick={() => window.location.href = "/contact"}
              className="text-pink-400 font-semibold text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-10 pt-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Get In Touch
          </h1>
          <p className="text-base text-cyan-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto space-y-5 text-base md:text-lg">
          {/* Email */}
          <div className="w-full bg-black/60 border border-cyan-400/40 rounded-2xl shadow-lg p-4 flex items-center gap-4 transition-transform hover:scale-105 hover:shadow-cyan-400/30 backdrop-blur-md">
            <Mail className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <div>
              <div className="font-bold text-base text-white mb-1">Email</div>
              <a href="mailto:paulmwangikimaru@gmail.com" className="text-cyan-300 text-sm hover:underline break-all">
                paulmwangikimaru@gmail.com
              </a>
            </div>
          </div>
          {/* Phone */}
          <div className="w-full bg-black/60 border border-cyan-400/40 rounded-2xl shadow-lg p-4 flex items-center gap-4 transition-transform hover:scale-105 hover:shadow-cyan-400/30 backdrop-blur-md">
            <Phone className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <div>
              <div className="font-bold text-base text-white mb-1">Phone</div>
              <a href="tel:+254794581348" className="text-cyan-300 text-sm hover:underline">
                +254794581348
              </a>
            </div>
          </div>
          {/* Location */}
          <div className="w-full bg-black/60 border border-cyan-400/40 rounded-2xl shadow-lg p-4 flex items-center gap-4 transition-transform hover:scale-105 hover:shadow-cyan-400/30 backdrop-blur-md">
            <MapPin className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <div>
              <div className="font-bold text-base text-white mb-1">Location</div>
              <div className="text-cyan-300 text-sm">Nairobi, Kenya</div>
            </div>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mt-7">
          <a href="https://github.com/paulmatrix" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/60 backdrop-blur-md rounded-2xl border border-cyan-400/40 hover:bg-cyan-500/10 transition-colors shadow-lg shadow-cyan-500/10">
            <Github className="w-7 h-7 text-cyan-400" />
          </a>
          <a href="https://www.linkedin.com/in/paul-mwangi-505b581b2" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/60 backdrop-blur-md rounded-2xl border border-cyan-400/40 hover:bg-pink-500/10 transition-colors shadow-lg shadow-pink-500/10">
            <Linkedin className="w-7 h-7 text-pink-400" />
          </a>
          <a href="https://x.com/paulmwangikm?t=IugGCX0md8qBWaKPi_xUoA&s=09" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/60 backdrop-blur-md rounded-2xl border border-cyan-400/40 hover:bg-cyan-500/10 transition-colors shadow-lg shadow-cyan-500/10">
            <Twitter className="w-7 h-7 text-cyan-400" />
          </a>
          <a href="https://wa.me/254794581348" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-black/60 backdrop-blur-md rounded-2xl border border-cyan-400/40 hover:bg-green-500/10 transition-colors shadow-lg shadow-green-500/10">
            <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
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
    </div>
  );
};

export default Contact;
