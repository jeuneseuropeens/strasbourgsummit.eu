import { useTranslations } from 'next-intl';

import TemplatePage from '../components/layout/TemplatePage';

export default function Programme() {
	const t = useTranslations('pages.Programme');

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
			bannerImage="/17547117_1115094925303458_1490815375177705789_o.jpeg"
		>
			<p>Page</p>
		</TemplatePage>
	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../i18n/${locale}.json`)).default
		}
	};
}

