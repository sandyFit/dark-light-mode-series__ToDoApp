import Layout from "./components/Layout"
import Navigation from "./components/Navigation"
import { ContextProvider } from "./context/ThemeContext"

function App() {

  return (
		<ContextProvider>
			<Navigation />
			<Layout />
		</ContextProvider>
	);
}

export default App
