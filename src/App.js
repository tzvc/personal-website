import React from "react";
import styled, { createGlobalStyle } from "styled-components";
// pages
import Home from "./pages/home.js";

const GlobalStyle = createGlobalStyle`
  body {
		height: 100%;
		background-color: #fffaf029
		margin: 0;
		padding: 5vh 5vw;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Home />
		</>
	);
}

export default App;
