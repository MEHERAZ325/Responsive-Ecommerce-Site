import lightButton from '../../assets/website/light-mode-button.png'
import darkButton from '../../assets/website/dark-mode-button.png'
import React from 'react'

const Darkmode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    React.useEffect(() => {
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme])

  return (
    <div className='relative'>
        <img src={lightButton} alt="lightBtn" 
         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
         className={`w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} `}
        />
        <img src={darkButton} alt="Darkbutton" 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className='w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 ' />
    </div>
  )
}

export default Darkmode