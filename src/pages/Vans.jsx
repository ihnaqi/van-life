import React from 'react'
import Van from '../components/Van'
export default function Vans () {
    /**
     * Challenge: Fetch and map over the data to display it on
     * the vans page. For an extra challenge, spend time styling
     * it to look like the Figma design.
     *
     * Hints:
     * 1. Use `fetch(/api/vans)` to kick off the request to get the
     *    data from our fake Mirage JS server
     * 2. What React hook would you use to fetch data as soon as the
     *    Vans page loads, and only fetch it the one time?
     * 3. You may get an error saying "console.groupCollapsed is not
     *    a function". You can ignore it for now.
     */
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
                    return <Van key={van.id} vanImg={van.imageUrl} name={van.name} price={van.price} type={van.type} />
                })
            }
            </section>
        </main>
    )
}