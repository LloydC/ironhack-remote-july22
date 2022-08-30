import React, { useState } from 'react';
import { MovieCard } from './MovieCard';
import { movies } from '../data';

export const MovieList = () => {
    const [movieType, setMovieType] = useState("Drama");
    const [moviesList, setMoviesList] = useState(movies)
    const dramaMovies = moviesList.filter(({genre}) => genre.includes("Drama"));
    const actionMovies = moviesList.filter(({genre}) => genre.includes("Action"));
    const horrorMovies = moviesList.filter(({genre}) => genre.includes("Horror"));


    const handleChange = (event) => {
        setMovieType(event.target.value);
    }

    if(movieType === "Drama"){
        return (
            <div>
                <select onChange={handleChange} value={movieType}>
                    <option value="Drama"> Drama </option>
                    <option value="Action"> Action </option>
                </select>
                {dramaMovies.map(({title, director, year, genre}) => 
                <MovieCard title={title} director={director} year={year} genre={genre} setMoviesList={setMoviesList}/>
                )}
                
            </div>   
        )
    }

    return (
        <div>
            <h1>MovieList</h1>
            <hr/>
            <select onChange={handleChange} value={movieType}>
                    <option value="Drama"> Drama </option>
                    <option value="Action"> Action </option>
                </select>
            {actionMovies.map(({title, director, year, genre}) => <MovieCard title={title} director={director} year={year} genre={genre} setMoviesList={setMoviesList}/>)}
        </div>
    )
}
