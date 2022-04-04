import {useTranslations} from 'next-intl'
import TemplatePage from '../components/layout/TemplatePage'
import Container from '../components/layout/Container'
import NewsletterCTA from '../components/NewsletterCTA'
import ProgrammeTabs from '../components/programme/ProgrammeTabs'
import {getAllEvents} from '../lib/api'

export default function Programme({allEvents}) {
	const t = useTranslations('pages.Programme')

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
		>
			<Container>
				<ProgrammeTabs allEvents={allEvents}/>

				<NewsletterCTA/>
			</Container>
		</TemplatePage>
	)
}

const eventFields = [
	'locale',
	'umbrellaId',
	'title',
	'date',
	'startTime',
	'endTime',
	'location',
	'links',
	'excerpt',
	'language',
	'organisers'
]

export async function getStaticProps({locale}) {
	const allEvents = getAllEvents(eventFields)

	return {
		props: {
			allEvents,
			messages: (await import(`../i18n/${locale}.json`)).default
		}
	}
}
