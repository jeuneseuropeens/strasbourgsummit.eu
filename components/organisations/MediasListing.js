import {useTranslations} from 'next-intl'
import {useRouter} from 'next/router'
import {
	Logo_Euractiv,
	Logo_Euradio,
	Logo_Le1Hebdo,
	Logo_RCF,
	Logo_Taurillon,
	Logo_TNF
} from '../../data/organisationsData'
import Title from '../commons/Title'
import ImageElement from './ImageElement'

export default function MediasListing() {
	const t = useTranslations('pages.Organisations')
	const {locale} = useRouter()

	const medias = [
		locale === 'fr' ? {
			name: 'Le Taurillon',
			image: Logo_Taurillon,
			website: 'https://www.taurillon.org/',
		} : {
			name: 'The New Federalist',
			image: Logo_TNF,
			website: 'https://www.thenewfederalist.eu/',
		},
		{
			name: 'EURACTIV',
			image: Logo_Euractiv,
			website: 'https://www.euractiv.com/',
		},
		{
			name: 'euradio',
			image: Logo_Euradio,
			website: 'https://euradio.fr/',
		},
		{
			name: 'RCF Alsace',
			image: Logo_RCF,
			website: 'https://rcf.fr/pres-de-chez-moi/alsace',
		},
		{
			name: 'Le 1 hebdo',
			image: Logo_Le1Hebdo,
			website: 'https://le1hebdo.fr/',
		},
	]

	return (
		<section className="mt-10 lg:mt-12">
			<Title tag="h2" className="text-center mb-6">{t('medias')}</Title>

			<div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3">
				{medias.map((media, index) => (
					<ImageElement key={index} item={media} />
				))}
			</div>
		</section>
	)
}
