import {useTranslations} from 'next-intl';
import {Popover} from '@headlessui/react';
import {useRouter} from 'next/router';

import MobilePopoverNav from './sub-components/MobilePopoverNav';
import {Burger, NavigationLogo, NavigationMenu, NavItem} from './sub-components/header-sub-components';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Header() {
	const t = useTranslations('menu')
	const {locale} = useRouter()
	const pathTranslations = process.env.pathTranslations

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
	]

	const listNavItems = menuItems.map((item) => {
		const href = pathTranslations.find(el => el.en === item.slug)
			? pathTranslations.find(el => el.en === item.slug)[locale]
			: item.slug

		return <NavItem key={item.title} href={href}>{item.title}</NavItem>
	})

	const {route} = useRouter()

	return (
		<div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 bg-white">
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
	};
}
