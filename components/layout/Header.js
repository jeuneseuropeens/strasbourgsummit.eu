import {useTranslations} from 'next-intl'
import {Popover} from '@headlessui/react'
import {useRouter} from 'next/router'

import MobilePopoverNav from './sub-components/MobilePopoverNav'
import {Burger, NavigationLogo, NavigationMenu, NavItem} from './sub-components/header-sub-components'

export default function Header() {
	const t = useTranslations('menu.header')

	const menuItems = [
		{
			title: t('programme'),
			slug: 'programme'
		},
		{
			title: t('organisations'),
			slug: 'organisations'
		},
		{
			title: t('takePart'),
			slug: 'take-part'
		},
		{
			title: t('map'),
			slug: 'map'
		},
	]

	const listNavItems = menuItems.map((item, index) => {
		return <NavItem key={index} href={item.slug}>{item.title}</NavItem>
	})

	const {route} = useRouter()

	return (
		<div className="relative z-50 mx-auto px-4 sm:px-6 lg:px-8 bg-white">
			<Popover as={'div'} className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center py-6 md:space-x-10 items-center">
					<NavigationLogo/>

					<Burger/>

					<NavigationMenu
						listNavItems={listNavItems}
						linkClass={route !== '/' ? 'text-gray-500 hover:text-gray-700' : 'text-white'}
					/>
				</div>

				<MobilePopoverNav listNavItems={listNavItems} linkClass={'text-gray-900 hover:text-gray-700'} />
			</Popover>
		</div>
	)
}

export async function getStaticProps({locale}) {
	return {
		props: {
			messages: (await import(`../../i18n/${locale}.json`)).default
		}
	}
}
