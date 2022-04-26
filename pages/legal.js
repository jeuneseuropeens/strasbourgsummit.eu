import {useTranslations} from 'next-intl'
import TemplateBase from '../components/layout/TemplateBase'
import BackgroundDots from '../components/commons/BackgroundDots'

export default function Legal() {
	const t = useTranslations('pages.TakePart')

	return (
		<TemplateBase
			title={t('title')}
			description={t('description')}
		>
			<div className="relative py-16 overflow-hidden">
				<BackgroundDots/>

				<div className="relative px-4 sm:px-6 lg:px-8">
					<div className="mt-6 prose prose-blue text-gray-500 mx-auto">
						<h1 className="text-center">Mentions légales</h1>

						<h2>Éditeur et directeur de publication</h2>

						<p>
							Ce site est édité par l’association loi 1901 Les Jeunes Européens-France et publié sous la direction d’Antoine Chabal, son Président.
						</p>
						<p>
							Les Jeunes Européens - France
							<br/>Arsenal 6
							<br/>76bis rue de Rennes
							<br/>75006 Paris, France
						</p>
						<p>
							SIRET : 419 387 469 00044
							<br/>SIREN : 419 387 469
						</p>
						<p>
							Téléphone : +33 9 72 23 05 83
							<br/>Courriel : contact@jeunes-europeens.org
						</p>

						<h2>Conception et gestion du site</h2>

						<p>
							Ce site est conçu et géré par l’équipe du projet The Strasbourg Summit / Le Sommet de Strasbourg :
							<ul>
								<li>Conception et développement : Loris Birkemeyer</li>
								<li>Direction artistique : Tristan Boursico</li>
								<li>Plaidoyer : Marie Trélat</li>
							</ul>
						</p>

						<p>Courriel : <a href="mailto:info@strasbourgsummit.eu">info@strasbourgsummit.eu</a></p>

						{/*<h2>Code source du site</h2>*/}

						{/*<h2>Propriété intellectuelle et liens</h2>*/}

						<h2>Contenus et droits de reproduction</h2>
						<p>
							En application des articles L. 111-1 et L. 123-1 du Code de la Propriété Intellectuelle, l’ensemble des contenus de ce site (textes, images, vidéos et tout média en général), sauf mention contraire explicite, est protégé par le droit d’auteur. La reproduction, même partielle, des contenus des pages de ce site sans accord préalable de l’Association loi 1901 Les Jeunes Européens-France est strictement interdite.
							<br/>© Copyright 1992-2022 Les Jeunes Européens-France | Tous droits réservés.
						</p>

						<h3>Demande d’autorisation de reproduction du logo</h3>
						<p>Si, dans le cadre d’une communication liée au Sommet de Strasbourg, vous avez besoin d’utiliser le logotype du projet pour tous supports internes et externes (brochures, publications, sites, etc.), merci d’envoyer votre demande à l’adresse suivante : <a href="mailto:info@strasbourgsummit.eu">info@strasbourgsummit.eu</a></p>


						<h2>Hébergement</h2>

						<p>
							Netlify Inc.
							<br/>2325 3rd Street, Suite 215
							<br/>San Francisco, California 94107
							<br/>États-Unis d’Amérique
							<br/>+1 844-899-7312
						</p>

						<h2>Collecte et traitement de données personnelles</h2>

						<p>
							<strong>Les informations recueillies par Les Jeunes Européens-France ne sont jamais revendues ni communiquées à des tiers.</strong>
							<br/>Sauf cas particulier, ces informations proviennent de l’enregistrement volontaire d’une adresse courriel fournie par l’internaute, lui permettant de recevoir une documentation ou une newsletter, de demander son inscription à un événement ou de se renseigner sur un point quelconque.
						</p>

						<p>
							En application de la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, l’internaute dispose d’un droit d’accès, de rectification et de suppression des informations personnelles le concernant stockées par Les Jeunes Européens - France, qu’il peut exercer à tout moment en adressant un courrier à l’Association loi 1901 Les Jeunes Européens-France ou en envoyant un e-mail à <a
							href="mailto:info@strasbourgsummit.eu">info@strasbourgsummit.eu</a>.
						</p>

						<h3>Prestataires</h3>

						<h4>Formulaires</h4>
						<p>
							Tally, Muidepoort 19A, 9000 Gand (Belgique)
							<br/>Politique de confidentialité : <a href="https://tally.so/help/privacy-policy" target="_blank" rel="noreferrer">https://tally.so/help/privacy-policy</a>
						</p>

						<h4>Newsletter</h4>
						<p>
							Sendinblue, 7 rue de Madrid, 75008 Paris
							<br/>Politique de confidentialité : <a href="https://fr.sendinblue.com/legal/privacypolicy/" target="_blank" rel="noreferrer">https://fr.sendinblue.com/legal/privacypolicy/</a>
						</p>

						<h4>Automatisation</h4>
						<p>
							Zapier, Inc., 548 Market St. #62411, San Francisco, California 94104, États-Unis d’Amérique - Politique de confidentialité : <a href="https://zapier.com/privacy" target="_blank" rel="noreferrer">https://zapier.com/privacy</a>
						</p>
					</div>
				</div>
			</div>

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

