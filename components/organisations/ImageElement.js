import Image from 'next/image'

export default function ImageElement({item}) {
	return (
		<a
			href={item.website}
			target="_blank"
			rel="noreferrer"
			className="transition duration-500 block col-span-1 p-4 bg-white rounded-lg drop-shadow-none hover:drop-shadow-lg sm:p-6 md:p-8"
		>
			<div className="relative h-20 w-full max-w-[15rem] mx-auto">
				<Image
					className={'h-20'}
					src={item.image}
					alt={item.name}
					placeholder="blur"
					layout={'fill'}
					objectFit={'contain'}
				/>
			</div>

			<p className="text-center mt-2 text-gray-600">{item.name}</p>
		</a>
	)
}
