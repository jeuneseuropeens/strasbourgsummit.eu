import {classNames} from '../../lib/helpers'

export default function Title({children, tag, className, center, darkMode, responsive, extrabold}) {
	const TagName = tag

	const fontSize = () => {
		if (TagName === 'h1') return !responsive ? 'text-4xl' : 'text-4xl sm:text-5xl lg:text-6xl'
		if (TagName === 'h2') return 'text-3xl'
		if (TagName === 'h3') return 'text-2xl'
	}

	return (
		<TagName
			className={classNames(
				className,
				fontSize(),
				!!center && 'sm:text-center',
				extrabold ? 'font-extrabold' : 'font-bold',
				darkMode ? 'text-white' :  'text-gray-900',
			)}
		>
			{children}
		</TagName>
	)
}

Title.defaultProps = {
	tag: 'h1',
	center: false,
	darkMode: false,
	responsive: false,
	weight: 'bold'
}
