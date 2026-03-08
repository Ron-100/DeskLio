import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Dashboard from "./pages/Dashboard"
import Clients from "./pages/Clients"
import Project from "./pages/Project"
import Root from "./components/Root"
import SignUpLogin from "./components/SignUpLogin"
import Unauthorised from "./components/Unauthorised"
import ProtectedRoute from "./components/ProtectedRoute"
import { useEffect } from "react"
import appwriteService from "./appwrite/appwrite"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "./store/store"
import { clearInfo, setUserInfo } from "./store/authSlice"

function App() {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{
    const checkUser = async () => {
      try {
        const user = await appwriteService.getCurrentUser()
        if (user) {
          dispatch(setUserInfo(user))
        } else {
          dispatch(clearInfo())
        } 
      } catch (error) {
        dispatch(clearInfo())
      }
    };

    checkUser()
  },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="*" element={<Unauthorised/>}/>
      <Route path="/sign-login" element={<SignUpLogin/>}/>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Root/>}/>
        <Route 
          path="/dashboard" 
          element={
            // <ProtectedRoute>
              <Dashboard/>
            // </ProtectedRoute>
          }/>
        <Route 
          path="/clients" 
          element={
            // <ProtectedRoute>
              <Clients/>  
            // </ProtectedRoute>
          }/>
        <Route 
          path="/projects" 
          element={
            // <ProtectedRoute>
              <Project/>
            // </ProtectedRoute>
          }/>
      </Route>
      </>
    )
  )

  return (
      <>
      <RouterProvider router={router}/>
      </>
  )
}

export default App
