import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
// pages
import Home from "./pages/home.js";
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
			<>
				<GlobalStyle />
				<NavBar />
				<Home />
			</>
		</ThemeProvider>
	);
}

export default App;
