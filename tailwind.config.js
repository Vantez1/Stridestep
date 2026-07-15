/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
     colors: {
  primary: '#0F172A',
  secondary: '#1E3A8A',
  accent: '#F59E0B',
  background: '#F8FAFC',
  muted: '#64748B',

  navy: {
    DEFAULT: '#0F172A',
    light: '#1E293B',
    dark: '#020617',
  },

  royal: {
    DEFAULT: '#1E3A8A',
    light: '#2563EB',
  },

  amber: {
    brand: '#F59E0B',
    light: '#FBBF24',
  },
},
      fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Poppins', 'system-ui', 'sans-serif'],

  // New semantic font names
  heading: ['Poppins', 'system-ui', 'sans-serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
},
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
