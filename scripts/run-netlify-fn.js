import fs from 'fs';
import path from 'path';

function loadDotEnv(file) {
  try {
    const full = fs.readFileSync(file, 'utf8');
    full.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const idx = trimmed.indexOf('=');
      if (idx === -1) return;
      const key = trimmed.slice(0, idx).trim();
      const val = trimmed.slice(idx + 1).trim();
      if (!(key in process.env)) process.env[key] = val.replace(/^"|"$/g, '');
    });
  } catch (e) {
    // ignore
  }
}

// Try loading .env and .env.local
loadDotEnv(path.resolve(process.cwd(), '.env'));
loadDotEnv(path.resolve(process.cwd(), '.env.local'));

(async () => {
  try {
    const mod = await import('../netlify/functions/gemini.js');
    const handler = mod.handler || mod.default;
    if (!handler) {
      console.error('Could not find handler export in netlify/functions/gemini.js');
      process.exit(1);
    }

    const event = {
      httpMethod: 'POST',
      body: JSON.stringify({
        remedy: {
          diseaseName: 'Test Disease',
          category: 'Test',
          symptoms: 'none',
          ingredients: ['test'],
          preparationMethod: 'test',
          methodOfUse: 'test'
        },
        question: 'Is the API key configured?'
      })
    };

    console.log('Using API_KEY from env:', !!process.env.API_KEY);

    const res = await handler(event);
    console.log('Function result statusCode:', res.statusCode);
    try {
      console.log('Function result body:', JSON.parse(res.body));
    } catch (e) {
      console.log('Function result body (text):', res.body);
    }
  } catch (err) {
    console.error('Invoker error:', err);
    process.exitCode = 1;
  }
})();
