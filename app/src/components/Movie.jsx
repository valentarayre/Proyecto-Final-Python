import React from "react";
import { Link } from "react-router-dom";

const movie = ({ movie }) => {
  return (
    <>
      <Link
        className="m-5"
        to={{ pathname: "movie", search: `?id=${movie.id}` }}
      >
        <div>{movie.title}</div>
        <img src={movie.imgURL}  />
        <div> {movie.sinopsis}</div>
        <div> {movie.director}</div>
        <div> {movie.genero}</div>        
      </Link>
    </>
  );
};

export default movie;
