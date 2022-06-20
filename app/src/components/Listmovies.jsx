import React, { useEffect, useState, useContext, useRef } from "react";
import Movie from "./Movie";
import Loader from "../components/Loader";
import { LoginContext } from "../helper/Context";

// buscador

const getFilteredItems = (query, items) => {
  if (!query){
    return items;
  }
  return items.filter(movie => movie.title.toLowerCase().includes(query))
}

const Listmovies = () => {

const [query, setQuery] = useState("")
const { loggedIn , setLoggedIn } = useContext(LoginContext)
const [Movies,setMovies] = useState([{}])
const [Loading,setLoading] = useState(true)
var myHeaders = new Headers();
myHeaders.append('Content-Type','text/plain; charset=UTF-8');

useEffect(() => {
  let url
  loggedIn?
  url = "http://127.0.0.1:5000/home"
  :
  url = "http://127.0.0.1:5000/"
  fetch(url, myHeaders).then(
    res => res.json()
  ).then(
    (res) => {
      setMovies(res)
      setLoading(false)
      
    }
  ).catch(function (error) {
    console.log("No se pudo fetchear")
  });
},[loggedIn])

 const filtereditems = getFilteredItems(query, Movies)
  return (
    <div className="aling-center  bg-MainColor px-3 py-10 z-0 min-h-screen">
        <div className= "flex justify-center pb-10">
          <div className="w-2/3">
          <label class="form-label inline-block mb-2 text-white"> Search </label>
                <input type="Search" onChange={(e) => setQuery(e.target.value.toLowerCase())} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></input>
          </div>
        </div>
    <div className=" aling-center grid grid-cols-2 ssm:grid-cols-3 mdl:grid-cols-4 gap-3 lg:grid-cols-5 mx-auto bg-MainColor text-white  ">
      {
      
     
      (Loading && <Loader />)}
      {filtereditems.map(data => <Movie movie={data}/>)}
    </div>
    </div>
    
  );
};

export default Listmovies;
