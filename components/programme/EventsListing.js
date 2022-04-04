import EventPreview from './EventPreview'
import ErrorBoundary from '../commons/ErrorBoundary'

export default function EventsListing({ events, umbrellas }) {
	return (
		<ErrorBoundary>
			<section>
				<ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 pt-16 pb-32">
					{events.map((event, index) => event.title && (
						<EventPreview
							key={index}
							event={event}
							umbrellas={umbrellas}
						/>
					))}
				</ul>
			</section>
		</ErrorBoundary>
	)
}
