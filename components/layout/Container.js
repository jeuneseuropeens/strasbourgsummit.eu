export default function Container({children}) {
	return (
		<div id="container" className="px-4 sm:px-6 lg:px-8 overflow-x-hidden">
			<div className="max-w-7xl mx-auto my-12">
				{children}
			</div>
		</div>
	)
}

