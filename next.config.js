const withTranslateRoutes = require('next-translate-routes/plugin')

module.exports = withTranslateRoutes({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: true
  },
  webpack: (config) => {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
})
