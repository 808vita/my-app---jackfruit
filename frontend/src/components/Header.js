import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
const Header = ({ headerText, subtitleText, loggedIn, userInfo }) => {
	const history = useNavigate();

	const bannerClick = () => {
		if (localStorage.getItem("token")) {
			history("/home");
		} else {
			history("/");
		}
	};

	const handleLogout = () => {
		console.log("signed out");
		localStorage.removeItem("token");
		history("/");
	};
	return (
		<Container fluid className="mb-5">
			<h1 onClick={bannerClick} className="main-header">
				{headerText}
			</h1>
			{loggedIn && <h5>{userInfo}</h5>}
			<p>
				<i className="fas fa-check-circle p-1"></i>
				{subtitleText}
			</p>
			{loggedIn && (
				<button type="button" onClick={handleLogout} className="btn btn-link">
					SignOut
				</button>
			)}
		</Container>
	);
};

export default Header;
