import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        cyan: '#64ffda',
      },
      backgroundImage: {
        'grid-cyber':
          'radial-gradient(circle at 1px 1px, rgba(100,255,218,0.12) 1px, transparent 0)',
      },
      backgroundSize: {
        'grid-cyber': '24px 24px',
      },
    },
  },
  plugins: [],
};

export default config;
