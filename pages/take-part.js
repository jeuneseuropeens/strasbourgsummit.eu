import { useTranslations } from 'next-intl';
import TemplatePage from '../components/layout/TemplatePage';
import Tabs from '../components/pages/takePart/Tabs';

export default function TakePart() {
	const t = useTranslations('pages.TakePart');

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
			bannerImage="/17547117_1115094925303458_1490815375177705789_o.jpeg"
		>
			<Tabs></Tabs>
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

