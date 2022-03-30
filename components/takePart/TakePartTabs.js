import {useTranslations} from 'next-intl'
import TabGroup from '../lib/tabs/TabGroup'
import TabPanel from '../lib/tabs/TabPanel'

import {UserGroupIcon} from '@heroicons/react/solid'
import {UserIcon} from '@heroicons/react/outline'
import TakePartOrganisation from './TakePartOrganisation'
import TakePartIndividual from './TakePartIndividual'

export default function TakePartTabs() {
	const t = useTranslations('pages.TakePart.tabs')

	const categories = [
		{
			id: 'organisation',
			name: t('organisation.name'),
			icon: UserGroupIcon,
		},
		{
			id: 'individual',
			name: t('individual.name'),
			icon: UserIcon,
		},
	]

	return (
		<>
			<TabGroup
				tabPanels={categories}
				tabContent={
					categories.map((category) => (
						<TabPanel key={category.id} className="mt-12 sm:mt-16 lg:max-w-4xl lg:mx-auto">
							{category.id === 'organisation' && <TakePartOrganisation/>}
							{category.id === 'individual' && <TakePartIndividual/>}
						</TabPanel>
					))
				}
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

