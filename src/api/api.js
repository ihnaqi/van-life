import { initializeApp } from "firebase/app"
import {getFirestore, collection, doc, getDocs, getDoc, query, where} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDT7dP9610qV45DhR3qXCpR2EVHKNHYL2Y",
  authDomain: "vanlife-312a7.firebaseapp.com",
  projectId: "vanlife-312a7",
  storageBucket: "vanlife-312a7.appspot.com",
  messagingSenderId: "969056259943",
  appId: "1:969056259943:web:b31b1c8e18eef8b59029c2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
   const querySnapshot = await getDocs(vansCollectionRef)
   const dataArray = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
   }))

   return dataArray
}

export async function getVan(id) {
   const vanRef = doc(db, "vans", id)
   const vanSnapshot = await getDoc(vanRef)
   return {
      ...vanSnapshot.data(),
      id: vanSnapshot.id
   }
}

export async function getHostVans() {
   const q = query(vansCollectionRef, where("hostId", "==", "123"))
   const querySnapshot = await getDocs(q)
   const dataArray = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
   }))

   return dataArray
}

export async function loginUser(creds) {
   const res = await fetch("/api/login",
      {method: "post", body: JSON.stringify(creds)}
   )

   const data = await res.json()

   if (!res.ok) {
      throw {
         message: data.message,
         statusText: res.statusText,
         status: res.status
      }
   }

   return data
}