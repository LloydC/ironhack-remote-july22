import React from 'react'
import { v4 as uuid } from 'uuid';

export const MovieCard = ({title, director, genre, year}) => {
  return (
    <div>
        <h2>{title} was directed by {director}</h2>
        <p>Release Year: {year}</p>
       <ul>
            {genre.map(name => <li key={uuid()}>{name}</li>)}
        </ul>
    </div>
  )
}
