import { GlobalContext } from '../context/ThemeContext'
import { useContext } from 'react';

const Header = () => {

	const { currentTheme, stats } = useContext(GlobalContext)


	return (
		<div className={currentTheme === "dark" ? "dark" : "light"}>
			<div className="header-wrapper">
				<h1>ToDos</h1>
				<h3>All ({stats.all})</h3>
				<h3>ToDo ({stats.todo})</h3>
				<h3>Done ({stats.done})</h3>
			</div>
		</div>
	);
}

export default Header
