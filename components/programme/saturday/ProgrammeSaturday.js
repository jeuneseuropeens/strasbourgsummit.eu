import {useTranslations} from 'next-intl'
import {ChevronDoubleRightIcon, LocationMarkerIcon} from '@heroicons/react/solid'
import StaggeredElement from './StaggeredElement'

export default function ProgrammeSaturday () {
	const t = useTranslations('pages.Programme.events.saturday')

	const events = [
		{
			time: t('convention.time'),
			title: t('convention.title'),
			description: t('convention.description'),
			imageSrc:'/aubette.jpg',
			// timeline: [
			// 	{
			// 		content: t('convention.timeline.location.content'),
			// 		target: t('convention.timeline.location.target'),
			// 		icon: LocationMarkerIcon,
			// 		iconBackground: 'bg-primary-400',
			// 	},
			// ],
		},
		{
			time: t('march.time'),
			title: t('march.title'),
			description: t('march.description'),
			imageSrc:'/marche.jpg',
			timeline: [
				{
					before: t('march.timeline.location.content'),
					main: t('march.timeline.location.target'),
					icon: LocationMarkerIcon,
					iconBackground: 'bg-primary-400',
				},
				{
					before: t('march.timeline.destination.content'),
					main: t('march.timeline.destination.target'),
					icon: ChevronDoubleRightIcon,
					iconBackground: 'bg-primary-300',
				},
			],
		},
	]

	return (
		<div className="relative pt-16 pb-32">
			{events.map((event, index) => (
				<StaggeredElement
					key={index}
					event={event}
				/>
			))}
		</div>
	)
}
