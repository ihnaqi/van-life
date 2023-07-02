import { useParams } from "react-router-dom";
import React from 'react'

export default function HostVanInfo() {
   const id = useParams().id.replace(":", "")
   console.log(`ID: ${id}`)
   const [van, setVan] = React.useState([])
   React.useEffect(() => {
      fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
   },[id])

   return(
      <section className="host-van-detail-info">
         <p><b>Name:</b> {van.name}</p>
         <p><b>Category:</b> {van.type}</p>
         <p><b>Description:</b> {van.description}</p>
         <p><b>Visibility:</b> Public</p>
      </section>
   )
}