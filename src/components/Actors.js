import React from 'react';
import { actors } from '../data';

const Actors = () => {

  let allActors = actors.map( actor => {
    return (
      <div className='card'>
        <p>Name: {actor.name}</p>
        Films: <ul>{actor.movies.map( movie => <li>{movie}</li>)}</ul>
      </div>
    )
  })
  return (
    <div >
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};

export default Actors;
