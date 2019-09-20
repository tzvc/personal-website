import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage.js";
import EducationPage from "./pages/EducationPage";
import WorkPage from "./pages/WorkPage.js";
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
				<Route path="/" exact component={HomePage} />
				<Route path="/education" component={EducationPage} />
				<Route path="/work" component={WorkPage} />
			</Router>
		</ThemeProvider>
	);
}

export default App;
