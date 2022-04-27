import {useTranslations} from 'next-intl'
import Container from '../components/layout/Container'
import MediasListing from '../components/organisations/MediasListing'
import TemplatePage from '../components/layout/TemplatePage'
import Title from '../components/commons/Title'
import {DocumentDownloadIcon, MailIcon} from '@heroicons/react/outline'
import {classNames} from '../lib/helpers'
import {useRouter} from 'next/router'
import EventPreview from '../components/programme/EventPreview'

function DocumentCard({document}) {
	return (
		<a
			href={document.link}
			target="_blank"
			rel="noreferrer"
			className={classNames(
				'block p-6 mt-3 max-w-sm mx-auto',
				'flex items-center',
				'bg-primary-50 rounded-lg',
				'transition duration-500 drop-shadow-none hover:drop-shadow-lg',
			)}
		>
			<div>
				<document.icon className="h-10 w-10 text-primary-400" aria-hidden="true"/>
			</div>

			<div className="pl-4 md:pl-5">
				<div className="text-xl">{document.title}</div>

				<div className="text-slate-500">{document.type}</div>
			</div>
		</a>
	)
}

function Resources() {
	const t = useTranslations('pages.Press.resources')
	const {locale} = useRouter()

	const pressKit = `/documents/${locale === 'fr'
		? 'Dossier-Sommet-Strasbourg-presse-2.pdf'
		: 'Dossier-Strasbourg-Summit-EN-press-2.pdf'
	}`

	return (
		<section className="mt-12">
			<Title tag="h2" className="text-center">{t('title')}</Title>

			<p className="text-center mt-3">{t('description')}</p>

			<div className="mt-6">
				<p className="text-center">{t('kit.description')}</p>

				<DocumentCard
					document={{
						icon: DocumentDownloadIcon,
						link: pressKit,
						title: t('kit.title'),
						type: 'PDF'
					}}
				/>

				{/*<DocumentCard
					document={{
						icon: FolderIcon,
						link: pressKit,
						title: "Ressources",
						type: 'Google Drive'
					}}
				/>*/}
			</div>

			<div className="mt-10">
				<p className="text-center">{t('contact')}</p>

				<div className="mt-3 flex justify-center">
					<div className="flex-shrink-0">
						<MailIcon className="h-6 w-6 text-primary-400" aria-hidden="true" />
					</div>
					<div className="ml-3 text-base">
						<p>info@strasbourgsummit.eu</p>
					</div>
				</div>
			</div>
		</section>
	)
}

function Conference() {
	const t = useTranslations('pages.Press.conference')

	const event = {
		title: t('title'),
		startTime: t('date'),
		location: {
			main: 'Club de la presse Strasbourg Europe',
			after: '\n10 place Kléber à Strasbourg'
		},
		links: [{
			title: t('confirm'),
			href: 'mailto:info@strasbourgsummit.eu'
		}]
	}

	return (
		<section className="mt-12">
			<Title tag="h2" className="text-center mb-6">{t('title')}</Title>

			<div className="max-w-sm mx-auto">
				<EventPreview
					event={event}
				/>
			</div>
		</section>
	)
}

export default function PressRoom() {
	const t = useTranslations('pages.Press')

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
			bannerImage="/_MG_6038-min.jpg"
		>
				<Container>
					<div className="max-w-xl mx-auto">
						<Conference/>
					</div>

					<div className="max-w-xl mx-auto">
						<Resources/>
					</div>

					<div className="mt-16 border-t border-gray-200">
						<MediasListing/>
					</div>
				</Container>
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

