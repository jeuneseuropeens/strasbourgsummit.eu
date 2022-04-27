import {useTranslations} from 'next-intl'
import {useRouter} from 'next/router'
import FooterSectionWithBorder from './FooterSectionWithBorder'

export default function FooterSupporters() {
	const t = useTranslations('menu.footer')
	const {locale} = useRouter()

	const navigation = {
		funding: [
			{
				name: t('city'),
				href: 'https://www.strasbourg.eu/',
				image: '/logos/Logo-Strasbourg.svg',
			},
			{
				name: t('cea'),
				href: 'https://www.alsace.eu/',
				image: '/logos/Logo-CEA-H.png',
			},
			{
				name: t('region'),
				href: 'https://www.grandest.fr/',
				image: '/logos/Logo-RGE.png',
			},
			{
				name: t('prefet'),
				href: 'https://www.bas-rhin.gouv.fr',
				image: '/logos/Logo-Prefet-Bas-Rhin.svg',
			},
			{
				name: t('ofaj'),
				href: locale === 'en' ? 'https://www.fgyo.org/' : 'https://www.ofaj.org/',
				image: '/logos/Logo-OFAJ.png',
			},
		],
		label: {
			name: t('eyy'),
			image: `/logos/Logo-EYY-${locale}.png`,
			href: `https://europa.eu/youth/year-of-youth/activities/1680_${locale}`
		}
	}

	return (
		<FooterSectionWithBorder>
			<div className="sm:flex sm:flex-wrap sm:justify-between sm:gap-8">
				<div>
					<h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">{t('supportedBy')}</h3>

					<div className="flow-root mt-4 lg:mt-6">
						<div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
							{navigation.funding.map((item, index) => (
								<a
									key={index}
									href={item.href}
									className="block mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
								>
									<img className="h-16" src={item.image} alt={item.name} />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="mt-12 sm:mt-0">
					<h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">{t('labeledBy')}</h3>

					<div className="flow-root mt-4 lg:mt-6">
						<div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
							<a
								href={navigation.label.href}
								className="block mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
							>
								<img className="h-24" src={navigation.label.image} alt={navigation.label.name} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</FooterSectionWithBorder>
	)
}
