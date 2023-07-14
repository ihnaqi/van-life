import React from 'react'
import Van from '../../components/Van'
import {
    Link,
    useSearchParams,
    useLoaderData,
    defer,
    Await,
} from 'react-router-dom'
import { getVans } from '../../api/api'

export async function loader() {
    return defer({ vans: getVans() })
}

export default function Vans() {
    const [searchParam, setSearchParams] = useSearchParams()
    const vansPromise = useLoaderData()

    const typeFilter = searchParam.get("type")

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            }
            else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <main className="vans-container">
            <section className='vans-header'>
                <h2 className='vans-secondary-heading'>
                    Explore our van options
                </h2>
                <React.Suspense fallback={<h3>Loading vans...</h3>}>
                    <Await resolve={vansPromise.vans}>
                        {
                            vans => {
                                const displayedVans = typeFilter
                                    ? vans.filter(van => van.type === typeFilter)
                                    : vans

                                const vanElements = displayedVans.map(van => (
                                    <Link
                                        key={van.id}
                                        to={van.id}
                                        state={{ search: searchParam.toString() }}
                                    >
                                        <Van
                                            vanImg={van.imageUrl}
                                            name={van.name}
                                            price={van.price}
                                            type={van.type}
                                        />
                                    </Link>
                                ))

                                return (
                                    <>
                                        <div className='vans-filter-options'>
                                            <button
                                                type="button"
                                                onClick={() => { handleFilterChange("type", "simple") }}
                                                className={`van-filter-btn solid-btn simple-${typeFilter === 'simple' ? 'selected' : null}`}
                                            >
                                                Simple
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => { handleFilterChange("type", "luxury") }}
                                                className={`van-filter-btn solid-btn luxury-${typeFilter === 'luxury' ? 'selected' : null}`}
                                            >
                                                Luxury
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => { handleFilterChange("type", "rugged") }}
                                                className={`van-filter-btn solid-btn rugged-${typeFilter === 'rugged' ? 'selected' : null}`}
                                            >
                                                Rugged
                                            </button>
                                            {
                                                typeFilter ?
                                                    <button
                                                        type="button"
                                                        onClick={() => { handleFilterChange("type", null) }}
                                                        className='van-filter-btn clear-filter-btn'
                                                    >
                                                        Clear filters
                                                    </button>
                                                    : null
                                            }
                                        </div>
                                        <section className='vans-content-container'>
                                            {
                                                vanElements
                                            }
                                        </section>
                                    </>
                                )
                            }
                        }
                    </Await>
                </React.Suspense>
            </section>
        </main>
    )
}