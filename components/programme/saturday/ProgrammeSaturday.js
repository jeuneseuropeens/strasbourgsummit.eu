import {useTranslations} from 'next-intl'
import {ChatAlt2Icon, ChevronDoubleRightIcon, LocationMarkerIcon, SpeakerphoneIcon} from '@heroicons/react/solid'
import StaggeredElement from './StaggeredElement'
import SingleFeedItem from '../../commons/feed/SingleFeedItem'
import FeedListing from '../../commons/feed/FeedListing'

export default function ProgrammeSaturday () {
	const t = useTranslations('pages.Programme.events.saturday')

	return (
		<div className="relative pt-16 pb-32">
			<StaggeredElement
				title={t('convention.title')}
				description={t('convention.description')}
				imageSrc={'/aubette.jpg'}
			>
				<SingleFeedItem item={{
					main: t('convention.location.main'),
					icon: LocationMarkerIcon,
					href: '/map',
					iconBackground: 'bg-primary-400',
				}}/>

				<div className="mt-4">
					<SingleFeedItem item={{
						main: "09:00",
						after: " - 12:30",
						icon: ChatAlt2Icon,
						iconBackground: 'bg-primary-400',
					}}/>
					<p className="mt-2">{t('convention.part1')}</p>
				</div>

				<div className="mt-4">
					<SingleFeedItem item={{
						main: "14:30",
						after: " - 15:30",
						icon: SpeakerphoneIcon,
						iconBackground: 'bg-primary-400',
					}}/>
					<p className="mt-2">{t('convention.part2')}</p>
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
