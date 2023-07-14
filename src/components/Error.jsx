import { useRouteError } from "react-router-dom"

export default function Error() {
   const error = useRouteError()

   console.log(error)

   return(
      <div className="route-error-container">
         <h2> An error occured! </h2>
      </div>
   )
}