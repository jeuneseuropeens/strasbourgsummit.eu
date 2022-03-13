import {useTranslations} from 'next-intl'
import {useRouter} from 'next/router'

export default function NewsletterCTA() {
	const t = useTranslations('newsletter')
	const {locale} = useRouter()

	const formId = locale === 'fr'
		? 'wLyAyn' // form in French
		: 'wdVLrm' // form in English

	return (
		<div className="max-w-5xl m-auto mt-12">
			<div className="py-10 px-6 bg-gradient-to-br from-[#11509D] to-[#212F5A] rounded-3xl sm:py-12 sm:px-12 lg:pl-16 lg:flex lg:items-center">
				<div className="lg:w-0 lg:flex-1">
					<h2 className="text-3xl font-bold text-white">{t('title')}</h2>
					<p className="mt-4 max-w-3xl text-lg text-indigo-100">
						{t('description')}
					</p>
					{/*<p className="mt-6 text-xs text-indigo-100">*/}
					{/*	We care about the protection of your data. Read our{' '}*/}
					{/*	<a href="#" className="text-white font-medium underline">*/}
					{/*		Privacy Policy.*/}
					{/*	</a>*/}
					{/*</p>*/}
				</div>
				<div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
					<div className="bg-white rounded-xl px-6">
						<iframe
							src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
							width="100%"
							height="230"
							frameBorder="0"
							marginHeight="0"
							marginWidth="0"
							title="Newsletter">
						</iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../i18n/${locale}.json`)).default
		}
	}
}
