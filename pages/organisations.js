import { useTranslations } from 'next-intl';
import TemplatePage from '../components/layout/TemplatePage';

function LeadingOrganisations() {
	const t = useTranslations('pages.Organisations');

	const organisations = [
		{
			name: 'Les Jeunes Européens - France',
			image: 'https://www.jeunes-europeens.org/squelettes/img/src/logo-jeunes-europeens-de-france2x.png',
			website: 'https://www.jeunes-europeens.org/',
		},
		{
			name: 'Union des Fédéralistes Européens',
			image: 'https://www.uef.fr/IMG/siteon0.jpg?1458078215',
			website: 'https://www.uef.fr/',
			maxHeight: 'max-h-16',
		},
		{
			name: 'Young European Federalists - JEF Europe',
			image: 'https://jef.eu/wp-content/uploads/2019/12/logo-jef-uai-516x236.png',
			website: 'https://jef.eu/',
		},
		{
			name: 'Forum Français de la Jeunesse',
			image: 'https://forumfrancaisjeunesse.fr/wp-content/themes/ffj_v2/images/logo.png',
			website: 'https://forumfrancaisjeunesse.fr/',
		},
		{
			name: 'Union of European Federalists',
			image: 'https://www.uef.fr/IMG/siteon0.jpg?1458078215',
			website: 'https://www.federalists.eu/',
		},
		{
			name: 'Mouvement Européen - Alsace',
			image: 'https://mouvement-europeen.eu/wp-content/uploads/2018/02/Logo_ME-F_2016_Alsace_HD-700x356.png',
			website: 'https://mouvement-europeen.eu/alsace/',
			maxHeight: 'max-h-24',
		},
		{
			name: 'Les Jeunes Européens - Strasbourg',
			image: 'data:image/png;base64,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',
			website: 'https://www.jeunes-europeens.org/Les-Jeunes-Europeens-Strasbourg',
		},
		{
			name: 'European Association for Local Democracy',
			image: 'https://www.alda-europe.eu/wp-content/uploads/2020/03/alda_logo2-01.svg',
			website: 'https://www.alda-europe.eu/',
		},
	]

	return (
		<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			{/*<p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">*/}
			{/*	{t('projectLedBy')}*/}
			{/*</p>*/}
			<div className="mt-6 grid sm:grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
				{organisations.map((partner) => (
					<a
						key={partner.name}
						href={partner.website}
						target="_blank"
						rel="noreferrer"
						className="block col-span-1 flex justify-center items-center py-8 px-8 bg-white"
					>
						<img
							className={partner.maxHeight || 'max-h-20'}
							src={partner.image}
							alt={partner.name}
						/>
						{/*<p>{partner.website}</p>*/}
					</a>
				))}
			</div>
		</div>
	)
}

export default function Organisations() {
	const t = useTranslations('pages.Organisations');

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
			bannerImage="/17547117_1115094925303458_1490815375177705789_o.jpeg"
		>
				<LeadingOrganisations />
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

