import matter from 'gray-matter'
import {useTranslations} from 'next-intl'

import TemplatePage from '../components/layout/TemplatePage'
import Container from '../components/layout/Container'
import NewsletterCTA from '../components/NewsletterCTA'
import ProgrammeTabs from '../components/programme/ProgrammeTabs'
import getSlugs from '../lib/getSlugs'

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
	try {
		const eventSlugs = getSlugs(require.context('../_events', true, /\.md$/))

		const allEvents = await Promise.all(eventSlugs.map(async (filePath) => {
			const source = await import(`../_events/${filePath}.md`)
			const { content, data } = matter(source.default)

			return {
				content,
				...data,
				filePath,
			}
		}))

		return {
			props: {
				allEvents,
				messages: (await import(`../i18n/${locale}.json`)).default
			}
		}
	} catch (err) {
		console.error(err)
		throw new Error(err)
	}
}
