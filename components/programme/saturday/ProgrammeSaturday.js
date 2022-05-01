import {useTranslations} from 'next-intl'
import {
	BadgeCheckIcon,
	ChatAlt2Icon,
	ChevronDoubleRightIcon,
	CubeTransparentIcon,
	LocationMarkerIcon,
	MicrophoneIcon,
	StarIcon
} from '@heroicons/react/solid'
import StaggeredElement from './StaggeredElement'
import SingleFeedItem from '../../commons/feed/SingleFeedItem'
import FeedListing from '../../commons/feed/FeedListing'
import {richTextConfig} from '../../../lib/constants'

export default function ProgrammeSaturday () {
	const t = useTranslations('pages.Programme.events.saturday')

	const conventionTimeline = [
		{
			main: "09:30",
			icon: BadgeCheckIcon,
			iconBackground: 'bg-primary-400',
			title: t('convention.welcome'),
		},
		{
			main: "10:00",
			icon: MicrophoneIcon,
			iconBackground: 'bg-primary-300',
			title: t('convention.opening'),
		},
		{
			main: "10:10",
			after: "- 11:00",
			icon: ChatAlt2Icon,
			iconBackground: 'bg-primary-300',
			title: t('convention.roundtable1.title'),
			description: t.rich('convention.roundtable1.description', richTextConfig),
		},
		{
			main: "11:20",
			after: "- 12:20",
			icon: ChatAlt2Icon,
			iconBackground: 'bg-primary-300',
			title: t('convention.roundtable2.title'),
			description: t.rich('convention.roundtable2.description', richTextConfig),
		},
		{
			main: "13:00",
			after: "- 14:15",
			icon: CubeTransparentIcon,
			iconBackground: 'bg-primary-300',
			title: t('convention.lunch.title'),
			description: t.rich('convention.lunch.description', richTextConfig),
		},
		{
			main: "14:30",
			after: "- 15:30",
			icon: StarIcon,
			iconBackground: 'bg-primary-300',
			title: t('convention.adoption.title'),
		},
	]

	return (
		<div className="relative pt-16 pb-32">
			<StaggeredElement
				title={t('convention.title')}
				description={t('convention.description')}
				imageSrc={'/aubette.jpg'}
			>
				<SingleFeedItem item={{
					main: t('convention.location.main'),
					after: t('convention.location.after'),
					icon: LocationMarkerIcon,
					href: '/map',
					iconBackground: 'bg-primary-400',
				}}/>

				<div className="mt-4">
					<FeedListing timeline={conventionTimeline}/>
				</div>
			</StaggeredElement>

			<StaggeredElement
				title={t('march.title')}
				description={t('march.description')}
				imageSrc={'/marche.jpg'}
			>
				<FeedListing timeline={[
					{
						before: t('march.timeline.location.before'),
						main: t('march.timeline.location.main'),
						icon: LocationMarkerIcon,
						iconBackground: 'bg-primary-400',
					},
					{
						before: t('march.timeline.destination.before'),
						main: t('march.timeline.destination.main'),
						icon: ChevronDoubleRightIcon,
						iconBackground: 'bg-primary-300',
					}
				]}/>
			</StaggeredElement>
		</div>
	)
}
