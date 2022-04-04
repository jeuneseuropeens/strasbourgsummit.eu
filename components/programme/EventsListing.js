import EventPreview from './EventPreview'

export default function EventsListing({ events, umbrellas }) {
	return (
		<section>
			<ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 pt-16 pb-32">
				{events.map((event) => event.title && (
					<EventPreview
						key={event.slug}
						event={event}
						umbrellas={umbrellas}
					/>
				))}
			</ul>
		</section>
	)
}
