import { createBrowserRouter, createRoutesFromElements, Route,}from "react-router-dom"
import App from '../App.jsx';
import LandingPage from "../pages/LandingPage.jsx";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<LandingPage />} />

        
      </Route>
    </>
  )
)