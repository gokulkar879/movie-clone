import React, {useState, useContext} from 'react'

import useFetch from './dataFetch'
export const endpoint = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()


const AppProvider = ({children}) => {
    const [query, setQuery] = useState('joker')
    const {loading, error, data:movies} = useFetch(`&s=${query}`)

    return <AppContext.Provider value={{
        loading, 
        error,
        movies,
        query, 
        setQuery 
    }}>
        {
            children
        }
    </AppContext.Provider>
} 
export const useGlobalcontext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider}