import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import './App.css'
import Footer from './Components/Footer/Footer'
import Layout from './Components/Layout/Layout'
import Portfolio from './Components/Portfolio/Portfolio'
import NotFound from './Components/Errors/NotFound'

function App() {

  const routes =createBrowserRouter([
    {path : '' , element : <Layout/> , children : [
    {path : '' , element : <Home/>},
    {path : '/about' , element : <About/>},
    {path : '/portfolio' , element : <Portfolio/>},
    {path : '/contact' , element : <Contact/>},
    {path : '*' , element : <NotFound/>}
    ]
    }
  
   
  ])


  return (
<>
<RouterProvider router={routes}/>

</>
  )
}

export default App
