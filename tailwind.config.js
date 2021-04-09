module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      minWidth: _ => ({
        1280: '1280px'
      }),
      borderRadius: _ => ({
        '12xl': '6.5rem'
      }),
      textColor: _ => ({
        primary: 'linear-gradient(90deg, #833AB4 0%, #E94057 50.52%, #F27121 100%)',
        secondary: '#9CA3AF'
      })
    }
  },
  variants: {},
  plugins: []
}
