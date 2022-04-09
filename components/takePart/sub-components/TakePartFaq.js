import {Disclosure} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/outline'
import {classNames} from '../../../lib/helpers'

export default function TakePartFaq({faqs}) {
	return (
		<dl className="space-y-6">
			{faqs.map((faq, index) => (
				<Disclosure as="div" key={index}>
					{({ open }) => (
						<>
							<dt className="text-lg leading-6">
								<Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
									<span className="font-medium text-gray-900">{faq.question}</span>
									<span className="ml-4 h-7 flex items-center">
										<ChevronDownIcon
											className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
											aria-hidden="true"
										/>
									</span>
								</Disclosure.Button>
							</dt>
							<Disclosure.Panel as="dd" className="prose mt-2 text-base text-gray-500">
								{faq.answer}
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			))}
		</dl>
	)
}
