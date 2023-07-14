import React from 'react'
import { Link, useLoaderData, defer, Await } from 'react-router-dom'
import { getVans } from '../../api/api'
import { requireAuth } from '../../utils/utils';

export async function loader({ request }) {
   await requireAuth(request)
   return defer({ hosVans: getVans() })
}

export default function HostVans() {
   const hostVansPromise = useLoaderData();

   return (
      <section className='host-vans-list-warpper'>
         <h1 className='host-vans-list-title'> Your listed vans </h1>
         <React.Suspense fallback={<h3>Loading host vans...</h3>}>
            <Await resolve={hostVansPromise.hosVans}>
               {
                  vans => {
                     return (
                        <>
                           {
                              vans.map(van =>
                                 <Link key={van.id} to={van.id}>
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
                        </>
                     )
                  }
               }
            </Await>
         </React.Suspense>
      </section>
   )
}