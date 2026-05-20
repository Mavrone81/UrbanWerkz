/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A1A2E',
        orange: '#E8500A',
        cream: '#F5F5F0',
        ink: '#0A0A0A',
        muted: '#4A4A4A',
        border: '#DDDDDD',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.0' }],
        'display-lg': ['56px', { lineHeight: '1.05' }],
        'display-md': ['48px', { lineHeight: '1.1' }],
        'display-sm': ['36px', { lineHeight: '1.15' }],
      },
      spacing: {
        section: '100px',
        'section-sm': '64px',
      },
      borderRadius: {
        card: '16px',
        btn: '8px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}
