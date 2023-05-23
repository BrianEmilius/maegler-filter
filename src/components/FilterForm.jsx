"use client"
import { useState } from "react"
import { formatter } from "../helpers/currency"

export default function FilterForm() {
	const [max, setMax] = useState(8000000)

	return (
		<form>
			<div className="flex flex-col">
				<label className="flex flex-col">
					Max Pris
					<input type="range" min="1000000" max="8000000" step="100000" value={max} onChange={e => setMax(e.target.value)} name="price_lte" />
				</label>
				<span>{formatter.format(max)}</span>
			</div>
			<button type="submit">Filtrer</button>
		</form>
	)
}
