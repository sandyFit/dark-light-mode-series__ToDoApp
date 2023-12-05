import React, {useContext, useState} from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import {GlobalContext} from "../context/ThemeContext"

const Layout = () => {
	const {currentTheme, stats, updateStats} = useContext(GlobalContext)


	return (
		<div className={ currentTheme === "dark" ? "dark" : "light" }>
			<div className="layout-wrapper">
				<Header stats={ stats } />
				<TodoInput updateStats={ updateStats } />
			</div>
		</div>
	)
}

export default Layout
