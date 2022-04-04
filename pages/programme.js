import {useTranslations} from 'next-intl'
import TemplatePage from '../components/layout/TemplatePage'
import Container from '../components/layout/Container'
import NewsletterCTA from '../components/NewsletterCTA'
import ProgrammeTabs from '../components/programme/ProgrammeTabs'

export default function Programme() {
	const t = useTranslations('pages.Programme')

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
		>
			<Container>
				<ProgrammeTabs/>

				<NewsletterCTA/>
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

