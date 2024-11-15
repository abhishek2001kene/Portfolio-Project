import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Projectform from './components/projects/Projectform.jsx'
import { Provider } from 'react-redux'
import {store} from "./store/store.js"
import Body from './components/main body/Body.jsx'
import Footer from './components/Footer/Footer.jsx'
import Features from './components/features.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/addProject",
        element:<Projectform/>
      },
      {
        path:"/footer",
        element:<Footer/>
      },
      {
        path:"/features/:id",  // New route for Features component
        element:<Features/>,
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
<Provider store={store}>
<RouterProvider router={router}/>
</Provider>
)
