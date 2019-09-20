import React from "react";
// components
import PageTitle from "../components/PageTitle";

const contact = `
{
	"name": Théo Champion
	"location": Paris, FRANCE
	"email_address": contact.theochampion@gmail.com
	"phone_number": (+33)624651305
}
`;

const ContactPage = () => (
	<>
		<PageTitle>Contact</PageTitle>
		<pre>{contact}</pre>
	</>
);

export default ContactPage;
