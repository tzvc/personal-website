import React from "react";
import styled from "styled-components";
// components
import Experience from "../components/Experience";

const EDUCATION = [
	{
		name: "Royal Melbourne Institute of Technology",
		duration: "June 2018 - June 2019",
		role: "Master's degree in computer science (study abroad program)",
		content:
			"Topics covered include cloud computing technologies, peer to peer computing system design, IoT and artificial intelligence (evolutionary computing)."
	},

	{
		name: "Epitech Paris",
		duration: "Sept. 2015 - June 2018",
		role: "Bachelor's degree in computer science",
		content:
			"Courses taken include C, C++, SQL and Python Created & developed a unix Shell, Raytracer, diverse clients/servers (IRC, FTP, HTTP, etc), videogame utilizing renderware 3D motor engine & microtrading algorithm."
	},

	{
		name: "Lycée D’Arsonval",
		duration: "Sept. 2011 - June 2014",
		role: "Baccalauréat S (High School Diploma in Science)",
		content:
			"Graduated with honors, majored in engineering. 2nd place at “faite de la science” national robotic competition"
	}
];

const CategoryTitle = styled.h1`
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

const Education = () => (
	<>
		<CategoryTitle>Education</CategoryTitle>
		{EDUCATION.map(education => (
			<Experience experience={education} />
		))}
	</>
);

export default Education;
