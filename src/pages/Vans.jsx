import React from 'react'
import Van from '../components/Van'
import {Link} from 'react-router-dom'

export default function Vans () {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    return (
        <main className="vans-container">
            <section className='vans-header'>
                <h2 className='vans-secondary-heading'>
                    Explore our van options
                </h2>
                <div className='vans-filter-options'>
                    <button type="button" className='van-filter-btn solid-btn'>
                        Simple
                    </button>
                    <button type="button" className='van-filter-btn solid-btn'>
                        Luxury
                    </button>
                    <button type="button" className='van-filter-btn solid-btn'>
                        Rugged
                    </button>
                    <button type="button" className='van-filter-btn clear-filter-btn'>
                        Clear filters
                    </button>
                </div>
            </section>
            <section className='vans-content-container'>
            {
                vans.map(van => {
                    return <Link key={van.id} to={`/vans/:${van.id}`} >
                        <Van  vanImg={van.imageUrl} name={van.name} price={van.price} type={van.type} />
                    </Link>
                })
            }
            </section>
        </main>
    )
}