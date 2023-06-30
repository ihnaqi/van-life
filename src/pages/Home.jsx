import { Link } from "react-router-dom";

export default function Home() {
    return (
      <main className="main">
        <section className="main-section">
          <h1 className="h-primary">
            You got the travel plans, we got the travel vans
          </h1>
          <p className="main-desc">
            Add adventure to your life by joining the #vanlife movement.Rent teh perfect van to make your perfect road trip.
          </p>
          <Link className="main-button" to='/vans'>Find your van</Link>
        </section>
      </main>
    )
  }