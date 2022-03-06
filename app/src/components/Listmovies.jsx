import React from "react";
import Movie from "./Movie";

const movies = [
  {
    id: 1,
    title: "Uncharted",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"https://m.media-amazon.com/images/M/MV5BOTNkN2ZmMzItOTAwMy00MmM5LTg5YTgtNmE5MThkMDE2ODJiXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
  },
  {
    id: 2,
    title: "El caballero oscuro",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
  },
  {
    id: 3,
    title: "Interestelar",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"https://m.media-amazon.com/images/I/81kz06oSUeL._AC_SL1500_.jpg"
  },
  {
    id: 4,
    title: "Ted",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 5,
    title: "El Alpinista",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"https://m.media-amazon.com/images/M/MV5BOWY1NTBmOTQtYzgxMi00NjU0LTliNGEtNmUwNmQzZGVjNzhkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 6,
    title: "Forrest Gump",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 7,
    title: "Cazafantasmas",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"https://m.media-amazon.com/images/M/MV5BMmZiMjdlN2UtYzdiZS00YjgxLTgyZGMtYzE4ZGU5NTlkNjhhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
  },
  {
    id: 8,
    title: "Hamilton",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg"
  },
  {
    id: 9,
    title: "It Follows",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"https://m.media-amazon.com/images/M/MV5BMmU0MjBlYzYtZWY0MC00MjliLWI3ZmUtMzhlZDVjMWVmYWY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 10,
    title: "La matanza de Texas",
    sinopsis: "asdasdasdasd",
    director: "asdasd",
    genero: "asdasdsad",
    imgURL:"https://m.media-amazon.com/images/M/MV5BMTU1MzY2NDc2MV5BMl5BanBnXkFtZTgwMTc3MTUzMzI@._V1_.jpg"
  }
];

const Listmovies = () => {
  return (
    <div className="aling-center  bg-MainColor px-3 py-10 z-0 h-fit">
    <div className=" aling-center grid grid-cols-2 ssm:grid-cols-3 mdl:grid-cols-4 gap-3 lg:grid-cols-5 mx-auto bg-MainColor text-white  ">
      {movies.map((el) => (
        <Movie movie={el} />
      ))}
    </div>
    </div>
    
  );
};

export default Listmovies;
