
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  activeTab: string;
}

const tabContent = {
  about: [
    "I'm Paul Mwangi, a passionate Software Engineer with over 5 years of experience in web development.",
    "I specialize in building scalable web applications using modern technologies like React, Node.js, and TypeScript.",
    "My journey in tech started with a curiosity about how things work under the hood, which led me to pursue computer science.",
    "I believe in writing clean, maintainable code and creating user experiences that make a difference.",
    "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers."
  ],
  skills: [
    "🚀 Frontend Development: React, TypeScript, Next.js, Tailwind CSS",
    "⚡ Backend Development: Node.js, Express, Python, Django",
    "🗄️ Databases: PostgreSQL, MongoDB, Redis, Supabase",
    "☁️ Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD pipelines",
    "🔧 Tools & Technologies: Git, Jest, Cypress, Figma, Linux",
    "🤝 Soft Skills: Team Leadership, Problem Solving, Communication, Agile Development"
  ],
  projects: [
    "🎯 E-Commerce Platform - Built a full-stack e-commerce solution using React and Node.js, handling 10k+ daily users",
    "📊 Analytics Dashboard - Created a real-time data visualization platform using D3.js and WebSocket connections",
    "🤖 AI Chat Application - Developed an intelligent chatbot using OpenAI's API and modern NLP techniques",
    "🏢 Enterprise CRM - Built a comprehensive customer relationship management system for mid-size businesses",
    "📱 Mobile App - Created a cross-platform mobile application using React Native and Firebase"
  ],
  experience: [
    "💼 Senior Software Engineer at TechCorp (2021-Present)",
    "   • Led a team of 5 developers in building scalable web applications",
    "   • Improved application performance by 40% through optimization techniques",
    "   • Implemented CI/CD pipelines reducing deployment time by 60%",
    "",
    "🔧 Full Stack Developer at StartupXYZ (2019-2021)",
    "   • Developed MVP products from concept to production",
    "   • Built RESTful APIs serving 100k+ requests daily",
    "   • Collaborated with cross-functional teams using Agile methodologies",
    "",
    "👨‍💻 Junior Developer at WebSolutions (2018-2019)",
    "   • Created responsive websites using modern frontend frameworks",
    "   • Maintained and optimized existing codebases",
    "   • Participated in code reviews and best practices discussions"
  ]
};

export const ChatInterface = ({ activeTab }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentResponse, setCurrentResponse] = useState("");

  useEffect(() => {
    // Clear messages when tab changes and start new conversation
    setMessages([]);
    setCurrentResponse("");
    handleTabClick();
  }, [activeTab]);

  const handleTabClick = async () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: `Tell me about your ${activeTab}`,
      timestamp: new Date(),
    };

    setMessages([userMessage]);
    setIsTyping(true);

    // Simulate AI typing response
    const content = tabContent[activeTab as keyof typeof tabContent] || [];
    let fullResponse = "";

    for (let i = 0; i < content.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      fullResponse += (i > 0 ? "\n" : "") + content[i];
      setCurrentResponse(fullResponse);
    }

    setIsTyping(false);
    
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "ai",
      content: fullResponse,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, aiMessage]);
    setCurrentResponse("");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-black/20 backdrop-blur-sm border-white/10 min-h-[500px]">
        <div className="p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.type === "user"
                    ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white"
                    : "bg-white/10 text-gray-100 border border-white/20"
                }`}
              >
                <div className="whitespace-pre-line">{message.content}</div>
                <div className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator and current response */}
          {(isTyping || currentResponse) && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-4 rounded-lg bg-white/10 text-gray-100 border border-white/20">
                <div className="whitespace-pre-line">{currentResponse}</div>
                {isTyping && (
                  <div className="flex items-center space-x-1 mt-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Input area */}
      <div className="mt-4 flex items-center space-x-4">
        <div className="flex-1 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-3">
          <p className="text-gray-400">
            Click on the tabs above to explore different sections, or ask me anything about my {activeTab}!
          </p>
        </div>
        <Button
          onClick={handleTabClick}
          className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
