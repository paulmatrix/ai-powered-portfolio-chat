
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const navigate = useNavigate();
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
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

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
              className="text-cyan-400 hover:text-pink-400 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-pink-400 font-semibold"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
              <p className="text-cyan-300 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and innovation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-cyan-300">paul.mwangi@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-cyan-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-cyan-300">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors shadow-lg shadow-cyan-500/10"
                >
                  <Github className="w-6 h-6 text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-cyan-500/30 hover:bg-pink-500/20 transition-colors shadow-lg shadow-pink-500/10"
                >
                  <Linkedin className="w-6 h-6 text-pink-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors shadow-lg shadow-cyan-500/10"
                >
                  <Twitter className="w-6 h-6 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="bg-black/30 backdrop-blur-sm border-cyan-500/20 shadow-xl shadow-cyan-500/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-cyan-100 text-sm font-medium mb-2 block">
                      First Name
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="bg-black/40 border-cyan-500/30 text-white placeholder:text-cyan-400/70 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="text-cyan-100 text-sm font-medium mb-2 block">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="bg-black/40 border-cyan-500/30 text-white placeholder:text-cyan-400/70 focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-cyan-100 text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="bg-black/40 border-cyan-500/30 text-white placeholder:text-cyan-400/70 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-cyan-100 text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Collaboration"
                    className="bg-black/40 border-cyan-500/30 text-white placeholder:text-cyan-400/70 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-cyan-100 text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="bg-black/40 border-cyan-500/30 text-white placeholder:text-cyan-400/70 resize-none focus:border-cyan-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-pink-600 hover:from-cyan-400 hover:to-pink-500 text-black font-bold py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-pink-500/25 border border-cyan-400/50"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
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
