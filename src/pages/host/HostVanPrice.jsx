import { useOutletContext } from "react-router-dom";

export default function HostVanPrice(){
   const [van] = useOutletContext()

   return(
      <h1> ${van.price} <small>/day</small></h1>
   )
}