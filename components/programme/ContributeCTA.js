import {useTranslations} from 'next-intl'

export default function ContributeCTA() {
	const t = useTranslations('pages')

	const buttonStyles = 'block w-max m-auto border border-transparent rounded-md py-2 px-4 text-sm font-semibold text-center mt-4 text-primary-600 bg-primary-100 hover:bg-primary-200 first:mt-8 first:text-white first:bg-primary-500 first:hover:bg-primary-600'

	const data = {
		title: t('TakePart.tabs.organisation.opportunities.event.actions.suggestEvent.title'),
		href: 'mailto:info@strasbourgsummit.eu',
		// href: t('TakePart.tabs.organisation.opportunities.event.actions.suggestEvent.form'),
	}

	return (
		<div className="flex justify-center items-center relative block p-12 border-2 border-gray-300 border-dashed rounded-lg text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
			<div>
				<span className="mb-4 block text-lg font-bold text-gray-900">{t('Programme.contribute.title')}</span>
				<span className="mb-8 block text-md font-medium text-gray-900 whitespace-pre-line">{t('Programme.contribute.subtitle')}</span>
				<a
					href={data.href}
					className={buttonStyles}
					target="_blank" rel="noreferrer"
				>
					{data.title}
				</a>
			</div>
		</div>
	)
}
