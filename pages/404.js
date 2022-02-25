import TemplatePage from '../components/layout/TemplatePage';
import {useTranslations} from 'next-intl';
import Link from 'next/link'

export default function Custom404() {
	const t = useTranslations('pages.404')

	return (
		<TemplatePage>
			<main	className="md:h-home-full">
				<div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
					<p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">
						{ t('error') }
					</p>
					<h1 className="mt-2 text-4xl font-extrabold text-primary-600 tracking-tight sm:text-5xl">
						{ t('title') }
					</h1>
					<p className="mt-2 text-lg font-medium text-black text-opacity-50">
						{ t('description') }
					</p>
					<div className="mt-6">
						<Link href="/">
							<a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-primary-100 hover:bg-primary-200">
								{t('button')}
							</a>
						</Link>
					</div>
				</div>
			</main>
		</TemplatePage>
	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../i18n/${locale}.json`)).default
		}
	};
}
