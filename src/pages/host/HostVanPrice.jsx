import React from "react";
import { useParams } from "react-router-dom";

export default function HostVanPrice(){
   const id = useParams().id.replace(":", "")
   console.log(`ID: ${id}`)
   const [van, setVan] = React.useState([])
   React.useEffect(() => {
      fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
   },[id])

   return(
      <h1> ${van.price} <small>/day</small></h1>
   )
}