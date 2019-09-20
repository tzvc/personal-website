import React from "react";
// components
import Experience from "../components/Experience";
import PageTitle from "../components/PageTitle";
// content
import EducationExperiences from "../content/education.json";

const Education = () => (
	<>
		<PageTitle>Education</PageTitle>
		{EducationExperiences.map(education => (
			<Experience experience={education} />
		))}
	</>
);

export default Education;
