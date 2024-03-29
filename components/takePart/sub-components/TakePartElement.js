import Title from '../../commons/Title'
import Button from '../../commons/Button'
import TakePartFaq from './TakePartFaq'
import {classNames} from '../../../lib/helpers'

export default function TakePartElement({data}) {
	const {title, description, actions, faqs, full} = data

	return (
		<div className="px-4 max-w-xl mx-auto py-10 border-b first:pt-0 lg:max-w-none lg:mx-0 lg:px-0">
			<Title tag='h2'>
				{title}
			</Title>

			<div
				className={classNames(
					'lg:grid lg:grid-cols-6 lg:grid-flow-col-dense lg:gap-14',
					// ((description || actions) && faqs) ? 'lg:grid-cols-2' : 'lg-grid-cols-3'
				)}
			>
				{(description || actions) &&
					<div className={!faqs ? 'col-span-4' : 'col-span-3'}>
						<div className="mt-4 text-lg text-gray-500 whitespace-pre-line">
							{description}
						</div>

						{full && (
							<div className="mt-4 text-md italic text-gray-500 whitespace-pre-line">
								{full}
							</div>
						)}


						<div className="mt-6">
							{actions && actions.map((action, index) => (
								<span key={index} className="inline-block mr-3 mb-3">
									<Button href={action.href} isExternal={action.isExternal} type={action.type}>
										{action.title}
									</Button>
								</span>
							))}
						</div>
					</div>
				}

				{faqs &&
					<div className={classNames(
						'mt-6',
						!(description || actions) ? 'col-span-4' : 'col-span-3 lg:mt-4'
					)}>
						<TakePartFaq faqs={faqs} />
					</div>
				}
			</div>
		</div>
	)
}
