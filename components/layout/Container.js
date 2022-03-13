export default function Container({children}) {
	return (
		<div id="container" className="px-4 sm:px-6 lg:px-8 overflow-hidden">
			<div className="max-w-7xl mx-auto py-12">
				{children}
			</div>
		</div>
	)
}

