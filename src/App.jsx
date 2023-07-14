import {
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Route
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login, {
   loader as loginLoader,
   action as loginAction
} from './pages/Login'
import Vans, { loader as vansLoader } from './pages/vans/Vans'
import './App.css'
import VanDetail, { loader as vanDetailLoader } from './pages/vans/VanDetail'
import Dashboard, {loader as dashboardLoader} from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostVans, {loader as hostVansLoader} from './pages/host/HostVans'
import HostVanDetail, {loader as hostVanDetailLoader} from './pages/host/HostVanDetail'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPhoto from './pages/host/HostVanPhoto'
import HostVanPrice from './pages/host/HostVanPrice'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Error from './components/Error'

import './api/server'
import { requireAuth } from './utils/utils'

const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
         path='login'
         element={<Login />}
         loader={loginLoader}
         action={loginAction}
         errorElement={<Error />}
      />
      <Route
         path='vans'
         element={<Vans />}
         loader={vansLoader}
         errorElement={<Error />}
      />
      <Route
         path="vans/:id"
         element={<VanDetail />}
         errorElement={<Error />}
         loader={vanDetailLoader}
      />
      <Route
         path="host"
         element={<HostLayout />}
      >
         <Route
            index
            element={<Dashboard />}
            errorElement={<Error />}
            loader={dashboardLoader}
         />
         <Route
            path='income'
            element={<Income />}
            errorElement={<Error />}
            loader={async ({ request }) =>
               await requireAuth(request)
            }
         />
         <Route
            path='vans'
            element={<HostVans />}
            loader={hostVansLoader}
            errorElement={<Error />}
         />

         <Route
            path="vans/:id"
            element={<HostVanDetail />}
            loader={hostVanDetailLoader}
            errorElement={<Error />}
         >
            <Route
               index
               element={<HostVanInfo />}
               loader={async ({ request }) => await requireAuth(request)}
               />
            <Route
               path='pricing'
               element={<HostVanPrice />}
               loader={async ({ request }) => await requireAuth(request)}
               />
            <Route
               path='photos'
               element={<HostVanPhoto />}
               loader={async ({ request }) => await requireAuth(request)}
               />
         </Route>
         <Route
            path='reviews'
            element={<Reviews />}
            errorElement={<Error />}
            loader={async ({ request }) => await requireAuth(request)}
            />
      </Route>
      <Route path='*' element={<NotFound />} />
   </Route>
))

function App() {

   return (
      <RouterProvider router={router} />
   )
}

export default App