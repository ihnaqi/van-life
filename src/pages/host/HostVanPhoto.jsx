import { useOutletContext } from 'react-router-dom'

export default function HostVanPhoto() {
   const [van] = useOutletContext()

   return(
      <img
         className="van-detail-photo"
         src={van.imageUrl}
         alt="Van Detail image"
      />
   )
}