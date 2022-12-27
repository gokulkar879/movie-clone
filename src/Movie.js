import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './dataFetch'
import Toggle from './Toogle'
function Movie() {
    const {id} = useParams()
    const {loading, error, data: movie} = useFetch(`&i=${id}`)
    if(loading) {
        return <div className="loading">
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
            </svg>
        </div>
    }
    if(error.show) {
        return <div className="error">
            <h2>{error.msg}</h2>
            <Link to="/" className="btn">
                back home
            </Link>
        </div>
    }
    const {Poster: poster, Title: title, Plot: plot, Year: year } = movie;
    return (
        <div className="movie-center">
            <Toggle />
            <div className="singlemovie">
            <img src={poster}>

            </img>
            <div className="movie-info">
            <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
            </div>
            </div>

        </div>
    )
}

export default Movie
