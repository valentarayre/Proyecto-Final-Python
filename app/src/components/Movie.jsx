import React from "react";
import { Link } from "react-router-dom";

const movie = ({ movie }) => {
  return (
    <>
      
      <Link 
        className=" text-white  text-center mt-5 mx-auto w-10/12 ssm::w-11/12 group mdl:w-auto"
        to={{ pathname: "movie", search: `?id=${movie.id}` }}
      >
        
        <img className="h-48 mdl:w-84 md:h-96 object-contain cursor-pointer bg-MainColor   group-hover:opacity-50 duration-300 z-10" src={movie.imgURL}  />
        <div className=" font-Mont text-sm font-medium  mt-1 group-hover:text-AccentColor duration-300">{movie.title}</div>        
      </Link>
      
    </>
  );
};

export default movie;
