import SingleFeedItem from './SingleFeedItem'
import Title from '../Title'

export default function FeedListing ({timeline}) {
	return (
		<div className="flow-root">
			<ul role="list" className="-mb-8">
				{timeline.map((item, eventIdx) => (
					<li key={eventIdx}>
						<div className="relative pb-4">
							{
								eventIdx !== timeline.length - 1
									? <span className="absolute top-4 left-3 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
									: null
							}

							<SingleFeedItem item={item}>
								{item.title && (
									<Title tag="h4" className="">{item.title}</Title>
								)}
								{item.description && (
									<p className="mt-4 text-sm text-gray-700 list-disc">{item.description}</p>
								)}
							</SingleFeedItem>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
