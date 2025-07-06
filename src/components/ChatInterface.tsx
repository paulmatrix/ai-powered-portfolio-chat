
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, HelpCircle } from "lucide-react";

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
  ],
  help: [
    "🎯 Welcome to my interactive portfolio! Here are some helpful prompts you can try:",
    "",
    "💡 To learn about me:",
    "• \"Tell me about yourself\"",
    "• \"What's your background in tech?\"",
    "• \"What do you enjoy doing when not coding?\"",
    "",
    "🛠️ To explore my skills:",
    "• \"What technologies do you work with?\"",
    "• \"Show me your frontend skills\"",
    "• \"What's your experience with databases?\"",
    "",
    "🚀 To see my projects:",
    "• \"What projects have you built?\"",
    "• \"Tell me about your e-commerce platform\"",
    "• \"Show me your most interesting project\"",
    "",
    "💼 To learn about my experience:",
    "• \"What's your work experience?\"",
    "• \"Tell me about your current role\"",
    "• \"How did you start your career?\"",
    "",
    "✨ Pro tip: You can click on any tab above to automatically get information about that section!"
  ]
};

export const ChatInterface = ({ activeTab }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentResponse, setCurrentResponse] = useState("");
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isTypingRef = useRef(false);

  useEffect(() => {
    // Stop any ongoing typing animation when tab changes
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
    isTypingRef.current = false;
    
    // Clear messages and start new conversation
    setMessages([]);
    setCurrentResponse("");
    setIsTyping(false);
    handleTabClick();
  }, [activeTab]);

  const typeText = async (fullText: string) => {
    setCurrentResponse("");
    isTypingRef.current = true;
    
    // Type letter by letter
    for (let i = 0; i <= fullText.length; i++) {
      // Check if typing should be stopped (tab changed)
      if (!isTypingRef.current) {
        return;
      }
      
      setCurrentResponse(fullText.slice(0, i));
      
      // Use timeout with ref to allow cancellation
      await new Promise(resolve => {
        typingTimeoutRef.current = setTimeout(resolve, 30);
      });
    }
    
    isTypingRef.current = false;
  };

  const handleTabClick = async () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: activeTab === "help" ? "Show me help options" : `Tell me about your ${activeTab}`,
      timestamp: new Date(),
    };

    setMessages([userMessage]);
    setIsTyping(true);

    // Get content for current tab and join with line breaks
    const content = tabContent[activeTab as keyof typeof tabContent] || [];
    const fullResponse = content.join('\n');

    // Type the entire response letter by letter
    await typeText(fullResponse);

    // Only update if typing wasn't cancelled
    if (isTypingRef.current === false && !typingTimeoutRef.current) {
      setIsTyping(false);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: fullResponse,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setCurrentResponse("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-black/30 backdrop-blur-sm border-cyan-500/20 min-h-[500px] shadow-xl shadow-cyan-500/10">
        <div className="p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.type === "user"
                    ? "bg-gradient-to-r from-cyan-500 to-pink-600 text-black font-medium shadow-lg shadow-cyan-500/25"
                    : "bg-black/40 text-cyan-100 border border-cyan-500/30 shadow-lg shadow-pink-500/10"
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
              <div className="max-w-[80%] p-4 rounded-lg bg-black/40 text-cyan-100 border border-cyan-500/30 shadow-lg shadow-pink-500/10">
                <div className="whitespace-pre-line">{currentResponse}</div>
                {isTyping && (
                  <div className="flex items-center space-x-1 mt-2">
                    <div className="w-1 h-4 bg-cyan-400 animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Input area */}
      <div className="mt-4 flex items-center space-x-4">
        <div className="flex-1 bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 shadow-lg shadow-cyan-500/10">
          <p className="text-cyan-300">
            {activeTab === "help" 
              ? "Use the example prompts above to explore my portfolio, or click on other tabs!"
              : `Click on the tabs above to explore different sections, or ask me anything about my ${activeTab}!`
            }
          </p>
        </div>
        <Button
          onClick={handleTabClick}
          className="bg-gradient-to-r from-cyan-500 to-pink-600 hover:from-cyan-400 hover:to-pink-500 text-black font-bold shadow-xl shadow-cyan-500/25 hover:shadow-pink-500/25 border border-cyan-400/50"
        >
          {activeTab === "help" ? <HelpCircle className="w-4 h-4" /> : <Send className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};
