import TakePartElement from './sub-components/TakePartElement'
import {useTranslations} from 'next-intl'
import {richTextConfig} from '../../lib/constants'

export default function TakePartIndividual() {
	const t = useTranslations('pages.TakePart.tabs.individual')

	const data = [
		{
			title: t('opportunities.delegation.name'),
			description: t.rich('opportunities.delegation.description', richTextConfig),
			actions: [
				{
					title: t('opportunities.delegation.actions.join.title'),
					href: '/organisations',
				},
			],
			faqs: [
				{
					question: t('opportunities.delegation.faqs.how.question'),
					answer: t.rich('opportunities.delegation.faqs.how.answer', richTextConfig),
				},
				{
					question: t('opportunities.delegation.faqs.online.question'),
					answer: t.rich('opportunities.delegation.faqs.online.answer', richTextConfig),
				},
				{
					question: t('opportunities.delegation.faqs.costs.question'),
					answer: t.rich('opportunities.delegation.faqs.costs.answer', richTextConfig),
				}
			],
		},
		{
			title: t('opportunities.public.name'),
			description: t.rich('opportunities.public.description', richTextConfig),
			actions: [
				{
					title: t('opportunities.public.actions.programme.title'),
					href: '/programme',
				},
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
