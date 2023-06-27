import heroImg from '../assets/images/about-hero.png'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <main className="about-main">
      <img src={heroImg} alt="Hero image" className="about-figure" />
      <div className='about-content'>
        <section className='about-section'>
          <h1 className='about-title'> Don{`'`}t squeeze in seden when you could relax in van. </h1>
          <article className='about-text-section'>
            <p className='about-text'>
              Our mission is to enliven your rad trip with the perfect travel van rental. Our vans are rectified before each trip to ensure your travel plans can go off without a hitch.
              <br />(<em>Hitch costs extra</em> 😉)
            </p>
            <p className='about-text'>
              Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
          </article>
          <div className='about-bottom-card'>
            <h2 className='h-secondary'>
              Your destination is waiting
              <br />
              Your van is ready
            </h2>
            <Link to="/vans" className='explore-van-button' > Explore our vans </Link>
          </div>
        </section>
      </div>
    </main>
  )
}