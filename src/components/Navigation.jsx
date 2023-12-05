import React, { useContext } from 'react'
import { GlobalContext } from '../context/ThemeContext'
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navigation = () => {
	console.log("Navigation Component Rerendered!");

	const { theme, currentTheme, toggleTheme } = useContext(GlobalContext)
	// console.log("Current Theme Inside JSX: ", theme)

    return (
			<div className={currentTheme === "dark" ? "dark" : "light"}>
				<div className='nav-box'>
					<h1>Your ToDo List</h1>
					<button onClick={toggleTheme}>
						{theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
					</button>
				</div>
			</div>
		);
}

export default Navigation
