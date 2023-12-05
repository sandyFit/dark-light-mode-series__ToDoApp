import React, {createContext, useReducer, useEffect, useState} from "react"
import {reducer as themeReducer} from "./reducer"

export const initialState = {
	theme: "light",
	stats: {
		all: 0,
		todo: 0,
		done: 0,
	},
};

export const GlobalContext = createContext()

export const ContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(themeReducer, initialState)
	const {theme, stats} = state

	// Use state for dynamic theme detection
	const [currentTheme, setCurrentTheme] = useState("light")

	// Detect browser's default theme
	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setCurrentTheme("dark")
		}
	}, [])

	// Apply theme based on stored preference or user's choice
	useEffect(() => {
		// Log the current theme for debugging purposes
		// console.log("Current Theme: ", theme)

		// Update the data-theme attribute on the body to apply the selected theme
		// The body element is the highest hierarchy element that wraps the entire application
		document.body.setAttribute("data-theme", theme)
	}, [theme])

  

	const toggleTheme = () => {
		dispatch({
			type: 'TOGGLE_THEME',
		})
	}


	const updateStats = (newStats) => {
		dispatch({
			type: 'UPDATE_STATS',
			payload: newStats,
		})
	}

	return (
		<GlobalContext.Provider
			value={{
				theme,
                toggleTheme,
				currentTheme,
				stats,
				updateStats,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
