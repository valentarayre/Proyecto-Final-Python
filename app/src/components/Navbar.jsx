import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Director from "../pages/Director";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieId from "./MovieId";
import Moviecreator from "./Moviecreator";
import { LoginContext } from "../helper/Context";

const Class = " text-white text-x1 hover:text-AccentColor transition ease-out duration-500 mr-4"
export default function App() {
  let [open,setOpen]=useState(null);

const { loggedIn , setLoggedIn } = useContext(LoginContext)


// si hay un token guardado en LS, retoma la sesion 
console.log(loggedIn)

  useEffect(() => {
    const logJSON = window.localStorage.getItem('token')
    if (logJSON) {
      setLoggedIn(true)
    }
  })
  

  const LogOut = () =>{
    localStorage.removeItem('token')
    setLoggedIn(null)
  }

  return ( 
    <Router>
      {/* Main contenedor*/}
      <div className='shadow-md w-full sticky top-0 left-0 z-20'>
        <div className='md:flex items-center justify-between bg-SecondaryColor py-4 md:px-10 px-7'>
              
          {/* MLogo */}
            <div className="flex font-Bebas ml-2 justify-between items-center">
              <Link to="/">
                <span className="cursor-pointer text-white flex">
                  <img className="h-8 w-8 mt-1" src="https://img.icons8.com/material-outlined/24/4a90e2/two-tickets.png"></img>
                  <span className=" mt-2 ml-2 text-2xl">Cine</span>
                  <span className="text-AccentColor mt-2 text-2xl">Ya</span>
                </span>
              </Link>
            </div>
          {/* Icono hamburguesa */}
           
          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <img name={open ? 'close':'menu'} src="https://img.icons8.com/material-outlined/24/4a90e2/menu--v1.png"/>
          </div>
          {/* Listado de nav*/}
          <ul name="list" className={`md:flex md:items-center md:pb-0 pb-9 absolute md:static bg-SecondaryColor md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-17 pt-4 z-30' :'top-[-490px]'}`}>
              <li>
                <Link to="/" className={Class}>
                  Inicio
                </Link>
              </li>
             
              { loggedIn && <li><Link to="/create" className={Class}>Crear</Link></li>}
              
              <li>
                <Link to="/director" className={Class}>
                  Directores
                </Link>
              </li>
              
              {
                loggedIn? 
                
                <button className="bg-AccentColor text-white duration-500 px-6 py-2  rounded-lg hover:bg-LigthBlueLg " onClick={()=>LogOut()} >Cerrar Sesion</button>
                :
                <Link to="/login">
                <button className="bg-AccentColor text-white duration-500 px-6 py-2  rounded-lg hover:bg-LigthBlueLg ">Iniciar Sesion</button>
                </Link>
              }  
          </ul>
        </div>
        
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create" component={Moviecreator} />
          <Route path="/director" component={Director} />
          <Route path="/movie" component={MovieId} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
