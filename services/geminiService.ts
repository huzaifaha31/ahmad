import { GoogleGenAI } from "@google/genai";
import { Remedy } from "../types";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const analyzeRemedyWithAI = async (remedy: Remedy, question: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "API Key missing. Please configure the application with a valid Google Gemini API Key.";

  try {
    const context = `
      You are an expert in Traditional Malay Medicine and ancient manuscripts.
      I will provide details about a specific remedy found in a Malay Medical Manuscript.
      
      Disease: ${remedy.diseaseName}
      Category: ${remedy.category}
      Symptoms: ${remedy.symptoms}
      Ingredients: ${remedy.ingredients.join(', ')}
      Preparation: ${remedy.preparationMethod}
      Usage: ${remedy.methodOfUse}
      Spiritual Elements: ${remedy.spiritualElements || 'None listed'}
      
      User Question: ${question}
      
      Please answer the user's question based on the context of traditional Malay healing practices. 
      Keep the tone respectful, academic yet accessible, and culturally appreciative.
      If the question is about medical safety, add a disclaimer that this is historical information and not modern medical advice.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: context,
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I could not connect to the wisdom of the manuscripts at this moment. Please try again later.";
  }
};