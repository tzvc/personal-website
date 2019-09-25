import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Burger from "./BurgerButton";
import { NavDrawer } from "./NavDrawer";

const TABS = ["Education", "Work", "Projects", "Contact"];

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const NavTabContainer = styled.div`
	@media (max-width: ${({ theme }) => theme.tablet}) {
		display: none;
	}
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

export const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = event => {
			// if (!ref.current || ref.current.contains(event.target)) {
			// 	return;
			// }
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
		};
	}, [ref, handler]);
};

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	const navTabs = TABS.map((tab, idx) => (
		<NavTab to={`/${tab.toLocaleLowerCase()}`}>{`0${idx + 1}. ${tab}`}</NavTab>
	));
	console.log(open);
	return (
		<Content>
			<NavHome to="/">THEO CHAMPION</NavHome>
			<NavTabContainer> {navTabs}</NavTabContainer>
			<Burger open={open} onClick={setOpen} />
			<NavDrawer ref={node} open={open}>
				{navTabs}
			</NavDrawer>
		</Content>
	);
};

export default NavBar;
