import React from "react";
import { Link } from "react-router-dom";

const createmovie = ({ movie }) => {
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
                Image
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span class="">Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only"></input>
                            </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <input className =" px-10 py-2 mt-0  leading-5 text-white transition-colors duration-200 transform bg-AccentColor rounded hover:bg-LigthBlueLg focus:outline-none "type="submit" value="Crear" />
    </div>
      </form>


      </section>
      </div>
      
    </>
  );
};

export default createmovie;