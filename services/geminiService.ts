import { Remedy } from "../types";

export const analyzeRemedyWithAI = async (remedy: Remedy, question: string): Promise<string> => {
  try {
    const resp = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ remedy, question }),
    });

    if (!resp.ok) {
      const errorText = await resp.text();
      console.error('Serverless Gemini error:', errorText);
      return 'The AI service is unavailable. Please check that the API key is configured and try again.';
    }

    const data = await resp.json();
    return data.text || 'No response generated.';
  } catch (error) {
    console.error('Network/Gemini proxy error:', error);
    return 'Unable to reach the AI service. Please check your connection and try again.';
  }
};