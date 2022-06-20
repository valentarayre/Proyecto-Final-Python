import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";


const DirectorClass = " cursor-pointer min-w-max w-24 bg-SecondaryColor mx-2 my-8 p-2 border rounded-md border-LigthBlueText  mdl:mx-8 md:w-48  md:mx-16 "
const Director = () => {

  const [Directores,setDirectores] = useState([{}])
  const [Loading,setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [nombreDirector, setNombreDirector] = useState(null)
  const [moviesDirector, setMoviesDirector] = useState([{}])
  
  useEffect(() => {
    fetch("http://127.0.0.1:5000/director").then(
      res => res.json()
    ).then(
      (res) => {
        setDirectores(res)
        console.log(res)
        console.log("se pudo fetchear")
        setLoading(false)
        
      }
    ).catch(function (error) {
      console.log("NO se pudo fetchear")
    });
  },[])

  
  const RenderModal = (nombreDirector) => {
    console.log(moviesDirector)
    return(
      <div className="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75 pt-12 "> 
      <section className=" p-5 mx-2 max-w-4xl  bg-SecondaryColor rounded-md shadow-md sm:p-10 sm:mx-12 md:mx-auto fixed top-40 right-0 left-0 z-50 h-fit min-h-1/3 overflow-y-auto">
        <div className="relative w-full space-x-96">
          <h1 className="text-xl  inline-block font-bold text-white capitalize">Peliculas del director {nombreDirector} :</h1>
          <img onClick={() => setModal(false)} className="cursor-pointer absolute inline-block -right-0" src="https://img.icons8.com/material/25/ffffff/delete-sign--v1.png" />
        </div>

        <ul class="list-disc mt-3 mt-10 ">
        { 
           moviesDirector.map((anObjectMapped) => {
          //
          return (
            
            
            
              <li className="text-white m-6 font-bold " key={`${anObjectMapped.title}`}>
                  
                     {anObjectMapped.title} ( {anObjectMapped.genero} )
                  
              </li>
            
            
          );
      })
        }

        
        
         
        </ul>
  
      </section>
    </div>
    )
  }

  const dataModal = (nombreDirector,Peliculas, value) => {
    setNombreDirector(nombreDirector);
    setMoviesDirector(Peliculas)
    setModal(value);
  }

  return (
    <div className='bg-MainColor px-5 py-16 min-h-screen'>
    
      <h1 className='text-white text-2xl font-Roboto mb-4 mdl:mx-8 md:mx-16'>Directores</h1>
      <div className=''>
      
      
      
      <div className="grid grid-cols-2 ssm:grid-cols-3 mdl:grid-cols-3 gap-3 md:gap-0 md:px-12 lg:grid-cols-6">

      {
      Loading?
      <Loader />
      :
      Directores.map(({ Nombre , Peliculas}) => (
        <div className={DirectorClass}>
          <div key={Nombre} className="font-medium text-white text-center p-1.5"  onClick={() => dataModal(Nombre,Peliculas,true)}>{Nombre}<span className='text-LigthBlueText'> ( { Peliculas.length} )</span></div>
        </div>
      ))
      
      
      }
    </div>
    
      {
        (modal === true && RenderModal(nombreDirector))
      }

      </div>
      </div>

    
  )
}

export default Director