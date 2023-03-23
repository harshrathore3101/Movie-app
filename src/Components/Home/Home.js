import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import { fetchFromApi } from "../../Utils/fetchApi";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetchFromApi(
      `popular?api_key=bc8572a7c0cff2560318d87730bc14f5&language=en-US&page=1`
    ).then((data) => setPopularMovies(data.results));
  }, []);

  return <div>Home</div>;
};

export default Home;
