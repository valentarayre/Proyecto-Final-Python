import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import Message from "../components/Message";
import { Link } from "react-router-dom";

const initialForm = {
  titulo: "",
  año: "",
  director: "",
  genero: "",
  sinopsis: "",
  imageUrl: ""
};

const validationsForm = (form) => {
  const errors = {};
  const regexUrl = /https?:\/\/.*\.(?:png|jpg)/;
  if (!regexUrl.test(form.imageUrl.trim())) {
    errors.imageUrl = "La URL no es valida";
  }
  return errors;
};

const createmovie = ({ movie }) => {
  const {
    form,
    errors,
    loading,
    response,
    responseError,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm, 'api/auth');

  const styles = {
    fontSize: "small",
    fontWeight: "normal",
    color: "#dc3545",
  };
 
  return (
    <>
      
      <div className=" bg-MainColor min-h-[calc(100vh-72px)] py-16">
      <section className=" p-5 mx-2 max-w-4xl  bg-SecondaryColor rounded-md shadow-md sm:p-10 sm:mx-12 md:mx-auto ">
      <h1 className="text-xl font-bold text-white capitalize">Crea una pelicula</h1>
      
      <form>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-white dark:text-gray-200" for="username">Titulo</label>
                <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="username">Año</label>
                <input id="year" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">Director</label>
                <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">Genero</label>
                <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Sinopsis</label>
                <textarea id="textarea" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            
            <div>
                <label class="block text-sm font-medium text-white">
                Imagen (URL)
                </label>
                <input id="emailAddress" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="imageUrl"
                name="imageUrl"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.imageUrl}
                required
                />
                {errors.imageUrl && <p style={styles}>{errors.imageUrl}</p>}
            </div>
           
            
    </div>
   
    
    
    <button className="w-80 h-12 py-2 mt-12  text-center  text-white transition-colors duration-200 transform bg-AccentColor rounded  focus:outline-none hover:bg-LigthBlueLg "value="Crear">Crear</button>
     
      </form>


      </section>
      </div>
      
    </>
  );
};

export default createmovie;