import React from "react";
import Movie from "./Movie";

const movies = [
  {
    id: 1,
    title: "name",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"asd"
  },
  {
    id: 2,
    title: "name",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"asd"
  },
  {
    id: 3,
    title: "name",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"asd"
  },
];

const Listmovies = () => {
  return (
    <div className="flex m-5">
      {movies.map((el) => (
        <Movie movie={el} />
      ))}
    </div>
  );
};

export default Listmovies;
