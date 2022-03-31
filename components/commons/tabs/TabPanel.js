import {Tab} from '@headlessui/react'

export default function TabPanel(props) {
	return (
		<Tab.Panel as="div" {...props}>
			{props.children}
		</Tab.Panel>
		)
}
