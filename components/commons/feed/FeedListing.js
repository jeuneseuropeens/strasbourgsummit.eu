import SingleFeedItem from './SingleFeedItem'

export const FeedListing = ({timeline}) => (
	<div className="flow-root">
		<ul role="list" className="-mb-8">
			{timeline.map((item, eventIdx) => (
				<li key={item.id}>
					<div className="relative pb-4">
						{
							eventIdx !== timeline.length - 1
								? <span className="absolute top-4 left-3 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
								: null
						}

						<SingleFeedItem item={item}/>
					</div>
				</li>
			))}
		</ul>
	</div>
)
