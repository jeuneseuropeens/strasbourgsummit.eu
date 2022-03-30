import {CheckIcon} from '@heroicons/react/outline'
import {useTranslations} from 'next-intl'
import Title from '../lib/Title'
import {richTextConfig} from '../../constants'

export default function Demands() {
	const t = useTranslations('pages.Index.demands')

	const demands = [
		'supportProposals',
		'civilSociety',
		'reform'
	]

	return (
		<div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:my-24 lg:px-8">
			<div className="max-w-3xl mx-auto text-center">
				<Title tag='h2' extrabold>{t('title')}</Title>
			</div>
			<dl className="mt-12 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
				{demands.map((demand, index) => (
					<div key={index} className="relative">
						<dt>
							<CheckIcon className="absolute h-7 w-7 text-green-500" aria-hidden="true" />
							<p className="ml-9 text-lg leading-6 text-gray-800">
								{t.rich(demand, richTextConfig)}
							</p>
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
			messages: (await import(`../../i18n/${locale}.json`)).default
		}
	}
}
