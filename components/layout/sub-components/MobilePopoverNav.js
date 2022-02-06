import {Fragment} from 'react';
import {Popover, Transition} from '@headlessui/react';
import {XIcon} from '@heroicons/react/outline';
import {useRouter} from 'next/router';
import {useTranslations} from 'next-intl';
import LocaleSwitcher from '../../locale-switcher';

export default function MobilePopoverNav({listNavItems}) {
	const t = useTranslations('PageLayout');
	const {locale} = useRouter()

	return (
		<Transition
			as={Fragment}
			enter="duration-200 ease-out"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="duration-100 ease-in"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
				<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
					<div className="pt-5 pb-6 px-5">
						<div className="flex items-center justify-between">
							<div>
								<img
									className="h-10 w-auto"
									src={`/Logo-Sommet-Header-Web-${locale}.svg`}
									alt={t('siteTitle')}
								/>
							</div>

							<div>
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
									<span className="sr-only">Close menu</span>

									<XIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
					</div>

					<div className="py-6 px-5">
						<div className="grid grid-cols-1 gap-4">
							{listNavItems}

							<LocaleSwitcher />
						</div>
					</div>
				</div>
			</Popover.Panel>
		</Transition>
	)
}
