import {classNames} from '../../../lib/helpers'

export default function SingleFeedItem({item}) {
	return (
		<div className={classNames(
			'relative flex items-top space-x-2',
			'mb-3 only-of-type:mb-0 last-of-type:mb-0'
		)}>
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
						{item.before}{' '}
						<a href={item.href} className="font-medium text-gray-900 whitespace-pre-line">
							{item.main}
						</a>
						{' '}{item.after}
					</p>
				</div>
				<div className="text-right text-sm whitespace-nowrap text-gray-500">
					<time dateTime={item.datetime}>{item.date}</time>
				</div>
			</div>
		</div>
	)
}
