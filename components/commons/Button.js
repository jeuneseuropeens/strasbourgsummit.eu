import Link from 'next-translate-routes/link'
import {classNames} from '../../lib/helpers'

export default function Button({children, href, isExternal, type}) {
	const typeStyles = () => {
		if (type === 'primary') return 'border border-transparent shadow-sm text-white bg-primary-500 hover:bg-primary-600'
		if (type === 'secondary') return 'border border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200'
		if (type === 'white') return 'border border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50'
	}

	const buttonStyles = classNames(
		typeStyles(),
		'inline-flex items-center px-4 py-2 text-md font-medium rounded-md'
	)

	return !isExternal ? (
		<Link href={href}>
			<a className={buttonStyles}>
				{children}
			</a>
		</Link>
	) : (
		<a
			href={href}
			className={buttonStyles}
			target="_blank" rel="noreferrer"
		>
			{children}
		</a>
	)
}

Button.defaultProps = {
	type: 'primary'
}
