import React from "react";
import styled from "styled-components";

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding-top: 30vh;
`;

const TitleText = styled.p`
	font-family: "Arial";
	color: #cccccc;
`;

const Title = styled.h1`
	color: ${props => props.theme.primaryRed};
	font-size: 36px;
	font-weight: normal;
	font-style: italic;
	letter-spacing: 0px;
	line-height: 1.2em;
	font-family: "EB Garamond", serif;
	font-size: 5em;
	font-weight: 600;
	font-style: normal;
	letter-spacing: -0.01em;
	line-height: 1.3em;
	text-transform: none;
	text-decoration: none;
	margin: 0;
`;

const HomePage = () => (
	<Content>
		<TitleText>Hi, my name is</TitleText>
		<Title>Théo Champion.</Title>
		<Title>Under construction...</Title>
		{/* <TitleText>This website is still under construction.</TitleText> */}
	</Content>
);

export default HomePage;
