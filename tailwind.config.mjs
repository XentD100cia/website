/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B1220',
        scienceWhite: '#F8FAFC',
        discovery: '#1D9BF0',
        bioTeal: '#14B8A6',
        experimentAmber: '#F59E0B',
        ink: '#111827',
        body: '#374151',
        soft: '#6B7280',
        line: '#E5E7EB'
      },
      fontFamily: {
        heading: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        card: '20px',
        button: '14px'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(11, 18, 32, 0.12)'
      }
    },
  },
  plugins: [],
};
