import {useTranslations} from 'next-intl'
import {useRouter} from 'next/router'
import Image from 'next/image'
import TemplatePage from '../components/layout/TemplatePage'
import Title from '../components/commons/Title'

import {Logo_Euractiv, Logo_Taurillon, Logo_TNF, organisations} from '../lib/organisationsData'

function ImageElement({item}) {
	return (
		<a
			href={item.website}
			target="_blank"
			rel="noreferrer"
			className="transition duration-500 block col-span-1 p-4 bg-white rounded-lg drop-shadow-none hover:drop-shadow-lg sm:p-6 md:p-8"
		>
			<div className="relative h-20 w-full max-w-[15rem] mx-auto">
				<Image
					className={'h-20'}
					src={item.image}
					alt={item.name}
					placeholder="blur"
					layout={'fill'}
					objectFit={'contain'}
				/>
			</div>

			<p className="text-center mt-2 text-gray-600">{item.name}</p>
		</a>
	)
}

function Organisations() {
	return (
		<div className="mt-6 grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:mt-8">
			{organisations.map((partner, index) => (
				<ImageElement key={index} item={partner} />
			))}
		</div>
	)
}

function MediaPartners() {
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

export default function OrganisationsPage() {
	const t = useTranslations('pages.Organisations')

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
		>
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<Organisations />

				<MediaPartners />
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

