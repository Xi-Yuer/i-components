module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.42rem', '0.55rem'],
        lg: ['0.55rem', '0.65rem'],
      },
      colors: {
        primary: '#409eff',
        "primary-200": '#79bbff',
        success: '#67c23a',
        "success-200": '#95d475',
        danger: '#f56c6c',
        "danger-200": '#f89898',
        warning: '#e6a23c',
        "warning-200": '#eebe77',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
