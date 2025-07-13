const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface PortfolioData {
  about: string[];
  skills: string[];
  projects: string[];
  experience: string[];
  help: string[];
}

class ApiService {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        data,
        status: response.status,
      };
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Chat API methods
  async sendChatMessage(message: string, context: string): Promise<ChatMessage> {
    const response = await this.request<ChatMessage>('/chat/', {
      method: 'POST',
      body: JSON.stringify({
        message,
        context,
      }),
    });
    return response.data;
  }

  async getChatHistory(): Promise<ChatMessage[]> {
    const response = await this.request<ChatMessage[]>('/chat/history/');
    return response.data;
  }

  // Portfolio data API methods
  async getPortfolioData(): Promise<PortfolioData> {
    const response = await this.request<PortfolioData>('/portfolio/');
    return response.data;
  }

  async getPortfolioSection(section: string): Promise<string[]> {
    const response = await this.request<string[]>(`/portfolio/${section}/`);
    return response.data;
  }

  // Contact form API method
  async submitContactForm(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    const response = await this.request<{ success: boolean; message: string }>('/contact/', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    return response.data;
  }

  // Health check
  async healthCheck(): Promise<{ status: string }> {
    const response = await this.request<{ status: string }>('/health/');
    return response.data;
  }
}

// Create and export a singleton instance
export const apiService = new ApiService();

// Export types for use in components
export type { ChatMessage, ContactFormData, PortfolioData, ApiResponse }; 