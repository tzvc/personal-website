import React from "react";
import styled from "styled-components";

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

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding-top: 30vh;
`;

const EducationEntry = styled.div`
	font-family: "Roboto Mono", monospace;
	font-size: 1em;
	color: black;
`;

const CategoryTitle = styled.h1`
	color: ${props => props.theme.primaryRed};
	font-weight: normal;
	font-style: italic;
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
`;

const ExperienceBlock = styled.div`
	font-family: "Roboto Mono", monospace;
	font-size: 1em;
	color: black;
	margin-bottom: 1em;
`;

const ExperienceBlockHeader = styled.div`
	display: flex;
	align-content: center;
	justify-content: space-between;
`;
const ExperienceTitle = styled.div`
	font-weight: bold;
`;

const ExperienceDuration = styled.div``;

const ExperienceRole = styled.div`
	font-style: italic;
`;

const Education = () => (
	<>
		<CategoryTitle>Education</CategoryTitle>
		{EDUCATION.map(education => (
			<ExperienceBlock>
				<ExperienceBlockHeader>
					<ExperienceTitle>{education.name}</ExperienceTitle>
					<ExperienceDuration>{education.duration}</ExperienceDuration>
				</ExperienceBlockHeader>
				<ExperienceRole>{education.role}</ExperienceRole>
				{education.content}
			</ExperienceBlock>
		))}
	</>
);

export default Education;
