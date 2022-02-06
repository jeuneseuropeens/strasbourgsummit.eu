const pathTranslations = [
  {
    en: 'take-part',
    fr: 'participer'
  }
]

// locales: ['default', 'en', 'fr'],
//   defaultLocale: 'default',
//   localeDetection: false,

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  trailingSlash: true,
  env: {
    pathTranslations: pathTranslations,
  },
  async redirects() {
    const listRedirects = pathTranslations.map((item) => {
      return {
        source: `/fr/${item.en}`,
        destination: `/fr/${item.fr}`,
        locale: false,
        permanent: false,
      }
    });

    return listRedirects
  },
  async rewrites() {
    const listRewrites = pathTranslations.map((item) => {
      return {
        source: `/fr/${item.fr}`,
        destination: `/fr/${item.en}`,
        locale: false,
      }
    });

    return listRewrites
  }
}
