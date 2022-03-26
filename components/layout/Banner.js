import Title from '../lib/Title'

export default function Banner({title, description, bannerImage}) {
	return (
		<div className="relative bg-zinc-500">
			<div className="absolute inset-0">
				<img
					className="w-full h-full object-cover"
					src={bannerImage}
					alt=""
				/>

				<div className="absolute z-20 inset-0 bg-zinc-500 mix-blend-multiply" aria-hidden="true" />
			</div>

			<div className="relative z-30 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
				<Title tag="h1" darkMode center responsive>{title}</Title>

				<p className="mt-6 text-xl text-white max-w-prose m-auto sm:text-center">
					{description}
				</p>
			</div>
		</div>
	)

	// return (
	// 	<div className="py-24 bg-gray-50 sm:py-32">
	// 		<div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
	// 			<h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
	// 				{title}
	// 			</h1>
	// 			<p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
	// 				{description}
	// 			</p>
	// 		</div>
	// 	</div>
	// )
}
