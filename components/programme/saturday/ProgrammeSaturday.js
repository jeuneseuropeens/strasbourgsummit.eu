import {useTranslations} from 'next-intl'
import {ChevronDoubleRightIcon, LocationMarkerIcon} from '@heroicons/react/solid'
import {StaggeredLayout} from './StaggeredLayout'

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
			// 		id: 1,
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
			imageSrc:'/DSC_0388-001.JPG',
			timeline: [
				{
					id: 1,
					content: t('march.timeline.location.content'),
					target: t('march.timeline.location.target'),
					icon: LocationMarkerIcon,
					iconBackground: 'bg-primary-400',
				},
				{
					id: 2,
					content: t('march.timeline.destination.content'),
					target: t('march.timeline.destination.target'),
					icon: ChevronDoubleRightIcon,
					iconBackground: 'bg-primary-300',
				},
			],
		},
	]

	return (
		<div className="relative pt-16 pb-32">
			{events.map(event => (
				<StaggeredLayout
					key={event.title}
					event={event}
				/>
			))}
		</div>
	)
}