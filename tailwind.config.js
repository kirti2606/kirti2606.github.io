/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        trust: {
          blue: '#1E3A8A',
          light: '#3B82F6'
        },
        medical: {
          white: '#F8FAFC'
        }
      },
      backgroundImage: {
        'neural-pattern':
          "radial-gradient(2px 2px at 20px 20px, rgba(59,130,246,0.12) 50%, transparent 51%), radial-gradient(2px 2px at 60px 60px, rgba(30,58,138,0.12) 50%, transparent 51%), radial-gradient(400px 200px at 0% 0%, rgba(30,58,138,0.06), transparent 60%), radial-gradient(400px 200px at 100% 100%, rgba(59,130,246,0.06), transparent 60%)"
      },
      boxShadow: {
        card: '0 10px 30px rgba(30,58,138,0.08)'
      }
    }
  },
  plugins: []
}

