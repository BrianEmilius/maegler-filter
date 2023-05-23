import { formatter } from "../helpers/currency";

export default function Listing({listing}) {
	return (
		<article className="border-2 border-neutral-100 p-3 rounded-lg">
			<h1 className="text-lg">{listing.adress1}</h1>
			<p>{listing.city}</p>
			<p>{formatter.format(listing.price)}</p>
		</article>
	)
}
