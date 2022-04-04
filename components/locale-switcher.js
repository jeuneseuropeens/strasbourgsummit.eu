import Link from 'next-translate-routes/link'
import {useRouter} from 'next/router'
import {classNames} from '../lib/helpers'

export default function LocaleSwitcher() {
	const {locale, locales, route} = useRouter()

	const siteLocales = locales?.filter((cur) => cur !== 'default')

	return (
		<div className="relative bg-gray-100 rounded-lg p-0.5 flex self-center uppercase mr-auto">
			{siteLocales.map((loc, index) => {
				if (loc !== locale) {
					return (
						<Link
							key={index}
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

				// Current locale
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
	)
}
