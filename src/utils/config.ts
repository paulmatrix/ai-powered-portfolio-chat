export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  },
  dev: {
    mode: import.meta.env.VITE_DEV_MODE === 'true',
  },
  ai: {
    openaiKey: import.meta.env.VITE_OPENAI_API_KEY,
    serviceUrl: import.meta.env.VITE_AI_SERVICE_URL,
  },
} as const; 