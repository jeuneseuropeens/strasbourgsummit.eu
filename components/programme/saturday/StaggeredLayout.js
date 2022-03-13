import {Feed} from '../../lib/feed/Feed'
import {classNames} from '../../../helpers'

export const StaggeredLayout = ({event}) => (
	<div className="group relative mt-24 first:mt-0">
		<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
			<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 group-even:lg:col-start-2">
				<div>
					{event.time && (
						<span className="inline-flex items-center px-4 py-1 rounded-md text-sm font-semibold tracking-wide bg-blue-100 text-blue-600">
							{event.time}
						</span>
					)}
				</div>
				<div className="mt-6">
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
						{event.title}
					</h2>
					<p className="mt-4 text-lg text-gray-500">
						{event.description}
					</p>
				</div>
				{event.timeline && (
					<div className="mt-6">
						<Feed timeline={event.timeline}/>
					</div>
				)}
			</div>
			<div className="mt-12 sm:mt-16 lg:mt-0 group-even:lg:col-start-1">
				<div className={classNames(
					'lg:px-0 lg:m-0 lg:relative lg:h-full',
					'group-even:pr-4 group-even:-ml-48 group-even:sm:pr-6 group-even:md:-ml-16',
					'group-odd:pl-4  group-odd:-mr-48  group-odd:sm:pl-6  group-odd:md:-mr-16'
				)}>
					<img
						className={classNames(
							'group-even:lg:right-0 group-odd:lg:left-0 w-full',
							'rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
						)}
						src={event.imageSrc}
						alt={event.imageAlt}
					/>
				</div>
			</div>
		</div>
	</div>
)
