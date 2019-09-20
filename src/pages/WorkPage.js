import React from "react";
// components
import Experience from "../components/Experience";
import PageTitle from "../components/PageTitle";
// content
import EducationExperiences from "../content/work_experience.json";

const WorkPage = () => (
	<>
		<PageTitle>Work Experience</PageTitle>
		{EducationExperiences.map(education => (
			<Experience experience={education} />
		))}
	</>
);

export default WorkPage;
