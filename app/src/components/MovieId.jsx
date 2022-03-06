import React from "react";
import { Link, Redirect, Route, useLocation } from "react-router-dom";

const Comentarios = [
  {
      name: 'Agustin Mateo',
      email: 'Bastante bien... 👌'
  },

  {
      name: 'pablobahiablanca',
      email: 'Esta película tiene la virtud de hacerte perder unos minutos para finalmente maldecir el momento que elegistes verla !!!'
  },
  {
    name: 'JuanAlejoKlldrms',
    email: 'Mala película.'
},

{
    name: 'Veroypelu',
    email: '8 ptos'
},
{
  name: 'citizen kane',
  email: 'excelente película'
},
{
  name: 'oselvaggi',
  email: 'MA LI SI MA!!! PESIMAS ACTUACIONES Y EL GUION UNA PORQUERIA'
},

{
  name: 'Miguel Esteban',
  email: 'Esta mejor la nueva remake, me quede con las ganas'
}
]
const MovieId = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const id = query.get("id");
  const name = query.get("title");
  
  
  //Si no trae un Id lo manda de vuelta
  if (id === null) return <Redirect to="/" />
  const CommentClass = "block rounded-xl bg-SecondaryColor border border-LigthBlueText text-LigthBlueText my-3.5 p-2 text-sm  md:my-6"
  return (
    <div className=" h-fit overflow-x-hidden  bg-MainColor relative sm:h-max ">
      <div className=" block relative pt-10 mx-auto  h-2.5/5 py-7 ssm:flex ssm:mx-10">
        
        <img className=" mx-auto h-36 ssm:h-52 md:h-80 md:px-10 contain  " src="https://m.media-amazon.com/images/M/MV5BMTU1MzY2NDc2MV5BMl5BanBnXkFtZTgwMTc3MTUzMzI@._V1_.jpg"></img>
        
          <div className="flex-row pt-2 ">
            <div className="flex">
            <h1 className="ml-8 pt-1 font-Roboto font-bold text-white md:text-base ">La matanza de Texas </h1><span className="ml-1 mt-1.5 text-LigthBlueText text-sm " > (1976)</span>
            </div>
            <p className=" px-8 text-LigthBlueText text-xs ssm:pr-20 md:pr-96 md:text-base ">Cinco amigos se dirigen a una zona rural de Texas para visitar la tumba de un abuelo. En el camino se topan con lo que parece ser una casa abandonada, solo para descubrir algo siniestro dentro. Algo armado con una motosierra.</p>
            <p className=" mt-1 px-8 text-white text-normal text-sm md:text-base">Director:<span className="ml-1 text-LigthBlueText">Director</span></p>
            <p className=" mt-1 px-8 text-white text-normal text-sm md:text-base">Categoria :<span className="ml-1 text-LigthBlueText">Terror</span></p>
          </div>
      </div>


      <p className=" px-8  text-LigthBlueText text-normal text-sm md:text-base md:mx-10">Editar pelicula :</p>
      <div className="px-12 mt-4 flex space-x-1 justify-between text-sm text-white m-auto ssm:inline-block"><button className="bg-AccentColor border h-7 w-36 rounded-xl  md:mx-5"> Editar </button><button className="bg-rose-700 border h-7 w-36 rounded-xl"> Borrar </button></div>
      


      <div className="  w-screen mx-auto h-12 p-8 ssm:inline-block">
      <p className=" mt-1 text-white text-normal text-sm  md:mx-10">Comentarios :<span className="ml-1 text-LigthBlueText">8</span></p>
      <form className="flex w-full h-fit max-w-xl  rounded-lg px-0 pt-2">
      <div class="flex">
      <input className="bg-transparent border-b-2 text-white w-full text-m pr-1 ssm:w-60 md:w-96  md:mx-10" placeholder='Type Your Comment' ></input>
      <input type='submit' className="flex-end bg-AccentColor text-white font-medium py-1 text-sm px-3  rounded-lg tracking-wide mr-1 hover:bg-gray-100 " value='Comentar'></input>
      </div>



      </form>
      <div className="my-6 mx- w-full h-72   text-white sc overflow-y-scroll md:my-12  md:px-10">
        
      {Comentarios.map(({ name, email}) => (
        <div className={CommentClass}>
          <div key={name}>{name}</div>
          <div>{email}</div>
        </div>
      ))}
        
      </div>
      </div>



    </div>
  );
};

export default MovieId;
