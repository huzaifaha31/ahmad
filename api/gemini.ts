import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error('API_KEY not set in environment. Env keys:', Object.keys(process.env));
    return res.status(500).json({
      error: 'API key not configured on server.',
      diagnostics: {
        apiKeyPresent: false,
        expectedEnvVar: 'API_KEY',
        envKeysCount: Object.keys(process.env).length
      }
    });
  }

  const { remedy, question } = req.body || {};
  if (!remedy || !question) return res.status(400).json({ error: 'Missing remedy or question in request body.' });

  try {
    const ai = new GoogleGenAI({ apiKey });

    const context = `
      You are an expert in Traditional Malay Medicine and ancient manuscripts.
      I will provide details about a specific remedy found in a Malay Medical Manuscript.

      Disease: ${remedy.diseaseName}
      Category: ${remedy.category}
      Symptoms: ${remedy.symptoms}
      Ingredients: ${Array.isArray(remedy.ingredients) ? remedy.ingredients.join(', ') : remedy.ingredients}
      Preparation: ${remedy.preparationMethod}
      Usage: ${remedy.methodOfUse}
      Spiritual Elements: ${remedy.spiritualElements || 'None listed'}

      User Question: ${question}

      Please answer the user's question based on the context of traditional Malay healing practices.
      Keep the tone respectful, academic yet accessible, and culturally appreciative.
      If the question is about medical safety, add a disclaimer that this is historical information and not modern medical advice.
    `;

    const response = await ai.models.generateContent({ model: 'gemini-pro', contents: context });
    
    // Handle response text extraction
    const responseText = response.text || (response.candidates?.[0]?.content?.parts?.[0]?.text) || 'No response generated.';

    return res.status(200).json({ text: responseText });
  } catch (error) {
    console.error('Gemini API error (server):', error);
    return res.status(500).json({ error: 'Failed to fetch from Gemini API.' });
  }
}