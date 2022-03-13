import {useTranslations} from 'next-intl'
import TemplatePage from '../components/layout/TemplatePage'
import Container from '../components/layout/Container'
import NewsletterCTA from '../components/NewsletterCTA'
import ProgrammeTabs from '../components/programme/ProgrammeTabs'

function ComingSoon() {
	const t = useTranslations('pages')

	const buttonStyles = 'block w-max m-auto border border-transparent rounded-md py-2 px-4 text-sm font-semibold text-center mt-4 text-primary-600 bg-primary-100 hover:bg-primary-200 first:mt-8 first:text-white first:bg-primary-500 first:hover:bg-primary-600'

	const data = {
		title: t('TakePart.tabs.organisation.opportunities.event.actions.suggestEvent.title'),
		href: t('TakePart.tabs.organisation.opportunities.event.actions.suggestEvent.form'),
	}

	return (
		<div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
			<div className="relative block border-2 border-gray-300 border-dashed rounded-lg px-12 py-24 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				<span className="mb-8 block text-lg font-medium text-gray-900">{t('Programme.comingSoon')}</span>
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

export default function Programme() {
	const t = useTranslations('pages.Programme')

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
		>
			<Container>
				<ProgrammeTabs/>

				<NewsletterCTA/>
			</Container>
		</TemplatePage>
	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../i18n/${locale}.json`)).default
		}
	}
}

