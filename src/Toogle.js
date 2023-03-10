import React,{useState, useEffect} from 'react'
const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };

function Toogle() {
    const [theme, setTheme] = useState(getStorageTheme());


    const toggleTheme = () => {
      if(theme === 'light-theme') {
        setTheme('dark-theme')
      } else {
        setTheme('light-theme')
      }
    }
    useEffect(()=> {
        document.documentElement.className = theme
          localStorage.setItem('theme', theme)
      },[theme])
    return (
        
            <button className="toggle" onClick={toggleTheme}>{theme=='light-theme'?'dark':'light'}</button>
      
    )
}

export default Toogle
