import {useTranslations} from 'next-intl'
import Link from 'next-translate-routes/link'

export default function FooterMenu() {
	const t = useTranslations('menu.footer')

	const FacebookIcon = (props) => (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path
				fillRule="evenodd"
				d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
				clipRule="evenodd"
			/>
		</svg>
	)

	const TwitterIcon = (props) => (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
		</svg>
	)

	const LinkedinIcon = (props) => (
		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
		</svg>
	)

	const navigation = {
		main: [
			{ name: t('contact'), href: 'mailto:info@strasbourgsummit.eu' },
			{ name: t('legal'), href: '/legal' },
			{ name: t('press'), href: 'mailto:info@strasbourgsummit.eu' },
		],
		social: [
			{
				name: t('facebook'),
				href: 'https://fb.me/e/67fOvce2i',
				icon: FacebookIcon,
			},
			{
				name: t('twitter'),
				href: 'https://twitter.com/StrasSummit',
				icon: TwitterIcon,
			},
			{
				name: t('linkedin'),
				href: 'https://www.linkedin.com/events/sommetdestrasbourg6896487470691610626/',
				icon: LinkedinIcon,
			}
		],
	}

	return (
		<div className="mt-12 border-t border-gray-200 pt-8 max-w-7xl mx-auto pt-12 px-4 overflow-hidden sm:px-6 lg:px-8">
			<nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
				{navigation.main.map((item, index) => (
					<div key={index} className="px-5 py-2">
						<Link href={item.href}>
							<a className="text-base text-gray-500 hover:text-gray-900">
								{item.name}
							</a>
						</Link>
					</div>
				))}
			</nav>

			<div className="mt-8 flex justify-center space-x-6">
				{navigation.social.map((item, index) => (
					<a
						key={index}
						href={item.href}
						className="text-gray-400 hover:text-gray-500"
						title={item.name} target="blank"
					>
						<span className="sr-only">
							{item.name}
						</span>
						<item.icon className="h-6 w-6" aria-hidden="true" />
					</a>
				))}
			</div>
		</div>
	)
}
