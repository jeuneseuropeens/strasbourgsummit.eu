import {useTranslations} from 'next-intl'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import {useRouter} from 'next/router'

export default function TemplateBase({children, title, description}) {
	const t = useTranslations('PageLayout')
	const {locale, locales} = useRouter()
	const otherLocales = locales?.filter((cur) => cur !== locale && cur !== 'default')

	const domain = "strasbourgsummit.eu"
	const basePath = `https://www.${domain}`

	const localeUrl =
		locale === 'fr'
			? `${basePath}/fr`
			: basePath

	const joinedTitle =
		!title
			? t('siteTitle')
			: [title, t('siteTitle')].join(' - ')

	const pageDescription =
		!description
			? t('siteDescription')
			: description

	const image = `${basePath}/OG-Sommet-${locale}.png`

	return (
		<>
			<Head>
				<title>{joinedTitle}</title>
				<link rel="icon" href="/favicon.ico?v=2" />

				{/*Primary Meta Tags*/}
				<meta name="title" content={joinedTitle} />
				<meta name="description" content={pageDescription} />

				{/*Open Graph / Facebook*/}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={localeUrl} />
				<meta property="og:title" content={joinedTitle} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:image" content={image} />
				<meta property="og:locale" content={locale} />
				{otherLocales.map((otherLocale, index) => (
					<meta key={index} property="og:locale:alternate" content={otherLocale} />
				))}

				{/*Twitter*/}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content={domain} />
				<meta property="twitter:url" content={localeUrl} />
				<meta property="twitter:title" content={joinedTitle} />
				<meta property="twitter:description" content={pageDescription} />
				<meta property="twitter:image" content={image} />
			</Head>

			<Header />

			<div className="bg-gradient-to-b from-white to-gray-50">
				{children}
			</div>

			<Footer />
		</>

	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../../i18n/${locale}.json`)).default
		}
	}
}
