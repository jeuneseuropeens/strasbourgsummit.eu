import {useTranslations} from 'next-intl';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import {useRouter} from 'next/router';

export default function TemplateBase({children, title}) {
	const t = useTranslations('PageLayout');
	const {locale, locales} = useRouter()
	const otherLocales = locales?.filter((cur) => cur !== locale && cur !== 'default');

	const joinedTitle =
		title !== t('siteTitle')
			? [title, t('siteTitle')].join(' - ')
			: title

	return (
		<>
			<Head>
				<title>{joinedTitle}</title>
				<link rel="icon" href="/favicon.ico?v=2" />

				{/*Primary Meta Tags*/}
				<meta name="title" content={t('siteTitle')} />
				<meta name="description" content={t('siteDescription')} />

				{/*Open Graph / Facebook*/}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.strasbourgsummit.eu/" />
				<meta property="og:title" content={t('siteTitle')} />
				<meta property="og:description" content={t('siteDescription')} />
				<meta property="og:image" content={`https://www.strasbourgsummit.eu/OG-Sommet-${locale}.png`} />
				<meta property="og:locale" content={locale} />
				{otherLocales.map((otherLocale) => (
					<meta key={otherLocale} property="og:locale:alternate" content={otherLocale} />
				))}
xxx
				{/*Twitter*/}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="strasbourgsummit.eu" />
				<meta property="twitter:url" content="https://www.strasbourgsummit.eu/" />
				<meta property="twitter:title" content={t('siteTitle')} />
				<meta property="twitter:description" content={t('siteDescription')} />
				<meta property="twitter:image" content={`https://www.strasbourgsummit.eu/OG-Sommet-${locale}.png`} />
			</Head>

			<Header />

			<div className="bg-gradient-to-b from-white to-gray-50">
				{children}
			</div>

			<Footer />
		</>
	);
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../../i18n/${locale}.json`)).default
		}
	};
}
