import FilterForm from "../src/components/FilterForm"
import Listing from "../src/components/Listing"

export default async function Home({searchParams}) {
  const params = new URLSearchParams(searchParams)
  const response = await fetch(`https://dinmaegler.onrender.com/homes?${params}`)
  const listings = await response.json()

  return (
    <>
      <FilterForm/>
      <section className="grid grid-cols-3 gap-5 p-3">
        {listings.length ? listings.map(listing => <Listing listing={listing}/>) :
          <p className="col-span-3 text-center">Ingen boliger i denne prisklasse</p>}
      </section>
    </>
  )
}
