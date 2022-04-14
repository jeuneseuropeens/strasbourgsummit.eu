import {useTranslations} from 'next-intl'
import TemplatePage from '../components/layout/TemplatePage'
import Title from '../components/commons/Title'
import {useRouter} from 'next/router'

function LeadingOrganisations() {
	const organisations = [
		{
			name: 'Les Jeunes Européens - France',
			image: '/Logo-JE-France.png',
			website: 'https://www.jeunes-europeens.org/',
		},
		{
			name: 'Union of European Federalists',
			image: 'https://www.uef.fr/IMG/siteon0.jpg?1458078215',
			website: 'https://www.federalists.eu/',
			maxHeight: 'max-h-16',
		},
		{
			name: 'Mouvement Européen - International',
			image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Logo_EMI.svg/1200px-Logo_EMI.svg.png',
			website: 'https://europeanmovement.eu/',
		},
		{
			name: 'European Youth Forum',
			image: '/YFJ-logo-blue-regular.png',
			website: 'https://www.youthforum.org/'
		},
		{
			name: 'Forum Français de la Jeunesse',
			image: 'https://forumfrancaisjeunesse.fr/wp-content/themes/ffj_v2/images/logo.png',
			website: 'https://forumfrancaisjeunesse.fr/',
		},
		{
			name: 'European Association for Local Democracy',
			image: 'https://www.alda-europe.eu/wp-content/uploads/2020/03/alda_logo2-01.svg',
			website: 'https://www.alda-europe.eu/',
		},
		{
			name: 'Civil Society Europe',
			image: 'https://civilsocietyeurope.eu/wp-content/uploads/2019/02/Logo-transparent.png',
			website: 'https://civilsocietyeurope.eu'
		},
		{
			name: 'Young European Federalists - JEF Europe',
			image: '/Logo-JEF-Europe.png',
			website: 'https://jef.eu/',
		},
		{
			name: 'Open Diplomacy',
			// image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/45336/334405_19155.png',
			image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Logo_Open_Diplomacy.png/320px-Logo_Open_Diplomacy.png',
			website: 'https://www.open-diplomacy.eu/',
		},
		{
			name: 'Junge Europäische Föderalisten (JEF) Deutschland',
			image: 'https://www.jef.de/wp-content/uploads/sites/4/2020/04/Logo_RGBBV.png',
			website: 'https://www.jef.de',
		},
		{
			name: 'Gioventù Federalista Europea (GFE)',
			image: 'https://giovanifederalisti.eu/wp-content/uploads/2020/03/GFE-Logo-w512.png',
			website: 'https://giovanifederalisti.eu',
		},
		{
			name: 'Mouvement européen - Suisse',
			image: 'https://www.europa.ch/wp-content/uploads/2021/06/nebs_logo_2021_500.png',
			website: 'https://www.europa.ch/',
		},
		{
			name: 'Union des Fédéralistes Européens - France',
			image: 'https://www.uef.fr/IMG/siteon0.jpg?1458078215',
			website: 'https://www.uef.fr/',
			maxHeight: 'max-h-16',
		},
		{
			name: 'Voters without borders',
			image: 'https://secureservercdn.net/160.153.137.218/z5q.040.myftpupload.com/wp-content/uploads/2021/01/VWB-logo.png',
			website: 'https://voterswithoutborders.eu/homepage/',
		},
		{
			name: 'ECIT Foundation',
			image: 'https://img1.wsimg.com/isteam/ip/bb9b9a10-e672-4695-8ddf-228b109f0aec/ECIT%20full%20logo_Transparent%20BG_Extra%20Large.png/:/rs=h:141,cg:true,m/qt=q:95',
			website: 'https://ecit-foundation.eu/',
		},
		{
			name: 'Europa-Union Saar',
			image: '/eu-saar.svg',
			website: 'https://www.eu-saar.de',
		},
		{
			name: 'Europa-Union Baden-Württemberg',
			image: 'https://scontent.fcdg2-1.fna.fbcdn.net/v/t1.6435-9/104099809_3052845964793228_1788247787225404219_n.png?_nc_cat=106&ccb=1-5&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=gA64AyXTPA4AX9ID9l7&tn=3O8MUq65fTGnEE3d&_nc_ht=scontent.fcdg2-1.fna&oh=00_AT-1i4tpkpgubhCbZZO-i04B1x3OP5O9JlcLW8pEPp5-2w&oe=626B85D2',
			website: 'https://eubw.eu/',
		},
		{
			name: 'AEDE France',
			image: 'https://www.stemcoalition.eu/sites/default/files/logo_AEDE_bleu-jaune.png',
			website: 'https://www.aede-france.org/',
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
			name: 'Global Young Leaders Organization',
			image: 'https://gylo.net/wp-content/uploads/2020/03/gylo.jpg',
			website: 'https://gylo.net/',
		},
		{
			name: 'Young European Movement UK',
			image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/YEM_UK_logo.png',
			website: 'https://1.yem.org.uk/',
		},
		{
			name: 'International Youth Think Tank',
			image: 'https://iythinktank.com/wp-content/uploads/2019/03/Logotyp_IYTT_Web.svg',
			website: 'https://iythinktank.com/'
		},
		{
			name: 'Organisation des jeunes pour l’Union européenne et africaine',
			image: 'https://jeunesueua.org/wp-content/uploads/2019/02/ojuea-police-1-900x366.png',
			website: 'https://jeunesueua.org/',
		},
		{
			name: 'JEF Berlin-Brandenburg',
			image: 'https://www.jef.de/wp-content/uploads/sites/4/2020/04/Logo_RGBBV.png',
			website: 'https://jef-bb.de/',
		},
		{
			name: 'Students for Global Democracy Uganda',
			image: 'https://uganda.studentsforglobaldemocracy.org/wp-content/uploads/elementor/thumbs/sgd-L1-p7arx32gmi4f5oeyqhj7v49y001cncfd9yd3mfn9ms.png',
			website: 'https://uganda.studentsforglobaldemocracy.org/home/',
		},
		{
			name: 'Young European Swiss',
			image: 'https://www.y-e-s.ch/wp-content/uploads/2021/06/yes-logo.png',
			website: 'https://www.y-e-s.ch/',
		},
		{
			name: 'German-Russian Youth Initiative DRJUG',
			image: 'https://static.wixstatic.com/media/a8859a_4dca50ba0f254c9aae0552fc53d282bb~mv2.png/v1/fill/w_180,h_180,al_c,usm_0.66_1.00_0.01,enc_auto/Logo%20DRJUG_only%20circle.png',
			website: 'https://www.drjug.org/',
		},
		{
			name: 'Young World Federalists',
			image: 'https://static.wixstatic.com/media/ab46f5_5b3238ded2c94e60a09472cc1c38d199~mv2.png/v1/fill/w_1200,h_630,al_c/ab46f5_5b3238ded2c94e60a09472cc1c38d199~mv2.png',
			website: 'https://www.ywf.world/',
		},
		{
			name: 'Citizens take over Europe',
			image: 'https://www.aegee.org/wp-content/uploads/Logo_CTOE.jpg',
			website: 'https://citizenstakeover.eu/fr/',
		},
		{
			name: 'Euractiv',
			image: 'https://www.euractiv.fr/wp-content/themes/euractiv/media/frontend/branding/logo_print.png',
			website: 'https://www.euractiv.com/',
		},
		{
			name: 'European Alternatives',
			image: 'https://euroalter.com/wp-content/themes/euroalter-astra-child/assets/images/svg/logo-red.svg',
			website: 'https://euroalter.com/',
		}
	]

	return (
		<div className="mt-6 grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:mt-8">
			{organisations.map((partner, index) => (
				<a
					key={index}
					href={partner.website}
					target="_blank"
					rel="noreferrer"
					className="transition duration-500 block col-span-1 flex flex-col justify-center items-center p-4 bg-white rounded-lg drop-shadow-none hover:drop-shadow-lg sm:p-6 md:p-8"
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
	)
}

function MediaPartners() {
	const t = useTranslations('pages.Organisations')
	const {locale} = useRouter()

	const medias = [
		locale === 'fr' ? {
			name: 'Le Taurillon',
			image: '/Logo-Taurillon.png',
			website: 'https://www.taurillon.org/',
		} : {
			name: 'The New Federalist',
			image: '/Logo-TNF.svg',
			website: 'https://www.thenewfederalist.eu/',
		},
		{
			name: 'Euractiv',
			image: 'https://www.euractiv.fr/wp-content/themes/euractiv/media/frontend/branding/logo_print.png',
			website: 'https://www.euractiv.com/',
		}
	]

	return (
		<div className="mt-10 lg:mt-12">
			<Title tag="h2" className="text-center mb-6">{t('medias')}</Title>

			<div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
				{medias.map((partner, index) => (
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
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<LeadingOrganisations />

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

