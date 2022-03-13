import {useTranslations} from 'next-intl'
import Link from 'next-translate-routes/link'
import {Popover} from '@headlessui/react'
import {MenuIcon} from '@heroicons/react/outline'
import {useRouter} from 'next/router'

import LocaleSwitcher from '../../locale-switcher'
import {classNames} from '../../../helpers'

function NavigationLogo() {
	const t = useTranslations('PageLayout')
	const {locale} = useRouter()

	return (
		<div className="flex justify-start lg:w-0 lg:flex-1">
			<Link href={'/'}>
				<a>
					<span className="sr-only">{t('siteTitle')}</span>
					<img
						className="h-12 w-auto sm:h-14"
						src={`/Logo-Sommet-Header-Web-${locale}.svg`}
						alt=""
					/>
				</a>
			</Link>
		</div>
	)
}

function Burger() {
	const t = useTranslations('PageLayout')

	return (
		<div className="-mr-2 -my-2 md:hidden">
			<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center mr-2 justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
				<span className="sr-only">{t('openMenu')}</span>
				<MenuIcon className="h-6 w-6" aria-hidden="true" />
			</Popover.Button>
		</div>
	)
}

function NavigationMenu({listNavItems}) {
	return (
		<Popover.Group as="nav" className="hidden md:flex space-x-10 items-center">
			{listNavItems}

			<LocaleSwitcher />
		</Popover.Group>
	)
}

function NavItem({children, href, linkClass}) {
	return (
		<Link
			key={href}
			href={href}
		>
			<a
				className={classNames(
					(linkClass || 'text-gray-600 hover:text-gray-800'),
					'text-base'
				)}
			>
				{children}
			</a>
		</Link>
	)
}

export {
	NavigationLogo,
	Burger,
	NavigationMenu,
	NavItem
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../../../i18n/${locale}.json`)).default
		}
	}
}
