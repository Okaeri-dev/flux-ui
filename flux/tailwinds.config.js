const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'flux/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'flux-utilities/**/!(*.stories|*.spec).{ts,html}'),
  ],
  plugins: [require('tailwindcss-primeui')],
};
