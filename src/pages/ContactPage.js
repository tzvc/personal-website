import React from "react";
import styled from "styled-components";
// components
import PageTitle from "../components/PageTitle";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import stackoverflow from "../assets/stackoverflow.png";

const SocialContainer = styled.div`
	font-family: "Roboto Mono", monospace;
	font-size: 1em;
	font-weight: normal;
`;
const SocialItem = styled.img`
	font-family: "Roboto Mono", monospace;
	font-size: 1em;
	font-weight: normal;
	height: 2em;
	margin-right: 1em;
	margin-top: 1em;
	&:hover {
		opacity: 0.7;
	}
`;

const ContactInfoBlock = styled.pre`
	font-family: "Roboto Mono", monospace;
	font-size: 1em;
	font-weight: normal;
`;

const ContactPage = () => (
	<>
		<PageTitle>Contact</PageTitle>
		{/* <InfoTitle>Infos</InfoTitle> */}
		<ContactInfoBlock>
			<p>
				Name: Théo Champion
				<br />
				Location: Paris, FRANCE
				<br />
				Email:{" "}
				<a href="mailto:contact.theochampion@gmail.com">
					contact.theochampion@gmail.com
				</a>
				<br />
				Phone: (+33)624651305
			</p>
		</ContactInfoBlock>
		<SocialContainer>
			<a href="https://github.com/theochampion">
				<SocialItem src={github}></SocialItem>
			</a>
			<a href="https://www.linkedin.com/in/theo-champion-22a43462/">
				<SocialItem src={linkedin}></SocialItem>
			</a>
			<a href="https://stackoverflow.com/users/7252179/th%c3%a9o-champion">
				<SocialItem src={stackoverflow}></SocialItem>
			</a>
		</SocialContainer>
	</>
);

export default ContactPage;
