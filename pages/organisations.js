import { useTranslations } from 'next-intl';
import TemplatePage from '../components/layout/TemplatePage';

function LeadingOrganisations() {
	const t = useTranslations('pages.Organisations');

	const organisations = [
		{
			name: 'Les Jeunes Européens - France',
			image: '/Logo-JE-France.png',
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
			image: '/Logo-JEF-Europe.png',
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
			maxHeight: 'max-h-16',
		},
		{
			name: 'Mouvement Européen - Alsace',
			image: 'https://mouvement-europeen.eu/wp-content/uploads/2018/02/Logo_ME-F_2016_Alsace_HD-700x356.png',
			website: 'https://mouvement-europeen.eu/alsace/',
			maxHeight: 'max-h-24',
		},
		{
			name: 'Les Jeunes Européens - Strasbourg',
			image: '/Logo-JE-Strasbourg.png',
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
			<div className="mt-6 grid sm:grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
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

