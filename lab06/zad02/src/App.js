import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";

import { LanguageProvider } from "./components/LanguageContext/LanguageContext";

import movies from "./movies2.json";

const App = () => (
  <div>
    <LanguageProvider value="en">
      <Title title="Movies 2018" />
      {movies.map(movie => (
        <Post
          key={movie.id}
          title={movie.title}
          image={movie.poster}
          text={movie.description}
          rating={movie.rating}
        />
      ))}
    </LanguageProvider>
  </div>
);

export default App;
