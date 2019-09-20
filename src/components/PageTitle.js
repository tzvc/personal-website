import styled from "styled-components";

const PageTitle = styled.h1`
	color: ${props => props.theme.primaryRed};
	letter-spacing: 0px;
	line-height: 1.2em;
	font-family: "EB Garamond", serif;
	font-size: 4em;
	font-weight: 600;
	font-style: normal;
	letter-spacing: -0.01em;
	line-height: 1.3em;
	text-transform: none;
	text-decoration: none;
	margin: 0;
	padding-top: 1em;
	margin-bottom: 1em;
`;

export default PageTitle;
