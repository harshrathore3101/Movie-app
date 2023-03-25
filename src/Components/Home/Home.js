import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Home/Home.css";
import { fetchFromApi } from "../../Utils/fetchApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchFromApi(
      `popular?api_key=bc8572a7c0cff2560318d87730bc14f5&language=en-US&page=1`
    ).then((data) => setPopularMovies(data.results));
  }, []);
  // console.log(popularMovies);
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link style={{ textDecoration: "none" }} to={`/movie/${movie.id}`}>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage_runTime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage_rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage_description ">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      {/* <Card/> */}
    </>
  );
};

export default Home;
