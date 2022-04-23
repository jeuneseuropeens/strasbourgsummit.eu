import {useTranslations} from 'next-intl'
import {useRouter} from 'next/router'
import FooterSectionWithBorder from './FooterSectionWithBorder'

export default function FooterSupporters() {
	const t = useTranslations('menu.footer')
	const {locale} = useRouter()

	const navigation = {
		funding: [
			{
				name: t('ofaj'),
				image: '/logos/Logo-OFAJ.png',
				href: locale === 'en' ? 'https://www.fgyo.org/' : 'https://www.ofaj.org/'
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
			<div className="sm:flex sm:justify-evenly sm:gap-8">
				<div>
					<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t('supportedBy')}</h3>

					<div className="flex flex-wrap gap-8 mt-4">
						{navigation.funding.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="relative block flex justify-center"
							>
								<img
									src={item.image}
									alt={item.name}
									className="h-20"
								/>
							</a>
						))}
					</div>
				</div>

				<div className="mt-12 sm:mt-0">
					<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t('labeledBy')}</h3>

					<div className="mt-4 w-[150px]">
						<a
							key={navigation.label.name}
							href={navigation.label.href}
							className="relative block flex justify-center"
						>
							<img
								src={navigation.label.image}
								alt={navigation.label.name}
							/>
						</a>
					</div>
				</div>
			</div>
		</FooterSectionWithBorder>
	)
}
