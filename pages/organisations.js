import {useTranslations} from 'next-intl'
import TemplatePage from '../components/layout/TemplatePage'

function LeadingOrganisations() {
	const t = useTranslations('pages.Organisations')

	const organisations = [
		{
			name: 'Les Jeunes Européens - France',
			image: '/Logo-JE-France.png',
			website: 'https://www.jeunes-europeens.org/',
		},
		{
			name: 'Union des Fédéralistes Européens - France',
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
		{
			name: 'European Youth Forum',
			image: '/YFJ-logo-blue-regular.png',
			website: 'https://www.youthforum.org/'
		},
		{
			name: 'Civil Society Europe',
			image: 'https://civilsocietyeurope.eu/wp-content/uploads/2019/02/Logo-transparent.png',
			website: 'https://civilsocietyeurope.eu'
		},
		{
			name: 'Junge Europäische Föderalisten (JEF) Deutschland',
			image: 'https://www.jef.de/wp-content/uploads/sites/4/2020/04/Logo_RGBBV.png',
			website: 'https://www.jef.de'
		},
		{
			name: 'Gioventù Federalista Europea (GFE)',
			image: 'https://giovanifederalisti.eu/wp-content/uploads/2020/03/GFE-Logo-w512.png',
			website: 'https://giovanifederalisti.eu'
		},
		{
			name: 'Europa-Union Saar',
			image: '/eu-saar.svg',
			website: 'https://www.eu-saar.de'
		},
		{
			name: 'Europa-Union Baden-Württemberg',
			image: 'https://scontent.fcdg2-1.fna.fbcdn.net/v/t1.6435-9/104099809_3052845964793228_1788247787225404219_n.png?_nc_cat=106&ccb=1-5&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=gA64AyXTPA4AX9ID9l7&tn=3O8MUq65fTGnEE3d&_nc_ht=scontent.fcdg2-1.fna&oh=00_AT-1i4tpkpgubhCbZZO-i04B1x3OP5O9JlcLW8pEPp5-2w&oe=626B85D2',
			website: 'https://eubw.eu/'
		}
	]

	return (
		<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			{/*<p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">*/}
			{/*	{t('projectLedBy')}*/}
			{/*</p>*/}
			<div className="mt-6 grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:mt-8">
				{organisations.map((partner, index) => (
					<a
						key={index}
						href={partner.website}
						target="_blank"
						rel="noreferrer"
						className="transition duration-500 block col-span-1 flex flex-col justify-center items-center p-8 bg-white rounded-lg drop-shadow-none hover:drop-shadow-lg"
					>
						<img
							className={partner.maxHeight || 'max-h-20'}
							src={partner.image}
							alt={partner.name}
						/>
						<p className="text-center mt-2 text-gray-600">{partner.name}</p>
					</a>
				))}
			</div>
		</div>
	)
}

export default function Organisations() {
	const t = useTranslations('pages.Organisations')

	return (
		<TemplatePage
			title={t('title')}
			description={t('description')}
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
	}
}

