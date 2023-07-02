import React from 'react'
import { Link } from 'react-router-dom'

export default function HostVans() {
   const [vans, setVans] = React.useState(null)

   React.useEffect(() => {
      fetch("/api/host/vans/789")
      .then(res => res.json())
      .then(data => setVans(data.vans))
   }, [])

   return(
      vans ?
      <section className='host-vans-list-warpper'>
         <h1 className='host-vans-list-title'> Your listed vans </h1>

         {
            vans.map(van =>
               <Link key={van.id} to={`/host/vans/:${van.id}`}>
                  <div className='host-van-container'>
                     <img src={van.imageUrl} className='host-van-image' />
                     <div className='host-van-title-and-price'>
                        <h2 className='host-van-title'>
                           {van.name}
                        </h2>
                        <small className='host-van-price'>
                           <b>${van.price}</b> /day
                        </small>
                     </div>
                  </div>
               </Link>
            )
         }
      </section>
      : <h2> Loading...</h2>
   )
}