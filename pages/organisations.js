import {useTranslations} from 'next-intl'

import TemplatePage from '../components/layout/TemplatePage'
import OrganisationsListing from '../components/organisations/OrganisationsListing'
import MediasListing from '../components/organisations/MediasListing'

export default function OrganisationsPage() {
	const t = useTranslations('pages.Organisations')

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
		>
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<OrganisationsListing />

				<MediasListing />
			</div>
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

