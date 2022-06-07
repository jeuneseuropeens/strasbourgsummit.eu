import {useTranslations} from 'next-intl'
import {useRouter} from 'next/router'

import Title from '../commons/Title'

export default function SignCTA() {
	const t = useTranslations('pages.Declaration.cta')
	const {locale} = useRouter()

	const formId = 'wvGP8l'

	return (
		<div className="max-w-4xl m-auto mt-12">
			<div className="py-10 px-6 bg-gradient-to-br from-[#11509D] to-[#212F5A] rounded-3xl sm:py-12 sm:px-12 lg:pl-16 lg:flex lg:items-center">
				<div className="lg:flex-none">
					<Title tag='h2' darkMode className="w-max ml-4 lg:ml-0 lg:mb-8">{t('title')}</Title>
				</div>
				<div className="mt-8 lg:mt-0 lg:ml-12 lg:flex-1">
					<div className="bg-white rounded-xl px-6">
						<iframe
							src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
							width="100%"
							height="300"
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
			messages: (await import(`../../i18n/${locale}.json`)).default
		}
	}
}
