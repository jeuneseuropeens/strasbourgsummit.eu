import {classNames} from '../../lib/helpers'
import SingleFeedItem from '../commons/feed/SingleFeedItem'
import Title from '../commons/Title'

import Link from 'next-translate-routes/link'
import {ClockIcon, LocationMarkerIcon, TranslateIcon} from '@heroicons/react/solid'
import {ArrowNarrowRightIcon} from '@heroicons/react/outline'

export default function EventPreview({event, umbrellas}) {
	const {title, startTime, endTime, location, links, excerpt, umbrellaId, language, organisers} = event

	const umbrella = umbrellas.find(item => item.id === umbrellaId)

	const dateItem = startTime ? {
		main: `${startTime}${endTime ? ` - ${endTime}` : ''}`,
		icon: ClockIcon,
		iconBackground: 'bg-primary-300',
	} : ''

	const locationItem = location ? {
		main: <Link href="/map">{location.main}</Link>,
		after: location.after,
		icon: LocationMarkerIcon,
		iconBackground: 'bg-primary-300',
	} : ''

	const languageItem = language ? {
		main: language,
		icon: TranslateIcon,
		iconBackground: 'bg-primary-300',
	} : ''

	return (
		<li className="col-span-1 bg-white rounded-lg shadow">
			{(umbrellaId && umbrella) && (
				<div className={classNames(
					'flex items-center justify-center font-medium rounded-t-md px-6 py-2',
					umbrella.bgColor,
					umbrella.textColor
				)}>
					{umbrella.title}
				</div>
			)}

			<div className="w-full p-6">
				<Title tag="h3">
					{title}
				</Title>

				{organisers && <p>
					{organisers.map(organiser => organiser).join(', ')}
				</p>}

				{(dateItem || locationItem || language) && (
					<div className="mt-4">
						{dateItem && <SingleFeedItem item={dateItem}/>}
						{locationItem && <SingleFeedItem item={locationItem}/>}
						{language && <SingleFeedItem item={languageItem}/>}
					</div>
				)}

				{excerpt &&
					<p className="leading-relaxed mt-4">{excerpt}</p>
				}

				{links &&
					<div className="mt-4">
						{links.map((link, index) => (
							<a key={index} href={link.href} className="relative flex items-center space-x-1 mt-1 first:mt-0">
								<ArrowNarrowRightIcon className="h-6 w-6 text-primary-300" aria-hidden="true" />
								<div>{link.title}</div>
							</a>
						))}
					</div>
				}
			</div>
		</li>
	)
}
