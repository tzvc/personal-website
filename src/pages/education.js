import React from "react";
import styled from "styled-components";
// components
import Experience from "../components/Experience";
import PageTitle from "../components/PageTitle";

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

const Education = () => (
	<>
		<PageTitle>Education</PageTitle>
		{EDUCATION.map(education => (
			<Experience experience={education} />
		))}
	</>
);

export default Education;
