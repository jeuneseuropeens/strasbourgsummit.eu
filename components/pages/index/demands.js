import { CheckIcon } from '@heroicons/react/outline'
import {useTranslations} from 'next-intl';

export default function Demands() {
	const t = useTranslations('pages.Index.demands');

	const demands = [
		{
			content: t('supportProposals')
		},
		{
			content: t('civilSociety')
		},
		{
			content: t('reform')
		},
	]

	return (
		<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-3xl font-extrabold text-gray-900">{t('title')}</h2>
			</div>
			<dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
				{demands.map((demand) => (
					<div key={demand.name} className="relative">
						<dt>
							<CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
							<p className="ml-9 text-lg leading-6 font-medium text-gray-800">{demand.content}</p>
						</dt>
					</div>
				))}
			</dl>
		</div>
	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../../../i18n/${locale}.json`)).default
		}
	};
}
