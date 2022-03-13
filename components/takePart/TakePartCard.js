import Link from 'next-translate-routes/link'

const buttonStyles = 'block w-full border border-transparent rounded-md py-2 text-sm font-semibold text-center mt-4 text-primary-600 bg-primary-100 hover:bg-primary-200 first:mt-8 first:text-white first:bg-primary-500 first:hover:bg-primary-600'

export default function TakePartCard({data}) {
	const {name, description, actions} = data

	return (
		<div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 mt-8 first:mt-0">
			<div className="p-6">
				<h2 className="text-lg leading-6 font-medium text-gray-900">{name}</h2>

				<p className="mt-4 text-sm text-gray-500">{description}</p>

				<div>
					{actions && actions.map((action) => {
						if (action.type === 'Link') {
							return (
								<Link
									key={action.title}
									href={action.href}
								>
									<a className={buttonStyles}>
										{action.title}
									</a>
								</Link>
							)
						}

						return (
							<a
								key={action.title}
								href={action.href}
								className={buttonStyles}
								target="_blank" rel="noreferrer"
							>
								{action.title}
							</a>
						)
					})}
				</div>
			</div>
		</div>
	)
}
