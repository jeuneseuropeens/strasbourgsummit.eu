import Container from '../components/layout/Container'
import {useTranslations} from 'next-intl'
import {richTextConfig} from '../lib/constants'
import Title from '../components/commons/Title'
import {signatories} from '../data/signatoriesData'
import TemplatePage from '../components/layout/TemplatePage'
import Button from '../components/commons/Button'
import SignCTA from '../components/signatories/SignCTA'

const SignButton = () => (
	<div className="max-w-prose mx-auto mt-10">
		<Button href="/declaration" isExternal={false} type="primary">
			Rejoignez les signataires
		</Button>
	</div>
)

export default function Map() {
	const t = useTranslations('pages.Declaration')

	return (
		<TemplatePage title={t('title')} bannerImage="/MARCHE EUROPE_loop.gif">
			<Container>
				<div className="mt-6 prose prose-blue text-gray-600 mx-auto">
					{/*<Title>{t('title')}</Title>*/}

					<Title tag="h2" className="">{t('subtitle')}</Title>

					{t.rich('text', richTextConfig)}

					<Title tag="h2">{t('signatories')}</Title>

					<ul>
							{signatories.map((item, index) => (
								<li key={index}>{item.name}</li>
							))}
					</ul>
				</div>

				{/*<SignButton />*/}

				<SignCTA />
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
