import React from 'react'
import {useGlobalcontext} from './context'

function Search() {
    const {query, setQuery, error} = useGlobalcontext()

    return (
       
            <form onSubmit={e=>e.preventDefault()} className="form">
                <h3>Search Movies</h3>
                <input type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}></input>
                {
                    error.show && <div className="error-msg">{error.msg}</div>
                }

            </form>
       
    )
}

export default Search
