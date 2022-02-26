const withTranslateRoutes = require('next-translate-routes/plugin')

module.exports = withTranslateRoutes({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: true,
  },
})
