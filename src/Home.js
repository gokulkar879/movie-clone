import React from 'react'
import Search from './Search'
import Movies from './Movies'
import Toggle from './Toogle'
  
function Home() {
    
    return (
        <div className="home">
            <Toggle />
            <Search />
            <Movies />
        </div>
    )
}

export default Home
