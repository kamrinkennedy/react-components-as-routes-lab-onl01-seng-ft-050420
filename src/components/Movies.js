import React from 'react';
import { movies } from '../data';

const Movies = () => {
  // debugger;
  let allMovies = movies.map( movie => {
    return (
      <div className='card'>
          <p>Title: {movie.title}</p>
          <p>Time: {movie.time}</p>
          <p>Genres: <ul>{movie.genres.map( genre => <li>{genre}</li> )}</ul></p>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
        {allMovies}
    </div>
  );
};

export default Movies;
