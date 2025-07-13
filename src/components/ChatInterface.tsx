
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, HelpCircle } from "lucide-react";
import { useChatMessage, usePortfolioSection } from "@/hooks/useApi";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ErrorMessage } from "@/components/ui/error-message";
import { apiService, type ChatMessage } from "@/services/api";

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
    "👋 Hello! I'm Paul Mwangi",
    "   A professional Software Developer with a strong foundation in Python, Django, and scalable web applications.",
    "",
    "🏗️ Technical Expertise",
    "   I have experience building secure, cloud-ready systems with RESTful APIs, microservices, and AI integration in agile environments.",
    "",
    "🎯 Focus Areas",
    "   My work focuses on backend development, intelligent systems, and scalable architecture across HR, eCommerce, and internal platforms.",
    "",
    "💡 Development Philosophy",
    "   In every role, I prioritize clean code, modularity, and performance—building solutions that meet both technical and business goals.",
    "",
    "🚀 Beyond Development",
    "   Outside development, I'm passionate about data, machine learning, and mentoring others in tech through open-source and community work."
  ],

  skills: [
    "💻 Programming Languages",
    "   Python, JavaScript, HTML, CSS",
    "",
    "🛠️ Frameworks & Tools",
    "   Django, React, Bootstrap 5, REST APIs, CI/CD (GitHub Actions)",
    "",
    "📊 Data & Analysis",
    "   Statistical Modelling, Risk Assessment, PostgreSQL, Data Visualization",
    "",
    "🤖 AI & Machine Learning",
    "   NLP basics, LLM integration",
    "",
    "☁️ DevOps",
    "   Docker, SSO, scalable multi-tenant systems",
    "",
    "🤝 Soft Skills",
    "   Team Collaboration, Adaptability, Communication, Agile Development"
  ],


  projects: [
    "🚀 HR Management System",
    "   Architected a scalable HR platform with modules for payroll, attendance, and analytics using Django.",
    "",
    "🤖 Intelligent Employee Analytics",
    "   Integrated AI-driven document processing and smart reporting into backend workflows.",
    "",
    "🛒 E-Commerce Features",
    "   Designed and deployed service-oriented APIs for scalable, production-ready commerce apps.",
    "",
    "⚡ API Optimization",
    "   Tuned Django REST APIs and PostgreSQL queries for performance under concurrent usage.",
    "",
    "🔧 CI/CD Pipelines",
    "   Implemented secure, automated deployment pipelines with GitHub Actions and Docker."
  ],


  experience: [
    "🏢 Skillmind Softwares Limited",
    "   May 2025 - Present",
    "   AI Software Developer (Django) • Parklands, Nairobi",
    "",
    "   • Collaborated with a cross-functional team to architect and implement a scalable HR management platform with cloud-ready modules",
    "     for HR System, Time & Attendance Management, and Payroll Management System.",
    "   • Engineered backend services using Django and Python, emphasizing modular architecture, high performance, and secure multi-tenant",
    "     support to facilitate future expansion into service-oriented applications.",
    "   • Integrated AI-powered capabilities such as intelligent document processing and employee analytics while ensuring seamless incorporation of RESTful interfaces.",
    "   • Implemented secure authentication protocols including SSO to streamline user access, reinforcing robust security practices in",
    "     preparation for scalable microservice deployment.",
    "   • Optimized REST API endpoints and PostgreSQL queries to ensure high performance under concurrent usage, aligning with modern",
    "     cloud-based best practices.",
    "   • Contributed to code reviews and CI/CD workflow enhancements, reinforcing continuous delivery and quality improvements in an agile",
    "     development environment.",
    "",
    "💼 SellyAfrica",
    "   Jan 2023 - Mar 2025",
    "   Software Developer • Kiambu, Nairobi",
    "",
    "   • Developed and deployed scalable web applications using Python and Django, aligning service-oriented design principles with",
    "     production-grade performance.",
    "   • Built responsive frontend solutions with HTML, CSS, Bootstrap 5, and React, ensuring high user engagement and accessibility across",
    "     platforms.",
    "   • Collaborated with cross-functional teams to deliver user-focused, integrated solutions within agile sprints, meeting tight deadlines and",
    "     business objectives.",
    "   • Designed and integrated RESTful APIs to enable seamless data flow between internal systems and third-party services, exemplifying",
    "     service-driven architecture principles.",
    "   • Diagnosed and resolved full-stack bugs, reinforcing application stability and performance, while contributing to CI/CD pipeline",
    "     optimizations in a dynamic production setting.",
    "",
    "🤖 Outlier & Remotasks",
    "   Jan 2023 - Dec 2023",
    "   AI Data Trainer • Remote",
    "",
    "   • Analyzed and labeled large-scale datasets for machine learning model training, ensuring high-quality and consistent annotations.",
    "   • Identified and resolved data inconsistencies, contributing to improved model accuracy and reduced error rates.",
    "   • Collaborated with remote teams to meet tight annotation deadlines and project specifications across diverse AI domains.",
    "   • Provided detailed feedback on data guidelines, helping refine labeling protocols and improve task clarity for future annotators.",
    "   • Utilized platforms such as Remotasks, Labelbox, and internal annotation tools to handle various data types, including text, image, and",
    "     speech."
  ],
  
  education: [
    "🎓 Kirinyaga University (2024)",
    "   Bachelor of Science in Actuarial Science",
    "   Second Class Upper Division Honors",
    "",
    "📚 Academic Foundation",
    "   I hold a Bachelor of Science degree in Actuarial Science from Kirinyaga University, graduating with Second Class Upper Division Honors.",
    "",
    "🔬 Applied Knowledge",
    "   This background gives me a strong foundation in mathematics, statistics, and risk modeling—skills that I apply in data-driven software engineering."
  ],
 
  ai: [
    "🤖 AI & Machine Learning Journey",
    "   I'm actively involved in machine learning as an AI Data Trainer, where I worked with Remotasks and Outlier.",
    "",
    "📊 Data Annotation Expertise",
    "   I annotated datasets across text, image, and speech, ensuring model quality through detailed and accurate labeling.",
    "",
    "🔬 ML Workflow Understanding",
    "   This experience helped me understand ML workflows, data pipelines, and the importance of clean, structured data.",
    "",
    "🚀 Future Goals",
    "   I'm passionate about AI and plan to deepen my understanding of NLP, LLMs, and production-ready ML systems."
  ],
};

export const ChatInterface = ({ activeTab }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentResponse, setCurrentResponse] = useState("");
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isTypingRef = useRef(false);
  const currentTabRef = useRef(activeTab);
  
  // API hooks
  const chatMessage = useChatMessage();
  const portfolioSection = usePortfolioSection();

  useEffect(() => {
    // Update current tab reference
    currentTabRef.current = activeTab;
    
    // Stop any ongoing typing animation when tab changes
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
    isTypingRef.current = false;
    
    // Clear messages and start new conversation after a brief delay
    setMessages([]);
    setCurrentResponse("");
    setIsTyping(false);
    
    // Use setTimeout to ensure cleanup is complete before starting new animation
    const startNewTab = setTimeout(() => {
      if (currentTabRef.current === activeTab) {
        handleTabClick();
      }
    }, 100);

    return () => {
      clearTimeout(startNewTab);
    };
  }, [activeTab]);

  const typeText = async (fullText: string, tabId: string) => {
    setCurrentResponse("");
    isTypingRef.current = true;
    
    // Type letter by letter
    for (let i = 0; i <= fullText.length; i++) {
      // Check if typing should be stopped (tab changed or component unmounted)
      if (!isTypingRef.current || currentTabRef.current !== tabId) {
        return false;
      }
      
      setCurrentResponse(fullText.slice(0, i));
      
      // Use timeout with ref to allow cancellation
      await new Promise(resolve => {
        typingTimeoutRef.current = setTimeout(resolve, 30);
      });
    }
    
    isTypingRef.current = false;
    return true;
  };

  const handleTabClick = async () => {
    const currentTab = currentTabRef.current;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: currentTab === "help" ? "Show me help options" : `Tell me about your ${currentTab}`,
      timestamp: new Date(),
    };

    setMessages([userMessage]);
    setIsTyping(true);

    try {
      // Try to get data from API first
      const apiResponse = await portfolioSection.execute(currentTab);
      
      if (apiResponse && currentTabRef.current === currentTab) {
        const fullResponse = apiResponse.join('\n');
        const completed = await typeText(fullResponse, currentTab);

        if (completed && currentTabRef.current === currentTab) {
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
      } else {
        // Fallback to static content if API fails
        const content = tabContent[currentTab as keyof typeof tabContent] || [];
        const fullResponse = content.join('\n');
        const completed = await typeText(fullResponse, currentTab);

        if (completed && currentTabRef.current === currentTab) {
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
      }
    } catch (error) {
      console.error('Failed to fetch portfolio data:', error);
      // Fallback to static content
      const content = tabContent[currentTab as keyof typeof tabContent] || [];
      const fullResponse = content.join('\n');
      const completed = await typeText(fullResponse, currentTab);

      if (completed && currentTabRef.current === currentTab) {
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
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-black/30 backdrop-blur-sm border-cyan-500/20 min-h-[500px] shadow-xl shadow-cyan-500/10">
        <div className="p-6 space-y-4">
          {messages.filter((message) => message.type === "ai").map((message) => (
            <div key={message.id} className="w-full">
              <div className="w-full px-2 p-4 rounded-lg bg-black/40 text-cyan-100 border border-cyan-500/30 shadow-lg shadow-pink-500/10">
                <div className="whitespace-pre-line">{message.content}</div>
                <div className="text-xs opacity-70 mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator and current response */}
          {(isTyping || currentResponse) && (
            <div className="w-full">
              <div className="w-full px-2 p-4 rounded-lg bg-black/40 text-cyan-100 border border-cyan-500/30 shadow-lg shadow-pink-500/10">
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
    </div>
  );
};
