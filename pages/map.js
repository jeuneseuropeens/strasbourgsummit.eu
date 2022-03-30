import Container from '../components/layout/Container'
import TemplateBase from '../components/layout/TemplateBase'
import {useTranslations} from 'next-intl'
import Title from '../components/lib/Title'

export default function Map() {
	const t = useTranslations('pages.Map')

	return (
		<TemplateBase>
			<Container>
				<div className="mb-12">
					<Title tag="h1" center>{t('title')}</Title>
				</div>
				<iframe
					className="max-h-screen"
					width="100%" height="700px"
					frameBorder="0" allowFullScreen
					src="//umap.openstreetmap.fr/fr/map/strasbourg-summit_730726?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"
				/>
				<p><a href="//umap.openstreetmap.fr/fr/map/strasbourg-summit_730726">Voir en plein écran</a></p>

			</Container>
		</TemplateBase>
		)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../i18n/${locale}.json`)).default
		}
	}
}
