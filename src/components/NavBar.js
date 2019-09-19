import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TABS = ["Education", "Work", "Projects", "Contact"];

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const NavElem = styled(Link)`
	font-family: "Roboto Mono", monospace;
	font-size: 0.9em;
	text-decoration: none;
	color: black;
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.primaryRed};
	}
`;

const NavHome = styled(NavElem)`
	margin-right: auto;
`;

const NavTab = styled(NavElem)`
	padding: 0 2em;
`;

const NavBar = () => (
	<Content>
		<NavHome to="/">THEO CHAMPION</NavHome>
		{TABS.map((tab, idx) => (
			<NavTab to={`/${tab.toLocaleLowerCase()}`}>{`0${idx +
				1}. ${tab}`}</NavTab>
		))}
	</Content>
);

export default NavBar;
