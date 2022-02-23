import React from "react";
import { Link, Redirect, Route, useLocation } from "react-router-dom";

const MovieId = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const id = query.get("id");

  //Si no trae un Id lo manda de vuelta
  if (id === null) return <Redirect to="/" />

  return (
    <div>
      <h1>MovieId</h1>
      <h2>{id} </h2>
    </div>
  );
};

export default MovieId;
