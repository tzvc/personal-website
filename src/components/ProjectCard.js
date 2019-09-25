import React from "react";
import styled from "styled-components";

const CardWrapper = styled.a`
	overflow: hidden;
	text-decoration: none;
	width: 550px;
	font-family: "Roboto Mono", monospace;
	font-weight: 300;
	font-size: 1em;
	color: black;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
	display: flex;
	align-content: center;
	justify-content: center;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
	margin-bottom: 1em;
	margin-right: 1em;
`;

const CardContent = styled.div`
	padding: 1em;
`;

const CardTitle = styled.div`
	font-weight: bold;
	margin-bottom: 1em;
`;

const CardThumbnail = styled.img`
	max-height: 10em;
	// width: 6em
`;

const ProjectCard = ({ title, description, url, thumbnail_src }) => (
	<CardWrapper href={url}>
		<CardContent>
			<CardTitle>{title}</CardTitle>
			{description}
		</CardContent>

		<CardThumbnail src={thumbnail_src} />
	</CardWrapper>
);

export default ProjectCard;
