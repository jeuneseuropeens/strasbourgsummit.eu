import TakePartElement from './sub-components/TakePartElement'
import {useTranslations} from 'next-intl'
import {richTextConfig} from '../../lib/constants'

export default function TakePartOrganisation() {
	const t = useTranslations('pages.TakePart.tabs.organisation')

	const data = [
		{
			title: t('opportunities.delegation.name'),
			description: t.rich('opportunities.delegation.description', richTextConfig),
			actions: [
				{
					title: t('opportunities.delegation.actions.register.title'),
					href: t('opportunities.delegation.actions.register.form'),
					isExternal: true
				},
				{
					title: t('opportunities.delegation.actions.openProgramme.title'),
					href: 'programme',
					type: 'white'
				},
			],
			faqs: [
				{
					question: t('opportunities.delegation.faqs.costs.question'),
					answer: t.rich('opportunities.delegation.faqs.costs.answer', richTextConfig),
				},
				{
					question: t('opportunities.delegation.faqs.accommodation.question'),
					answer: t.rich('opportunities.delegation.faqs.accommodation.answer', {
						...richTextConfig,
						LinkOt: (children) => <a href="https://www.visitstrasbourg.fr/organiser/venir-et-se-deplacer-a-strasbourg/">{children}</a>,
						LinkCiarus: (children) => <a href="https://www.ciarus.com/">{children}</a>,
						LinkCej: (children) => <a href="https://www.coe.int/fr/web/youth/eyc-strasbourg">{children}</a>,
						LinkCap: (children) => <a href="https://www.cap-europe-hotel.com/">{children}</a>,
						LinkPeople: (children) => <a href="https://www.thepeoplehostel.com/fr/destinations/strasbourg/">{children}</a>,
						LinkRives: (children) => <a href="https://www.hifrance.org/auberges-de-jeunesse/strasbourg-2-rives/">{children}</a>
					}),
				},
				{
					question: t('opportunities.delegation.faqs.come.question'),
					answer: t.rich('opportunities.delegation.faqs.come.answer', {
						...richTextConfig,
						LinkOt: (children) => <a href="https://www.visitstrasbourg.fr/organiser/venir-et-se-deplacer-a-strasbourg/">{children}</a>,
					}),
				},
				{
					question: t('opportunities.delegation.faqs.move.question'),
					answer: t.rich('opportunities.delegation.faqs.move.answer', {
						...richTextConfig,
						LinkCts: (children) => <a href="https://www.cts-strasbourg.eu/">{children}</a>,
					}),
				}
			],
		},
		{
			title: t('opportunities.event.name'),
			description: t.rich('opportunities.event.description', richTextConfig),
			full: t('opportunities.event.full'),
			actions: [
				{
					title: t('opportunities.event.actions.suggestEvent.title'),
					href: 'mailto:info@strasbourgsummit.eu',
					// href: t('opportunities.event.actions.suggestEvent.form'),
				},
			],
			faqs: [
				{
					question: t('opportunities.event.faqs.venue.question'),
					answer: t.rich('opportunities.event.faqs.venue.answer', richTextConfig),
				},
				{
					question: t('opportunities.event.faqs.confirmation.question'),
					answer: t.rich('opportunities.event.faqs.confirmation.answer', richTextConfig),
				},
				{
					question: t('opportunities.event.faqs.types.question'),
					answer: t.rich('opportunities.event.faqs.types.answer', richTextConfig),
				},
				{
					question: t('opportunities.event.faqs.online.question'),
					answer: t.rich('opportunities.event.faqs.online.answer', richTextConfig),
				}
			],
		},
		{
			title: t('opportunities.covid.name'),
			faqs: [
				{
					question: t('opportunities.covid.faqs.measures.question'),
					answer: t.rich('opportunities.covid.faqs.measures.answer', richTextConfig),
				},
				{
					question: t('opportunities.covid.faqs.cancel.question'),
					answer: t.rich('opportunities.covid.faqs.cancel.answer', richTextConfig),
				},
			],
		},
	]

	return (
		<div>
			{data.map((item, index) => (
				<TakePartElement key={index} data={item}/>
			))}
		</div>
	)
}
