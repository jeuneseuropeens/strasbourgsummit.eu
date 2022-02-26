import Link from 'next-translate-routes/link'
import {useRouter} from 'next/router'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function LocaleSwitcher() {
	const {locale, locales, route} = useRouter();
	// const otherLocale = locales?.find((cur) => cur !== locale);
	const otherLocales = locales?.filter((cur) => cur !== locale && cur !== 'default');

	// console.log(pathTranslations)
	// console.log(route.slice(1))
	//
	// const translatedPath = pathTranslations.find(el => el.en === route.slice(1))
	// console.log('translatedPath : ', translatedPath)
	//
	// const listLocales = otherLocales.map((localeId) => {
	// 	return (
	// 		<li key={localeId}>
	// 			<Link
	// 				href={
	// 					!translatedPath
	// 						? route
	// 						: translatedPath[localeId]
	// 				}
	// 				locale={localeId}
	// 			>
	// 				<a>{t('switchLocale', {locale: localeId})}</a>
	// 			</Link>
	// 		</li>
	// 	)
	// });

	// const listLocales = otherLocales.map((localeId) => {
	// 	return (
	// 		<li key={localeId}>
	// 			<Link
	// 				href={route}
	// 				locale={localeId}
	// 			>
	// 				<a>{t('switchLocale', {locale: localeId})}</a>
	// 			</Link>
	// 		</li>
	// 	)
	// });

	const siteLocales = locales?.filter((cur) => cur !== 'default')

	return (
		<div className="relative bg-gray-100 rounded-lg p-0.5 flex self-center uppercase mr-auto">
			{siteLocales.map((loc) => {
				if (loc !== locale) {
					return (
						<Link
							key={loc}
							href={route}
							locale={loc}
						>
							<a
								className={classNames(
									'text-gray-500 hover:text-gray-700',
									'px-3 py-2 font-medium text-sm rounded-md'
								)}
							>
								{loc}
							</a>
						</Link>
					)
				}

				return (
					<div
						className={classNames(
							'bg-secondary-400 text-primary-700',
							'px-3 py-2 font-medium text-sm rounded-md'
						)}
						key={loc}
					>
						{loc}
					</div>
				)
			})}
		</div>
	);
}
