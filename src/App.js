import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages
import Home from "./pages/home.js";
import Education from "./pages/education";
// components
import NavBar from "./components/NavBar";

const GlobalStyle = createGlobalStyle`
  body {
		height: 100%;
		background-color: #fffaf029
		margin: 0;
		padding: 5vh 5vw;
  }
`;

const theme = {
	primaryRed: "#e1483d"
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<GlobalStyle />
				<NavBar />
				<Route path="/" exact component={Home} />
				<Route path="/education" component={Education} />
				{/* <Route path="/users/" component={Users} /> */}
			</Router>
		</ThemeProvider>
	);
}

export default App;
