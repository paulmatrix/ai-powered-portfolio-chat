# API Integration Guide

## Overview
The frontend has been updated to support API integration with a Django backend. The application now includes:

- **API Service Layer** (`src/services/api.ts`)
- **Custom Hooks** (`src/hooks/useApi.ts`)
- **Loading & Error Components** (`src/components/ui/`)
- **Environment Configuration** (`.env.example`)

## Features

### ✅ API-Ready Components
1. **ChatInterface** - Now fetches portfolio data from API with fallback to static content
2. **Contact Form** - Submits form data to backend API
3. **Error Handling** - Displays API errors with retry functionality
4. **Loading States** - Shows loading spinners during API calls

### 🔧 API Endpoints Expected

The frontend expects these Django API endpoints:

```
GET  /api/health/                    - Health check
GET  /api/portfolio/                 - Get all portfolio data
GET  /api/portfolio/{section}/       - Get specific section (about, skills, projects, etc.)
POST /api/chat/                      - Send chat message
GET  /api/chat/history/              - Get chat history
POST /api/contact/                   - Submit contact form
```

### 📝 Environment Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Configure your API URL:
```env
VITE_API_URL=http://localhost:8000/api
```

### 🚀 Usage Examples

#### Using API Hooks
```typescript
import { usePortfolioData, useContactForm } from '@/hooks/useApi';

// In your component
const portfolioData = usePortfolioData();
const contactForm = useContactForm();

// Load data
useEffect(() => {
  portfolioData.execute();
}, []);

// Submit form
const handleSubmit = async (data) => {
  const result = await contactForm.execute(data);
  if (result?.success) {
    // Handle success
  }
};
```

#### Direct API Service Usage
```typescript
import { apiService } from '@/services/api';

// Send chat message
const response = await apiService.sendChatMessage("Hello", "about");

// Get portfolio data
const portfolio = await apiService.getPortfolioData();
```

### 🔄 Fallback Behavior

- **ChatInterface**: Falls back to static content if API fails
- **Contact Form**: Shows error message with retry option
- **All Components**: Graceful degradation when backend is unavailable

### 🛠 Development

1. **Start Frontend**: `npm run dev`
2. **Start Django Backend**: `python manage.py runserver`
3. **Test API Connection**: Check browser console for API calls

### 📊 API Response Formats

#### Portfolio Data
```json
{
  "about": ["Line 1", "Line 2", ...],
  "skills": ["Skill 1", "Skill 2", ...],
  "projects": ["Project 1", "Project 2", ...],
  "experience": ["Experience 1", "Experience 2", ...],
  "help": ["Help 1", "Help 2", ...]
}
```

#### Chat Message
```json
{
  "id": "unique_id",
  "type": "ai",
  "content": "Response content",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

#### Contact Form Response
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Next Steps

1. **Create Django Backend** with the expected API endpoints
2. **Add AI Integration** (OpenAI, custom models)
3. **Implement Authentication** (optional)
4. **Add Real-time Features** (WebSocket for live chat)
5. **Database Integration** for storing chat history and contact submissions 