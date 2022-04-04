import {CalendarIcon} from '@heroicons/react/outline'
import {useRouter} from 'next/router'
import {useTranslations} from 'next-intl'

import TabGroup from '../commons/tabs/TabGroup'
import TabPanel from '../commons/tabs/TabPanel'
import ComingSoon from './ComingSoon'
import EventsListing from './EventsListing'
import ProgrammeSaturday from './saturday/ProgrammeSaturday'

export default function ProgrammeTabs({allEvents}) {
	const t = useTranslations('pages.Programme')
	const {locale} = useRouter()

	const days = [
		{name: t('tabs.thursday.name'), icon: CalendarIcon},
		{name: t('tabs.friday.name'), icon: CalendarIcon},
		{name: t('tabs.saturday.name'), icon: CalendarIcon},
		{name: t('tabs.sunday.name'), icon: CalendarIcon},
	]

	const events = {
		thursday: allEvents.filter(event => event.date === '2022-05-05' && event.locale === locale),
		friday: allEvents.filter(event => event.date === '2022-05-06' && event.locale === locale),
		sunday: allEvents.filter(event => event.date === '2022-05-08' && event.locale === locale),
	}

	const umbrellas = [
		{id: 'economieSociale', title: t('events.umbrellas.economieSociale'), bgColor: 'bg-cyan-200', textColor: 'text-color-800'},
		{id: 'courses', title: t('events.umbrellas.courses'), bgColor: 'bg-orange-200', textColor: 'text-orange-800'},
	]

	return (
		<TabGroup
			tabPanels={days}
			tabContent={
				<>
					<TabPanel>
						{events.thursday
							? <EventsListing events={events.thursday} umbrellas={umbrellas}/>
							: <ComingSoon/>
						}
					</TabPanel>

					<TabPanel>
						{events.friday
							? <EventsListing events={events.friday} umbrellas={umbrellas}/>
							: <ComingSoon/>
						}
					</TabPanel>

					<TabPanel>
						<ProgrammeSaturday/>
					</TabPanel>

					<TabPanel>
						{events.sunday
							? <EventsListing events={events.sunday} umbrellas={umbrellas}/>
							: <ComingSoon/>
						}
					</TabPanel>
				</>
			}
			defaultIndex={2}
		/>
	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../../i18n/${locale}.json`)).default
		}
	}
}

