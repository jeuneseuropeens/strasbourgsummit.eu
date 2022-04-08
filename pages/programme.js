import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import {useTranslations} from 'next-intl'

import TemplatePage from '../components/layout/TemplatePage'
import Container from '../components/layout/Container'
import NewsletterCTA from '../components/NewsletterCTA'
import ProgrammeTabs from '../components/programme/ProgrammeTabs'
import {eventFilePaths, EVENTS_PATH} from '../lib/api'

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
		const allEvents = eventFilePaths.map((filePath) => {
			const source = fs.readFileSync(path.join(EVENTS_PATH, filePath), 'utf8')
			const { content, data } = matter(source)

			return {
				content,
				...data,
				filePath,
			}
		})

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
