import { DefinedVehicle } from "@/types"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default async function Page() {
  const params = useParams()
  const [vehicles, setVehicles] = useState<DefinedVehicle | null>(null)
  useEffect(() => {
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.year}?format=json`).then(data => data.json()).then(data => setVehicles(data as DefinedVehicle))
  }, [])
  console.log("🚀 ~ Page ~ params:", params)
  return <div className="flex w-full gap-14 flex-wrap">
    {
      vehicles ? vehicles.Results.map((v, i) => (
        <div key={i}>
          <div>Name:{v.Make_Name}</div>
          <div>Year:{params.year}</div>
          <div>Model:{v.Model_Name}</div>
          <div>Id:{v.Model_ID}</div>
        </div>
      )) : (
        <div>No data Loaded...</div>
      )
    }
  </div>
}