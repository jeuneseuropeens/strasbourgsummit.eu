import {useTranslations} from 'next-intl'
import {useRouter} from 'next/router'
import FooterMenu from './sub-components/FooterMenu'
import FooterSupporters from './sub-components/FooterSupporters'

export default function Footer() {
	const t = useTranslations('PageLayout')
	const {locale} = useRouter()

	return (
		<footer aria-labelledby="footer-heading" className="bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div>
					<div className="space-y-8">
						<img
							className="h-64 mx-auto"
							src={`/Logo-Sommet-Footer-Web-${locale}.svg`}
							alt={t('siteTitle')}
						/>

						<p className="text-gray-500 text-base max-w-md mx-auto text-center">
							{t('siteDescription')}
						</p>
					</div>

					<FooterSupporters/>

					<FooterMenu/>
				</div>
			</div>
		</footer>
	)
}

