import React from "react";
import { Redirect } from "react-router-dom"

import MoviesService from "../../services/movies.service";


const MovieDetailsPage = ({ match, history }) => {
  const movieId = match.params.id;
  const movie = MoviesService.getMovieById(movieId);

  if (!movie) {
    return (
      <Redirect to="/movies"></Redirect>
    )
  }

  return (
    <div>
      <h3>Movie ID: {movieId}</h3>
      <h4>{movie.title}</h4>
      <img src={movie.poster} alt="poster" />
      <p>{movie.description}</p>

      <button onClick={history.goBack}>Back to list</button>
    </div>
  )
}

export default MovieDetailsPage;
