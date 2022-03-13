import {useTranslations} from 'next-intl'
import Link from 'next-translate-routes/link'
import TabGroup from '../lib/tabs/TabGroup'
import TabPanel from '../lib/tabs/TabPanel'
import TakePartCard from './TakePartCard'

import {UserGroupIcon} from '@heroicons/react/solid'

export default function TakePartTabs() {
	const t = useTranslations('pages.TakePart.tabs')

	const categories = [
		{
			id: 'organisation',
			name: t('organisation.name'),
			icon: UserGroupIcon,
		}
		// {
		// 	id: 'individual',
		// 	name: t('individual.name'),
		// 	icon: UserIcon,
		// },
	]

	const opportunities = [
		{
			name: t('organisation.opportunities.delegation.name'),
			description: t('organisation.opportunities.delegation.description'),
			category: 'organisation',
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
			name: t('organisation.opportunities.event.name'),
			description: t('organisation.opportunities.event.description'),
			category: 'organisation',
			actions: [
				{
					title: t('organisation.opportunities.event.actions.suggestEvent.title'),
					href: t('organisation.opportunities.event.actions.suggestEvent.form')
				},
			],
		},
		// {
		// 	name: t('organisation.opportunities.ideas.name'),
		// 	description: t('organisation.opportunities.ideas.description'),
		// 	category: 'organisation',
		// 	actions: [
		// 		{
		// 			title: t('organisation.opportunities.ideas.actions.suggestEvent.title'),
		// 				href: '#',
		// 		},
		// 	],
		// },
		{
			name: 'Participation indiv',
			description: 'desc',
			category: 'individual',
		},
		/*{
			name: 'Bénévole',
			description: 'desc',
			category: 'individual',
		},
		{
			name: 'Partagez vos idées pour changer l’Europe',
			description: 'All the basics for starting a new business',
			category: 'individual',
		}*/
	]

	return (
		<>
			<TabGroup
				tabPanels={categories}
				tabContent={
					categories.map((category) => (
						<TabPanel key={category.name} className="mt-8 sm:mt-12 lg:max-w-4xl lg:mx-auto">
							{opportunities.filter(
								opportunity => opportunity.category === category.id
							).map((opportunity) => {
								return (
									<TakePartCard
										key={opportunity.name}
										data={opportunity}
									/>
								)
							})}
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

