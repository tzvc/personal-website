import React from "react";
import styled from "styled-components";
// components
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
// content
import Projects from "../content/projects.json";

const ProjectCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	justify-content: flex-start;
`;

const ProjectPage = () => (
	<>
		<PageTitle>Projects</PageTitle>
		<ProjectCardWrapper>
			{Projects.map(project => (
				<ProjectCard
					title={project.title}
					description={project.description}
					url={project.url}
					thumbnail_src={project.thumbnail_src}
				/>
			))}
		</ProjectCardWrapper>
	</>
);

export default ProjectPage;
