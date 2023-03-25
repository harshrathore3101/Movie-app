import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import "./MovieList.css"
import { fetchFromApi } from "../../Utils/fetchApi";


const MovieList = () => {
  const [moviesList, setMoviesList] = useState([]);
  const { type } = useParams();

  const getData = () => {
    fetchFromApi(
      `${
        type ? type : "popular"
      }?api_key=bc8572a7c0cff2560318d87730bc14f5&language=en-US&page=1`
    ).then((data) => setMoviesList(data.results));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <div className="movie__list">
      <h2 className="list__title">{type ? type.toUpperCase() : "POPULAR"}</h2>
      <div className="list__cards">
        {moviesList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
