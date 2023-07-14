import { Link, useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../../api/api"

export function loader({params}) {
    return getVans(params.id)
}

export default function VanDetail () {
    const location = useLocation()
    const van = useLoaderData()

    return (
        <main className="van-detail-container">
            <Link to={`..?${location.state?.search || ''}`} relative="path">
                <i className="back-button">
                    &larr; &nbsp;&nbsp;
                    <span className="back-button-text">
                        Back to {location.state?.search.slice(5).charAt(0).toUpperCase() + location.state?.search.slice(6) || 'all'} vans
                    </span>
                </i>
            </Link>
            <img src={van.imageUrl} className="van-detail-image" alt="Van Detail Image" />
            <button type='button' className={`van-button-detail ${van.type}`}>
                {van.type}
            </button>
            <h2 className="van-name">{van.name}</h2>
            <h2 className="van-name">
                {`$${van.price}`}
                <small className="text-small">
                    &nbsp;/day
                    </small>
                </h2>
            <p className="van-description">
                {van.description}
            </p>
            <button type="button" className={`rent-van-button`}>
                Rent this van
            </button>
        </main>
    )
}