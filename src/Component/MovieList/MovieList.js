import React from 'react'
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from "prop-types";


function MovieList(movie, searchText, searchRate) {

    return (
        <div>
            {movie.filter((el) => el.name.toLowerCase().includes(searchText.toLowerCase())
                && el.rating >= searchRate).map((el) => (
                    <MovieCard key={el.id} movie={el} />
                ))}
        </div>
    )
}

export default MovieList;
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };

