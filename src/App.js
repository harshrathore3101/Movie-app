import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home.js";
import Movie from "./Components/MovieDetails/Movie";
import MovieList from "./Components/MovieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/movies/:type" element={<MovieList/>} />
        <Route path="/*" element={<h1>Error Page</h1>} />
      </Routes>
    </div>
  );
};

export default App;
