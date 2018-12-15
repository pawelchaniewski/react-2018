import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";

// import movies from "./movies";
import movies from "./movies2";

import { LanguageProvider } from "./components/LanguageContext/LanguageContext";

const moviesGood = movies.filter(movie => movie.rating > 6);
const moviesBad = movies.filter(movie => movie.rating <= 6);

const renderMovie = movie => (
  <Post
    key={movie.id}
    title={movie.title}
    rating={movie.rating}
    image={movie.poster}
    text={movie.description}
  />
);

const App = () => (
  <div>
    <LanguageProvider value="pl">
      <Title title="Good Movies" />
      {moviesGood.map(renderMovie)}
      <Title title="Bad Movies" />
      {moviesBad.map(renderMovie)}
    </LanguageProvider>
  </div>
);

export default App;
