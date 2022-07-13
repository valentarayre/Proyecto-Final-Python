import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import Message from "../components/Message";
import { Link } from "react-router-dom";

const initialForm = {
  titulo: "",
  anio: "",
  director: "",
  genero: "Accion",
  sinopsis: "",
  imageUrl: ""
};

const validationsForm = (form) => {
  const errors = {};
  const regexUrl = /https?:\/\/.*\.(?:png|jpg)/;
  if (!form.imageUrl.trim()) {
    errors.imageUrl = "El campo 'Titulo' es requerido";
  }
  if (!regexUrl.test(form.imageUrl.trim())) {
    errors.imageUrl = "La URL no es valida";
  }
  if (!form.titulo.trim()) {
    errors.titulo = "El campo 'Titulo' es requerido";
  }
  if (!form.anio.trim()) {
    errors.anio = "El campo 'Año' es requerido";
  }
  if (!form.director.trim()) {
    errors.director = "El campo 'Directo' es requerido";
  }
  if (!form.sinopsis.trim()) {
    errors.sinopsis = "El campo 'Sinopsis' es requerido";
  }

  return errors;
};


const PostMovie = (titulo,anio,director,genero,sinopsis,imageUrl) => {



  var movie = {
      "anio": `${anio}`,
      "director": `${director}`,
      "genero": `${genero}`,
      "imgURL": `${imageUrl}`,
      "sinopsis":`${sinopsis}`,
      "title": `${titulo}`
    }


 fetch( `http://127.0.0.1:5000/creator`,{
    method:'POST',
    mode: 'cors',
    body: JSON.stringify(movie),
    headers: {
      "Content-type": "application/json"
    }
  }).then( res => res.json()
  ).then( data => localStorage.setItem("PeliculaCreada",JSON.stringify(movie)),
  ).then(window.location.replace(`http://127.0.0.1:3000/`)).catch(function (error) {
    console.log("error")
  });

 

} 





const createmovie = ({  }) => {
  const {
    errors,
    loading,
    response,
    responseError,
    handleBlur
  } = useForm(initialForm, validationsForm,"/creator");

  const styles = {
    fontSize: "small",
    fontWeight: "normal",
    color: "#dc3545",
  };
 
  const [titulo,setTitulo] = useState('')
  const [anio,setAnio] = useState('')
  const [director,setDirector] = useState('')
  const [genero,setGenero] = useState('Accion')
  const [sinopsis,setSinopsis] = useState('')
  const [imageUrl,setImageUrl] = useState('')

  const [submitDisabled,setsubmitDisabled] = useState(true)
  

  return (
    <>
      
      <div className=" bg-MainColor min-h-[calc(100vh-72px)] py-16">
      <section className=" p-5 mx-2 max-w-4xl  bg-SecondaryColor rounded-md shadow-md sm:p-10 sm:mx-12 md:mx-auto ">
      <h1 className="text-xl font-bold text-white capitalize">Crea una pelicula</h1>
      
      <form id="form">
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-white dark:text-gray-200" for="username">Titulo</label>
                <input  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="titulo"
                name="titulo"
                placeholder="Escribe el titulo"
                onBlur={handleBlur}
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo}
                required
                />
                {errors && <p style={styles}>{errors.titulo}</p>}
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="username">Año</label>
                <input  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="anio"
                name="anio"
                placeholder="Escribe el año"
                onBlur={handleBlur}
                onChange={(e) => setAnio(e.target.value)}
                value={anio}
                required
                />
                
                {errors && <p style={styles}>{errors.anio}</p>}
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">Director</label>
                <input class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="director"
                name="director"
                placeholder="Escribe el director"
                onBlur={handleBlur}
                onChange={(e) => setDirector(e.target.value)}
                value={director}
                required
                />
                {errors && <p style={styles}>{errors.director}</p>}
            
            </div>
            <div>  
                <label class="text-white dark:text-gray-200" for="emailAddress">Genero</label>
                <select name='genero' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="genero"
                onBlur={handleBlur}
                onChange={(e) => setGenero(e.target.value)}
                value={genero}
                required
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

                {errors && <p style={styles}>{errors.genero}</p>}
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Sinopsis</label>
                <textarea class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="sinopsis"
                name="sinopsis"
                placeholder="Escribe la sinopsis"
                onBlur={handleBlur}
                onChange={(e) => setSinopsis(e.target.value)}
                value={sinopsis}
                required/>
                {errors && <p style={styles}>{errors.sinopsis}</p>}
            
            </div>
            
            <div>
                <label class="block text-sm font-medium text-white">
                Imagen Url
                </label>
                <input id="emailAddress" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Escribe la URL"
                type="imageUrl"
                name="imageUrl"
                onBlur={handleBlur}
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
                required
                />
                {errors.imageUrl && <p style={styles}>{errors.imageUrl}</p>}
            </div>
           
            
    </div>
   
    
    <button disabled={!titulo || !sinopsis || !genero || !anio || !director || !imageUrl} className="w-80 h-12 py-2 mt-12  text-center  text-white transition-colors duration-200 transform bg-AccentColor rounded  focus:outline-none hover:bg-LigthBlueLg " onClick={()=> PostMovie(titulo,anio,director,genero,sinopsis,imageUrl)}>Crear</button>
    
    </form>


      </section>
      </div>
      
    </>
  );
};

export default createmovie;