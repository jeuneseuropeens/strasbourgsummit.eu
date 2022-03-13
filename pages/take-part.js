import {useTranslations} from 'next-intl'
import TemplatePage from '../components/layout/TemplatePage'
import TakePartTabs from '../components/takePart/TakePartTabs'
import Container from '../components/layout/Container'

export default function TakePart() {
	const t = useTranslations('pages.TakePart')

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
		>
			<Container>
				<TakePartTabs/>
			</Container>
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

