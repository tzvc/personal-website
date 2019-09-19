import React from "react";
import styled from "styled-components";

const TABS = ["Education", "Work", "Projects", "Contact"];

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const Name = styled.span`
	font-family: "Roboto Mono", monospace;
	margin-right: auto;
	font-size: 0.9em;
	padding: 0 2em;
	color: black;
`;

const Tab = styled.a`
	font-family: "Roboto Mono", monospace;
	font-size: 0.9em;
	padding: 0 2em;
	color: black;
	text-decoration: none;
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.primaryRed};
	}
`;

const NavBar = () => (
	<Content>
		<Name>THEO CHAMPION</Name>
		{TABS.map((tab, idx) => (
			<Tab href={`/${tab.toLocaleLowerCase()}`}>{`0${idx + 1}. ${tab}`}</Tab>
		))}
	</Content>
);

export default NavBar;
