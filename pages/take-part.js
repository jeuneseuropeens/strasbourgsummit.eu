import {useTranslations} from 'next-intl'
import TemplatePage from '../components/layout/TemplatePage'
import TakePartTabs from '../components/takePart/TakePartTabs'

export default function TakePart() {
	const t = useTranslations('pages.TakePart')

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
		>
			<TakePartTabs></TakePartTabs>
		</TemplatePage>
	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../i18n/${locale}.json`)).default
		}
	}
}

