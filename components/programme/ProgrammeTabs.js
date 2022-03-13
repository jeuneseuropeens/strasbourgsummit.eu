import {useTranslations} from 'next-intl'
import TabGroup from '../lib/tabs/TabGroup'
import TabPanel from '../lib/tabs/TabPanel'

import ComingSoon from './ComingSoon'
import ProgrammeSaturday from './saturday/ProgrammeSaturday'
import {CalendarIcon} from '@heroicons/react/outline'

export default function ProgrammeTabs() {
	const t = useTranslations('pages.Programme.tabs')

	const days = [
		{
			name: t('thursday.name'),
			icon: CalendarIcon
		},
		{
			name: t('friday.name'),
			icon: CalendarIcon
		},
		{
			name: t('saturday.name'),
			icon: CalendarIcon
		},
		{
			name: t('sunday.name'),
			icon: CalendarIcon
		},
	]

	return (
		<TabGroup
			tabPanels={days}
			tabContent={
				<>
					<TabPanel>
						<ComingSoon/>
					</TabPanel>

					<TabPanel>
						<ComingSoon/>
					</TabPanel>

					<TabPanel>
						<ProgrammeSaturday/>
					</TabPanel>

					<TabPanel>
						<ComingSoon/>
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

