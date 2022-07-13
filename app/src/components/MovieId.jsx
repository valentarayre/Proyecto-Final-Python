import React,{ useState,useContext, useRef, useEffect} from "react";
import { Link, Redirect, Route, useLocation, useParams, } from "react-router-dom";
import { LoginContext } from "../helper/Context";
import movie from "./Movie";
import Loader from "../components/Loader";





const MovieId = () => {

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  //const id = query.get("id")
  
  /* Obj. Movie Properties */
  const [id,setId] = useState(localStorage.getItem("id"))
  const [title,setTitle] = useState(localStorage.getItem("title"))
  const [img,setImg] = useState(localStorage.getItem("img"))
  const [sinopsis,setSinopsis] = useState(localStorage.getItem("sinopsis"))
  const [director,setDirector] = useState(localStorage.getItem("director"))
  const [genero,setGenero] = useState(localStorage.getItem("genero"))
  const [anio,setAnio] = useState(localStorage.getItem("año"))
  const { loggedIn , setLoggedIn } = useContext(LoginContext)
  const [comments,setComments] = useState([])
  const [edit, setEdit] = useState(false)
  const [Loading,setLoading] = useState(true)
  const CommentClass = "block rounded-xl bg-SecondaryColor border border-LigthBlueText text-LigthBlueText my-3.5 p-2 text-sm  md:my-6"
  const [comentario,setComentario] = useState('')
  const [canDelete,setCanDelete] = useState(false)
  

  
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/comments${id}`
    ).then(
      res => res.json()
    ).then(
      (res) => {
        console.log(res)
        setLoading(false)
        setComments(res)
        if (res.length <= 0) {
          setCanDelete(true)
        }
        
      }
    )
}, [id])


const eliminarPelicula = (id) => {
  fetch( `http://127.0.0.1:5000/delmovie${id}`,{
    method:'DELETE'}).then(
  ).then(
    window.location.replace(`http://127.0.0.1:3000/`)
  ).catch(function (error) {
    console.log("No se pudo borrar")
  });
} 

const PublicarComentario = (id,comentario) => {

  var comentario = {
    "comentario": `${comentario}`,
  }
  fetch( `http://127.0.0.1:5000/postcomment${id}`,{
    method:'POST',
    body: JSON.stringify(comentario),
    headers: {
      "Content-type": "application/json"
    }}).then(
  ).then(
    localStorage.setItem("comentario",JSON.stringify(comentario)),
    console.log("se pudo comentar")
  ).catch(function (error) {
    console.log("No se pudo comentar")
  });
} 

const editMovie = (title,anio,director,genero,sinopsis,img) => {
  var movie = {
    "anio": `${anio}`,
    "director": `${director}`,
    "genero": `${genero}`,
    "imgURL": `${img}`,
    "sinopsis":`${sinopsis}`,
    "title": `${title}`
  }
  

fetch( `http://127.0.0.1:5000/editmovie${id}`,{
  method:'PUT',
  body: JSON.stringify(movie),
  headers: {
    "Content-type": "application/json"
  }
}).then( res => res.json(),localStorage.setItem("edit",JSON.stringify(movie))
).then( data => console.log(data),
  
).catch(function (error) {
  console.log("No se pudo editar")
});

}
  const renderDeleteBtn = (id) => {
    return(
    <button onClick={() => eliminarPelicula(id)}className="bg-SecondaryColor hover:bg-rose-700 border h-7 w-36 rounded-xl duration-500 ssm:w-24 "> Borrar </button>
    )
  }

  const renderEditFilm = (id) => {
    
    return(
     
      <div>
      <p className=" px-8  text-LigthBlueText text-normal text-sm md:text-base mt-8">Editar pelicula :</p>
      <div className="px-12 mt-4 flex space-x-1 justify-between text-sm text-white m-auto ssm:inline-block ssm:px-2 ssm:mr-4 ">
      <button onClick={() => setEdit(true) } className="bg-SecondaryColor hover:bg-AccentColor border h-7 w-36 rounded-xl  md:mx-5 duration-500 ssm:w-24" > Editar </button>
      {
        (canDelete &&  renderDeleteBtn(id))
      
      }
      
      </div>
      </div>
      
    )
  }

  const renderModal = () => {
    return(
    <div className="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75 pt-12 overflow-y-auto"> 
    <section className=" p-5 mx-2 max-w-4xl  bg-SecondaryColor rounded-md shadow-md sm:p-10 sm:mx-12 md:mx-auto ">
    <div className="relative w-full space-x-96">
    <h1 className="text-xl  inline-block font-bold text-white capitalize">Edita la pelicula</h1>
    <img className="absolute inline-block -right-0" src="https://img.icons8.com/material/25/ffffff/delete-sign--v1.png" onClick={() => setEdit(false)}/>
    </div>
    
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
              <label className="text-white dark:text-gray-200" for="username">Titulo</label>
              <input  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="titulo"
              name="titulo"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Escribe el titulo"
              required
              />
          </div>
          <div>
              <label className="text-white dark:text-gray-200" for="username">Año</label>
              <input  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="anio"
              name="anio"
              onChange={(e) => setAnio(e.target.value)}
              value={anio}
              placeholder="Escribe el año"
              required
              />
  
          </div>
          <div>
              <label className="text-white dark:text-gray-200" for="emailAddress">Director</label>
              <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="director"
              name="director"
              onChange={(e) => setDirector(e.target.value)}
              value={director}
              placeholder="Escribe el director"
              />
          
          </div>
          <div>  
          <label className="text-white dark:text-gray-200" for="emailAddress">Genero</label>
          <select name='Generos' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={(e) => setGenero(e.target.value)}
                  value={genero}
                  style={{ width: '100%', height: '40px'}}>
            <option value='Accion'>
              Accion
            </option>
            <option value='Aventuras'>
              Aventuras
            </option>
            <option value='Comedia' selected>
              Comedia
            </option>
            <option value='Documental'>
              Documental
            </option>
            <option value='Drama'>
              Drama
            </option>
            <option value='Fantasia'>
              Fantasia
            </option>
            <option value='Musical'>
              Musical
            </option>
            <option value='Supenso'>
              Supenso
            </option>
            <option value='Terror'>
              Terror
            </option>
          </select>
        
        
          </div>
          <div>
              <label className="text-white dark:text-gray-200" for="passwordConfirmation">Sinopsis</label>
              <textarea className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="sinopsis"
              name="sinopsis"
              placeholder="Escribe la sinopsis"
              onChange={(e) => setSinopsis(e.target.value)}
              value={sinopsis}
              />
          
          </div>
          
          <div>
              <label className="block text-sm font-medium text-white">
              Imagen Url
              </label>
              <input id="emailAddress" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Escribe la URL"
              type="imageUrl"
              name="imageUrl"
              onChange={(e) => setImg(e.target.value)}
              value={img}
              />
          </div>
  </div>
  
  <button onClick={()=> editMovie(title,anio,director,genero,sinopsis,img)} className="w-80 h-12 py-2 mt-12  text-center  text-white transition-colors duration-200 transform bg-AccentColor rounded  focus:outline-none hover:bg-LigthBlueLg ">Guardar Cambios</button>
    
    </section>
    </div>
    )
  }
 

  const renderCommentForm = () => {
    return(
      <form className="flex w-full h-fit max-w-xl  rounded-lg px-0 pt-2">
        <div class="flex">
        <input className="bg-transparent border-b-2 text-white w-full text-m pr-1 ssm:w-60 md:w-96  md:mx-10" placeholder='Type Your Comment' 
        onChange={(e) => setComentario(e.target.value)}
        value={comentario}
        ></input>
        <button onClick={() => PublicarComentario(id,comentario)} className="flex-end bg-AccentColor text-white font-medium py-1 text-sm px-3  rounded-lg tracking-wide mr-1 hover:bg-LigthBlueLg ">Comentar</button>
        </div>
        </form>
    )
  }
  



  return (
    <div className=" min-h-screen overflow-x-hidden  bg-MainColor relative sm:h-max ">
      <div className=" block relative pt-10 ml-auto mr-auto h-2.5/5 py-7 ssm:flex md:ml-[0px] md:ml-[0px] ">
        
        <img className="ml-auto mr-auto h-36 ssm:h-52 md:h-80 md:px-10 contain mdlx:ml-24 mdlx:mr-8 md:ml-8 md:mr-1" src= { img }></img>
        
          <div className="flex-row pt-2 ">
            <div className="flex">
            <h1 className="ml-8 pt-1 font-Roboto font-bold text-white  md:text-3xl "> { title }</h1><span className="ml-1 mt-1.5 text-LigthBlueText text-sm md:text-base md:mt-3" > ({ anio })</span>
            </div>
            <p className=" px-8 py-2 text-LigthBlueText text-xs ssm:pr-20  md:pr-96  md:text-base  ">{ sinopsis }</p>
            <p className=" mt-1 px-8 text-LigthBlueText text-normal text-sm md:text-base">Director :<span className="ml-1 text-white">{director}</span></p>
            <p className=" mt-1 px-8 text-LigthBlueText text-normal text-sm md:text-base">Categoria :<span className="ml-1 text-white">{genero}</span></p>
            {
         (loggedIn === true && renderEditFilm(id))
      }        
            </div>
      </div>

      

      {
        (edit === true && renderModal())
      }

      <div className="  w-screen mx-auto h-12 p-8 ssm:inline-block">
      <p className=" mt-1 text-white text-normal text-sm  md:mx-10">Comentarios :<span className="ml-1 text-LigthBlueText">{ comments.length }</span></p>
      
      {
         (loggedIn === true && renderCommentForm(true))
      }
    
      {(Loading && <Loader />) }

      <div className="my-6 mx- w-full h-72   text-white sc overflow-y-scroll md:my-12  md:px-10">

      {
      
       comments.map((anObjectMapped, index) => {
        return (
          
            <div className={CommentClass} key={`${anObjectMapped.nombre}`}>
                <div className="font-medium text-white mb-2" >{anObjectMapped.nombre}</div>  {anObjectMapped.comentario}
            </div>
          
        );
    })
  
  }
      </div>
       
        
      
      </div>



    </div>
  );
};

export default MovieId;
