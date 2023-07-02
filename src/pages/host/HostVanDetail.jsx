import { NavLink, Outlet, useParams } from "react-router-dom"
import React from 'react'

export default function HostVanDetail() {
   const params = useParams()
   const [van, setVan] = React.useState(null)

   const activeStyle = {
      fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#161616',
   }

   React.useEffect(() => {
      fetch(`/api/vans/${params.id.replace(":", "")}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
   }, [params.id])

   return (
      van ?
         <section className="host-van-detail-page">
            <NavLink to='..' relative="path">
               <i className="back-button">
                  {'\u2190'} &nbsp;&nbsp;
                  <span className="back-button-text">
                     Back to all vans
                  </span>
               </i>
            </NavLink>
            <section className="host-van-detail-wrapper">
               <div className="host-van-detail-top">
                  <img src={van.imageUrl} className="host-van-detail-image" />
                  <div className="host-van-detail-info">
                     <button className={`${van.type} host-van-detail-type`}>
                        {van.type}
                     </button>
                     <h2 className='host-van-title'>
                              {van.name}
                     </h2>
                     <small className='host-van-price'>
                        <b>${van.price}</b> /day
                     </small>
                  </div>
               </div>
               <nav className="host-van-detail-nav">
                  <NavLink
                     to={`.`}
                     end
                     style={({isActive}) => isActive ? activeStyle : null}
                  >
                     Details
                  </NavLink>
                  <NavLink
                     to={`pricing`}
                     style={({isActive}) => isActive ? activeStyle : null}
                  >
                     Pricing
                  </NavLink>
                  <NavLink
                     to={`photos`}
                     style={({isActive}) => isActive ? activeStyle : null}
                  >
                     Photos
                  </NavLink>
               </nav>
               <section>
                  <Outlet />
               </section>
            </section>
         </section>
         :
      <h2> Host Van detail </h2>
   )
}