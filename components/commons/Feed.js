import {classNames} from '../../lib/helpers'

export const Feed = ({timeline}) => (
	<div className="flow-root">
		<ul role="list" className="-mb-8">
			{timeline.map((item, eventIdx) => (
				<li key={item.id}>
					<div className="relative pb-4">
						{eventIdx !== timeline.length - 1 ? (
							<span className="absolute top-4 left-3 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
						) : null}
						<div className="relative flex items-center space-x-2">
							<div>
                  <span
										className={classNames(
											item.iconBackground,
											'h-6 w-6 rounded-full flex items-center justify-center ring-4 ring-white'
										)}
									>
                    <item.icon className="h-4 w-4 text-white" aria-hidden="true" />
                  </span>
							</div>
							<div className="min-w-0 flex-1 flex justify-between space-x-4">
								<div>
									<p className="text-md text-gray-500">
										{item.content}{' '}
										<a href={item.href} className="font-medium text-gray-900">
											{item.target}
										</a>
									</p>
								</div>
								<div className="text-right text-sm whitespace-nowrap text-gray-500">
									<time dateTime={item.datetime}>{item.date}</time>
								</div>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	</div>
)
