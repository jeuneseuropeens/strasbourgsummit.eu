import {useTranslations} from 'next-intl'
import Link from 'next-translate-routes/link'
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

	const events = [
		{
			name: 'test événement',
			tab: 'thursday',
			description: t('organisation.opportunities.delegation.description'),
			actions: [
				{
					title: t('organisation.opportunities.delegation.actions.register.title'),
					href: t('organisation.opportunities.delegation.actions.register.form'),
				},
				{
					title: t('organisation.opportunities.delegation.actions.openProgramme.title'),
					type: 'Link',
					href: 'programme'
				},
			],
		},
		{
			name: 'Participation indiv',
			href: '#',
			description: 'desc',
		},
		{
			name: 'Bénévole',
			href: '#',
			description: 'desc',
		},
		{
			name: 'Partagez vos idées pour changer l’Europe',
			href: '#',
			description: 'All the basics for starting a new business',
		},
	]

	const buttonStyles = 'block w-full border border-transparent rounded-md py-2 text-sm font-semibold text-center mt-4 text-primary-600 bg-primary-100 hover:bg-primary-200 first:mt-8 first:text-white first:bg-primary-500 first:hover:bg-primary-600'

	return (
		<>
			{/*<ComingSoon/>*/}

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
		</>
	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../../i18n/${locale}.json`)).default
		}
	}
}

