#!/usr/bin/env node

// Simple test script to POST to the local Netlify/Vercel function
// Usage:
// TEST_FN_URL=http://localhost:8888/.netlify/functions/gemini node scripts/test-gemini.js

const url = process.env.TEST_FN_URL || 'http://localhost:8888/.netlify/functions/gemini';

(async () => {
  try {
    const payload = {
      remedy: {
        diseaseName: 'Test Disease',
        category: 'Test',
        symptoms: 'none',
        ingredients: ['test'],
        preparationMethod: 'test',
        methodOfUse: 'test'
      },
      question: 'Is the API key configured?'
    };

    console.log('POST', url);

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    console.log('Status:', res.status);
    try {
      console.log('Response JSON:', JSON.parse(text));
    } catch (e) {
      console.log('Response Text:', text);
    }
  } catch (err) {
    console.error('Request failed:', err);
    process.exitCode = 1;
  }
})();
