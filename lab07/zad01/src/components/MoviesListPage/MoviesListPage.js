import React from "react";
import { Link } from "react-router-dom"

import MoviesService from "../../services/movies.service";

const MoviesListPage = () => {
  const movies = MoviesService.getMovies();
  return (
    <div>
      <h3>Mobies List Page</h3>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link></div>
      ))}
    </div>
  )
}

export default MoviesListPage;
