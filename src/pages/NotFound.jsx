import {Link } from 'react-router-dom'

export default function NotFound () {
   return (
      <section className="not-found-container">
         <h3 className="not-found-text">
            Sorry for inconvenience, the page you are looking for doesn`t exists, click on the button to return to home page.
         </h3>
         <Link to=".">
            Return to homepage
         </Link>
      </section>
   )
}