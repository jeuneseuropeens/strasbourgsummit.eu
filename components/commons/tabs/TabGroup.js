import {Tab} from '@headlessui/react'
import {classNames} from '../../../lib/helpers'

export default function TabGroup({tabPanels, tabContent, defaultIndex, children}) {
	return (
		<Tab.Group as={'div'} defaultIndex={defaultIndex} className="mb-10">
			<div className="flex justify-center px-4">
				<Tab.List
					as={'nav'}
					className="relative bg-gray-100 rounded-lg p-0.5 flex self-center flex-wrap justify-center"
				>
					{tabPanels.map((tab) => (
						<Tab
							key={tab.name}
							className={({ selected }) => classNames(
								selected ? 'bg-secondary-400 text-primary-700' : 'text-gray-500 hover:text-gray-700',
								'flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-3 font-medium text-md rounded-md'
							)}
						>
							{tab.icon && <tab.icon className="h-4 w-4" aria-hidden="true" />}
							<span>{tab.name}</span>
						</Tab>
					))}
				</Tab.List>
			</div>

			<Tab.Panels>
				{tabContent}
			</Tab.Panels>
		</Tab.Group>
	)
}

TabGroup.defaultProps = {
	defaultIndex: '0'
}
