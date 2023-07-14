import React from 'react'
import {
   useLoaderData,
   Form,
   redirect,
   useActionData,
   useNavigation
} from 'react-router-dom'
import { loginUser } from '../api/api'

export async function loader({request}) {
   return new URL(request.url).searchParams.get("message")
}

export async function action({request}) {
   try {
      const formData = await request.formData()
      const email = formData.get("email")
      const password = formData.get("password")
      const data = await loginUser({email, password})
      localStorage.setItem("loggedIn", true)
      const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

      return redirect(pathname)
   }
   catch(err) {
      return err.message
   }
}

export default function Login() {
   const navigation = useNavigation()

   const errorMessage = useActionData()
   const message = useLoaderData()

   return(
      <section className='login-container'>
         <h1>Sign in to to your account</h1>
         {message && <h3 className='red'> {message}</h3>}
         {errorMessage && <h3 className='red'> {errorMessage}</h3>}
         <Form method='post' className='login-form' replace>
            <input
               name='email'
               type='email'
               placeholder='someone@example.com'
            />
            <input
               name='password'
               type='password'
               placeholder='********'
            />

            <button disabled={navigation.state === "submitting"}>
               {
                  navigation.state === "submitting"
                  ? "Logging in..."
                  : "Log in"
               }
            </button>
         </Form>
      </section>
   )
}