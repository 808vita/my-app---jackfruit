import React from "react";
import { Container } from "react-bootstrap";
const Header = ({ headerText, subtitleText }) => {
	return (
		<Container fluid className="mb-5">
			<h1 className="main-header">{headerText}</h1>
			<p>
				<i className="fas fa-check-circle p-1"></i>
				{subtitleText}
			</p>
		</Container>
	);
};

export default Header;
