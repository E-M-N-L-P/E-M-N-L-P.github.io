module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // 或 'media' 或 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#10b981',
      },
      fontSize: {
        base: '18px', // 修改默认的基础字体大小
        sm: '25px',   // 原默认 'text-sm'
        base: '27px', // 原默认 'text-base'，调整为18px
        lg: '28px',   // 原默认 'text-lg'
        xl: '30px',   // 原默认 'text-xl'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
