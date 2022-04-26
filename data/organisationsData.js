import Logo_AEDE from '../public/logos/Logo-AEDE.png'
import Logo_Afccre from '../public/logos/Logo-Afccre.jpg'
import Logo_ALDA from '../public/logos/Logo-ALDA.png'
import Logo_Amsed from '../public/logos/Logo-Amsed.png'
import Logo_Civico from '../public/logos/Logo-Civico.jpg'
import Logo_CSE from '../public/logos/Logo-CSE.png'
import Logo_CTOE from '../public/logos/Logo-CTOE.jpg'
import Logo_DRJUG from '../public/logos/Logo-DRJUG.webp'
import Logo_ECIT from '../public/logos/Logo-ECIT.webp'
import Logo_EELV_Alsace from '../public/logos/Logo-EELV-Alsace.jpg'
import Logo_EMI from '../public/logos/Logo-EMI.png'
import Logo_Euractiv from '../public/logos/Logo-Euractiv.png'
import Logo_Euradio from '../public/logos/Logo-Euradio.png'
import Logo_RCF from '../public/logos/Logo-RCF.webp'
import Logo_EuroAlter from '../public/logos/Logo-EuroAlter.png'
import Logo_European_Horizons from '../public/logos/Logo-European-Horizons.png'
import Logo_EU_Saar from '../public/logos/Logo-EU-Saar.png'
import Logo_EU_BW from '../public/logos/Logo-EU-BW.png'
import Logo_FFJ from '../public/logos/Logo-FFJ.png'
import Logo_FMD from '../public/logos/Logo-FMD.jpg'
import Logo_GFE from '../public/logos/Logo-GFE.png'
import Logo_GYLO from '../public/logos/Logo-GYLO.jpg'
import Logo_IYTT from '../public/logos/Logo-IYTT.png'
import Logo_JEF_Europe from '../public/logos/Logo-JEF-Europe.png'
import Logo_JEF_Deutschland from '../public/logos/Logo-JEF-Deutschland.png'
import Logo_JEF_Hamburg from '../public/logos/Logo-JEF-Hamburg.png'
import Logo_JEF_Madrid from '../public/logos/Logo-JEF-Madrid.png'
import Logo_JEF_Suisse from '../public/logos/Logo-JEF-Suisse.png'
import Logo_JEF_UK from '../public/logos/Logo-JEF-UK.png'
import Logo_JE_Strasbourg from '../public/logos/Logo-JE-Strasbourg.png'
import Logo_JE_France from '../public/logos/Logo-JE-France.png'
import Logo_ME_Alsace from '../public/logos/Logo-ME-Alsace.png'
import Logo_ME_France from '../public/logos/Logo-ME-France.png'
import Logo_ME_Nord from '../public/logos/Logo-ME-Nord.png'
import Logo_MESA from '../public/logos/Logo-MESA.jpg'
import Logo_ME_Suisse from '../public/logos/Logo-ME-Suisse.png'
import Logo_OJUEA from '../public/logos/Logo-OJUEA.png'
import Logo_Open_Diplomacy from '../public/logos/Logo-Open-Diplomacy.png'
import Logo_SEE_SWE from '../public/logos/Logo-SEE-SWE.png'
import Logo_SGD_Uganda from '../public/logos/Logo-SGD-Uganda.png'
import Logo_Spinelli_Group from '../public/logos/Logo-Spinelli-Group.png'
import Logo_Taurillon from '../public/logos/Logo-Taurillon.png'
import Logo_TNF from '../public/logos/Logo-TNF.png'
import Logo_UEF_France from '../public/logos/Logo-UEF.jpg'
import Logo_UEF from '../public/logos/Logo-UEF.jpg'
import Logo_VC from '../public/logos/Logo-VC.jpeg'
import Logo_VWB from '../public/logos/Logo-VWB.png'
import Logo_YDE from '../public/logos/Logo-YDE.png'
import Logo_YFJ from '../public/logos/Logo-YFJ.png'
import Logo_YWF from '../public/logos/Logo-YWF.png'

const organisations = [
	{
		name: 'Les Jeunes Européens - France',
		image: Logo_JE_France,
		website: 'https://www.jeunes-europeens.org/',
	},
	{
		name: 'Union of European Federalists',
		image: Logo_UEF_France,
		website: 'https://www.federalists.eu/',
		maxHeight: 'max-h-16',
	},
	{
		name: 'Mouvement Européen - International',
		image: Logo_EMI,
		website: 'https://europeanmovement.eu/',
	},
	{
		name: 'European Youth Forum',
		image: Logo_YFJ,
		website: 'https://www.youthforum.org/'
	},
	{
		name: 'Forum Français de la Jeunesse',
		image: Logo_FFJ,
		website: 'https://forumfrancaisjeunesse.fr/',
	},
	{
		name: 'European Association for Local Democracy',
		image: Logo_ALDA,
		website: 'https://www.alda-europe.eu/',
	},
	{
		name: 'Civil Society Europe',
		image: Logo_CSE,
		website: 'https://civilsocietyeurope.eu'
	},
	{
		name: 'Young European Federalists - JEF Europe',
		image: Logo_JEF_Europe,
		website: 'https://jef.eu/',
	},
	{
		name: 'Open Diplomacy',
		image: Logo_Open_Diplomacy,
		website: 'https://www.open-diplomacy.eu/',
	},
	{
		name: 'Junge Europäische Föderalisten (JEF) Deutschland',
		image: Logo_JEF_Deutschland,
		website: 'https://www.jef.de',
	},
	{
		name: 'Gioventù Federalista Europea (GFE)',
		image: Logo_GFE,
		website: 'https://giovanifederalisti.eu',
	},
	{
		name: 'Mouvement européen - Suisse',
		image: Logo_ME_Suisse,
		website: 'https://www.europa.ch/',
	},
	{
		name: 'Union des Fédéralistes Européens - France',
		image: Logo_UEF,
		website: 'https://www.uef.fr/',
		maxHeight: 'max-h-16',
	},
	{
		name: 'Voters without borders',
		image: Logo_VWB,
		website: 'https://voterswithoutborders.eu/homepage/',
	},
	{
		name: 'ECIT Foundation',
		image: Logo_ECIT,
		website: 'https://ecit-foundation.eu/',
	},
	{
		name: 'Europa-Union Saar',
		image: Logo_EU_Saar,
		website: 'https://www.eu-saar.de',
	},
	{
		name: 'Europa-Union Baden-Württemberg',
		image: Logo_EU_BW,
		website: 'https://eubw.eu/',
	},
	{
		name: 'AEDE France',
		image: Logo_AEDE,
		website: 'https://www.aede-france.org/',
	},
	{
		name: 'Mouvement Européen - Alsace',
		image: Logo_ME_Alsace,
		website: 'https://mouvement-europeen.eu/alsace/',
		maxHeight: 'max-h-24',
	},
	{
		name: 'Les Jeunes Européens - Strasbourg',
		image: Logo_JE_Strasbourg,
		website: 'https://www.jeunes-europeens.org/Les-Jeunes-Europeens-Strasbourg',
	},
	{
		name: 'Global Young Leaders Organization',
		image: Logo_GYLO,
		website: 'https://gylo.net/',
	},
	{
		name: 'Young European Movement UK',
		image: Logo_JEF_UK,
		website: 'https://1.yem.org.uk/',
	},
	{
		name: 'International Youth Think Tank',
		image: Logo_IYTT,
		website: 'https://iythinktank.com/'
	},
	{
		name: 'Organisation des jeunes pour l’Union européenne et africaine',
		image: Logo_OJUEA,
		website: 'https://jeunesueua.org/',
	},
	{
		name: 'JEF Berlin-Brandenburg',
		image: Logo_JEF_Deutschland,
		website: 'https://jef-bb.de/',
	},
	{
		name: 'Students for Global Democracy Uganda',
		image: Logo_SGD_Uganda,
		website: 'https://uganda.studentsforglobaldemocracy.org/home/',
	},
	{
		name: 'Young European Swiss',
		image: Logo_JEF_Suisse,
		website: 'https://www.y-e-s.ch/',
	},
	{
		name: 'German-Russian Youth Initiative DRJUG',
		image: Logo_DRJUG,
		website: 'https://www.drjug.org/',
	},
	{
		name: 'Young World Federalists',
		image: Logo_YWF,
		website: 'https://www.ywf.world/',
	},
	{
		name: 'Citizens take over Europe',
		image: Logo_CTOE,
		website: 'https://citizenstakeover.eu/fr/',
	},
	{
		name: 'EURACTIV',
		image: Logo_Euractiv,
		website: 'https://www.euractiv.com/',
	},
	{
		name: 'AMSED',
		image: Logo_Amsed,
		website: 'https://network.amsed.fr/',
	},
	{
		name: 'The Polish Forum of Young Diplomats',
		image: Logo_FMD,
		website: 'http://www.diplomacy.pl/',
	},
	{
		name: 'Europe Ecologie les Verts Alsace',
		image: Logo_EELV_Alsace,
		website: 'https://alsace.eelv.fr/',
	},
	{
		name: 'JEF Hamburg',
		image: Logo_JEF_Hamburg,
		website: 'https://www.jef-hamburg.de/',
	},
	{
		name: 'Solidarité Eau Europe - SEE',
		image: Logo_SEE_SWE,
		website: 'https://www.coalition-eau.org/ong-membres/solidarite-eau-europe/',
	},
	{
		name: 'CIVICO Europa',
		image: Logo_Civico,
		website: 'https://civico.eu/',
	},
	{
		name: 'Mouvement Européen - Nord',
		image: Logo_ME_Nord,
		website: 'https://mouvement-europeen.eu/nord/',
	},
	{
		name: 'JEF - Madrid',
		image: Logo_JEF_Madrid,
		website: 'https://www.jefmadrid.eu/',
	},
	{
		name: 'European Alternatives',
		image: Logo_EuroAlter,
		website: 'https://euroalter.com/',
	},
	{
		name: 'Mouvement Européen - France',
		image: Logo_ME_France,
		website: 'https://mouvement-europeen.eu/',
	},
	{
		name: 'The Spinelli Group',
		image: Logo_Spinelli_Group,
		website: 'https://thespinelligroup.eu/',
	},
	{
		name: 'European Horizons',
		image: Logo_European_Horizons,
		website: 'https://www.europeanhorizons.org/',
	},
	{
		name: 'AFCCRE',
		image: Logo_Afccre,
		website: 'http://afccre.org/',
	},
	{
		name: 'Via Charlemagne',
		image: Logo_VC,
		website: 'https://via-charlemagne.eu/',
	},
	{
		name: 'Maison de l’Europe Strasbourg-Alsace',
		image: Logo_MESA,
		website: 'https://www.mesa-strasbourg.eu/',
	},
	{
		name: 'Young Democrats for Europe',
		image: Logo_YDE,
		website: 'https://www.youngdemocrats.eu/',
	}
]

export {
	organisations,
	Logo_Euractiv,
	Logo_Taurillon,
	Logo_TNF,
	Logo_Euradio,
	Logo_RCF
}