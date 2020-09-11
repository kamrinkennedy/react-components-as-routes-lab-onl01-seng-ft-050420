import React from 'react';
import { directors } from '../data';

let allDirectors = directors.map( director => {
  return (
    <div className='card'>
      <p>Name: {director.name}</p>
      Films: <ul>{director.movies.map( movie => <li>{movie}</li>)}</ul>
    </div>
  )
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {allDirectors}
    </div>
  );
}

export default Directors
