import styled from "styled-components";

export const NavDrawer = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.primaryBackground};
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
	box-shadow: ${({ open }) =>
		open ? "0px 0px 30px 0px #e4e3e2;" : "0px 0px 0px 0px ;"};
`;
