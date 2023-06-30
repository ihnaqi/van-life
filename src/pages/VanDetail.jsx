import { Link, useParams } from "react-router-dom"
import React from 'react'

export default function VanDetail () {
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id.replace(":", "")}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
        .catch(error => {
            console.error(error)
        })
    }, [params.id])

    return (
        <main className="van-detail-container">
            {
                van ? (
                    <>
                        <Link to='/vans'>
                            <i className="back-button">
                                {'\u2190'} &nbsp;&nbsp;
                                <span className="back-button-text">
                                    Back to all vans
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
                    </>
                ) : <h2> Loading... </h2>
            }
        </main>
    )
}