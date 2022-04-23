import {useTranslations} from 'next-intl'
import {useRouter} from 'next/router'
import {Logo_Euractiv, Logo_Taurillon, Logo_TNF} from '../../lib/organisationsData'
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
		}
	]

	return (
		<div className="mt-10 lg:mt-12">
			<Title tag="h2" className="text-center mb-6">{t('medias')}</Title>

			<div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
				<div className="hidden lg:block"/>
				{medias.map((media, index) => (
					<ImageElement key={index} item={media} />
				))}
			</div>
		</div>
	)
}
