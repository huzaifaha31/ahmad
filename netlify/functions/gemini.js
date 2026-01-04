import { GoogleGenAI } from '@google/genai';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: { Allow: 'POST' }, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error('API_KEY not set in environment. Env keys:', Object.keys(process.env));
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'API key not configured on server.',
        diagnostics: {
          apiKeyPresent: false,
          expectedEnvVar: 'API_KEY',
          envKeysCount: Object.keys(process.env).length
        }
      })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON in request body.' }) };
  }

  const { remedy, question } = body || {};
  if (!remedy || !question) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing remedy or question in request body.' }) };
  }

  try {
    const client = new GoogleGenAI({ apiKey });

    const context = `You are an expert in Traditional Malay Medicine and ancient manuscripts.
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
If the question is about medical safety, add a disclaimer that this is historical information and not modern medical advice.`;

    const response = await client.models.generateContent({
      model: 'gemini-pro',
      contents: context,
    });

    // Extract text from response
    let responseText = '';
    if (response.candidates && response.candidates.length > 0) {
      const content = response.candidates[0].content;
      if (content && content.parts && content.parts.length > 0) {
        responseText = content.parts.map(part => part.text || '').join('');
      }
    }

    if (!responseText) {
      responseText = 'No response generated from the AI.';
    }

    return { statusCode: 200, body: JSON.stringify({ text: responseText }) };
  } catch (error) {
    console.error('Gemini API error (netlify):', error.message || error);
    return { statusCode: 500, body: JSON.stringify({ error: `Failed to fetch from Gemini API: ${error.message}` }) };
  }
}