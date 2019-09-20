import React from "react";
import styled from "styled-components";

const ExperienceBlock = styled.div`
	font-family: "Roboto Mono", monospace;
	font-weight: 300;
	font-size: 1em;
	color: black;
	margin-bottom: 3em;
`;

const ExperienceBlockHeader = styled.div`
	display: flex;
	align-content: center;
	justify-content: space-between;
`;
const ExperienceTitle = styled.div`
	font-weight: bold;
`;

const ExperienceDuration = styled.div`
	font-weight: 300;
`;

const ExperienceRole = styled.div`
	font-style: italic;
	font-weight: 300;
	padding-bottom: 1em;
`;

const Experience = ({ experience }) => (
	<ExperienceBlock>
		<ExperienceBlockHeader>
			<ExperienceTitle>{experience.name}</ExperienceTitle>
			<ExperienceDuration>{experience.duration}</ExperienceDuration>
		</ExperienceBlockHeader>
		<ExperienceRole>{experience.role}</ExperienceRole>
		{experience.content}
	</ExperienceBlock>
);

export default Experience;
