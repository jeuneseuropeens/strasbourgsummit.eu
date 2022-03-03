import {useTranslations} from 'next-intl'
import {Tab} from '@headlessui/react'
import Container from '../layout/Container'
import Link from 'next-translate-routes/link'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
	const t = useTranslations('pages.TakePart.tabs')

	const tabs = [
		{
			name: t('organisation.name'),
			opportunities: [
				{
					name: t('organisation.opportunities.delegation.name'),
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
					name: t('organisation.opportunities.event.name'),
					href: '#',
					description: t('organisation.opportunities.event.description'),
					actions: [
						{
							title: t('organisation.opportunities.event.actions.suggestEvent.title'),
							href: t('organisation.opportunities.event.actions.suggestEvent.form')
						},
					],
				},
				// {
				// 	name: t('organisation.opportunities.ideas.name'),
				// 	href: '#',
				// 	description: t('organisation.opportunities.ideas.description'),
				// 	actions: [
				// 		{
				// 			title: t('organisation.opportunities.ideas.actions.suggestEvent.title'),
				// 				href: '#',
				// 		},
				// 	],
				// }
			]
		},
		/*{
			name: t('individual.name'),
			opportunities: [
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
				}
			]
		},*/
	]

	const buttonStyles = 'block w-full border border-transparent rounded-md py-2 text-sm font-semibold text-center mt-4 text-primary-600 bg-primary-100 hover:bg-primary-200 first:mt-8 first:text-white first:bg-primary-500 first:hover:bg-primary-600'

	return (
		<Container>
			<Tab.Group>
				<div className="flex flex-col sm:align-center">
					<Tab.List
						as={'nav'}
						className="relative bg-gray-100 rounded-lg p-0.5 flex self-center"
					>
						{tabs.map((tab) => (
							<Tab
								key={tab.name}
								className={({ selected }) => classNames(
									selected ? 'bg-secondary-400 text-primary-700' : 'text-gray-500 hover:text-gray-700',
									'px-3 py-2 font-medium text-sm rounded-md'
								)}
							>
								{tab.name}
							</Tab>
						))}
					</Tab.List>
				</div>

				<Tab.Panels as={'div'} className="mt-10">
					{tabs.map((tab) => (
						<Tab.Panel key={tab.name}>
							<div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
								{tab.opportunities.map((opportunity) => {
									return (
										<div key={opportunity.name}
												 className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
											<div className="p-6">
												<h2 className="text-lg leading-6 font-medium text-gray-900">{opportunity.name}</h2>

												<p className="mt-4 text-sm text-gray-500">{opportunity.description}</p>

												<div>
													{opportunity.actions && opportunity.actions.map((action) => {
														if (action.type === 'Link') {
															return (
																<Link
																	key={action.title}
																	href={action.href}
																>
																	<a className={buttonStyles}>
																		{action.title}
																	</a>
																</Link>
															)
														}

														return (
															<a
																key={action.title}
																href={action.href}
																className={buttonStyles}
																target="_blank" rel="noreferrer"
															>
																{action.title}
															</a>
														)
													})}
												</div>
											</div>
										</div>
									)
								})}
							</div>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</Container>
	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../../i18n/${locale}.json`)).default
		}
	}
}

