import {organisations} from '../../data/organisationsData'
import ImageElement from './ImageElement'

export default function OrganisationsListing() {
	return (
		<div className="mt-6 grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:mt-8">
			{organisations.map((partner, index) => (
				<ImageElement key={index} item={partner} />
			))}
		</div>
	)
}
