import {classNames} from '../../../lib/helpers'
import {Badge} from '../../commons/Badge'
import Title from '../../commons/Title'

export default function StaggeredElement ({time, title, description, imageSrc, imageAlt, timeline, children}) {
	return (
		<div className="group relative mt-24 lg:mt-0 first:mt-0">
			<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
				<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 group-even:lg:col-start-2">
					{time && (
						<Badge>{time}</Badge>
					)}

					<div className="mt-6">
						<Title tag='h2' extrabold>
							{title}
						</Title>

						<p className="mt-4 text-lg text-gray-500 whitespace-pre-line">
							{description}
						</p>
					</div>

					<div className="mt-6">{children}</div>
				</div>

				<div className="mt-12 sm:mt-16 lg:mt-0 group-even:lg:col-start-1">
					<div className={classNames(
						'max-h-[32rem]',
						'lg:px-0 lg:m-0 lg:relative lg:h-full',
						'group-even:pr-4 group-even:-ml-48 group-even:sm:pr-6 group-even:md:-ml-16',
						'group-odd:pl-4  group-odd:-mr-48  group-odd:sm:pl-6  group-odd:md:-mr-16'
					)}>
						<img
							className={classNames(
								'group-even:lg:right-0 group-odd:lg:left-0 w-full',
								'rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
							)}
							src={imageSrc}
							alt={imageAlt}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
