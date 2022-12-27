import React from 'react'
import {useGlobalcontext} from './context'
import { Link } from 'react-router-dom'
const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

  

function Movies() {
    const {movies, loading} = useGlobalcontext()

    if(loading) {
        return <div className="loading">
             <svg>
                <circle cx="70" cy="70" r="70"></circle>
            </svg>
        </div>
    }

    return (
        <div className="movies">
            {
                movies.map(movie => {
                    const {imdbID: id, Poster: poster, Title: title, Year: year} = movie
                    return(
                        <Link to={`/movies/${id}`} key={id} className="movie">
                            <div className="center">
                               <img src={poster === 'N/A'? url:poster}></img>
                               <div className="movie-info">
                                   <h4 className="title">{title}</h4>
                                   <p>{year}</p>
                               </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Movies
