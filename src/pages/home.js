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
	color: #e1483d;
	font-size: 36px;
	font-weight: normal;
	font-style: italic;
	letter-spacing: 0px;
	line-height: 1.2em;
	font-family: "EB Garamond", serif;
	font-size: 6.25vw;
	font-weight: 600;
	font-style: normal;
	letter-spacing: -0.01em;
	line-height: 1.3em;
	text-transform: none;
	text-decoration: none;
	margin: 0;
`;

const Home = () => (
	<Content>
		<TitleText>Hi, my name is</TitleText>
		<Title>Théo Champion.</Title>
		<Title>I'm a software engineer in Paris.</Title>
		{/* <TitleText>This website is still under construction.</TitleText> */}
	</Content>
);

export default Home;