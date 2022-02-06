import {useTranslations} from 'next-intl';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function TemplateBase({children, title}) {
	const t = useTranslations('PageLayout');

	const joinedTitle =
		title !== t('siteTitle')
			? [title, t('siteTitle')].join(' - ')
			: title

	return (
		<>
			<Head>
				<title>{joinedTitle}</title>
				<meta name="description" content={"t(siteDescription)"} />
				<link rel="icon" href="/favicon.ico?v=2" />
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
