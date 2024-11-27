// src/components/Movies.js
import React from 'react';
import movies from '../data/movies'; 
import MovieCard from './MovieCard'; 

const Movies = () => {
  return (
    <div>
      <h2>Movies</h2>
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
