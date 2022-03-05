import React, { useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";

const Forms = ({ id, img, header, subtitle, chainId, handleCloseImg }) => {
	////////////////////
	const location = useLocation();
	const history = useNavigate();

	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	// const [credentials, setCredentials] = useState({ email: "", password: "" });
	// let history = useHistory();

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		console.log(JSON.stringify({ email: loginEmail, password: loginPassword }));
		const response = await fetch("/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: loginEmail, password: loginPassword }),
		});
		const json = await response.json();
		console.log(json.authToken);
		if (json.success) {
			localStorage.setItem("token", json.authToken);
			console.log("logged in..");
			history("/home"); //redirecting to "/" endpoint
		} else {
			alert("Invalid Credintials");
		}
	};

	const loginEmailChange = (e) => {
		setLoginEmail(e.target.value);
	};
	const loginPasswordChange = (e) => {
		setLoginPassword(e.target.value);
	};

	///////////////////

	/////////////////

	const [signUpName, setSignUpName] = useState("");
	const [signUpEmail, setSignUpEmail] = useState("");
	const [signUpPassword, setSignUpPassword] = useState("");
	const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");

	// const [credentials, setCredentials] = useState({ email: "", password: "" });
	// let history = useHistory();

	const handleSignUpSubmit = async (e) => {
		e.preventDefault();
		console.log(
			JSON.stringify({
				email: signUpEmail,
				password: signUpPassword,
				cpassword: signUpConfirmPassword,
			})
		);
		const response = await fetch("/api/auth/newUser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: signUpName,
				email: signUpEmail,
				password: signUpPassword,
			}),
		});
		const json = await response.json();
		console.log(json);

		localStorage.setItem("token", json.authToken);
		handleCloseImg();
		history("/");
	};

	const signUpEmailChange = (e) => {
		setSignUpEmail(e.target.value);
	};
	const signUpPasswordChange = (e) => {
		setSignUpPassword(e.target.value);
	};

	const signUpConfirmPasswordChange = (e) => {
		setSignUpConfirmPassword(e.target.value);
	};
	const signUpNameChange = (e) => {
		console.log(e.target.value);
		setSignUpName(e.target.value);
	};

	/////////////////

	return (
		<Card body>
			{header === "Login" ? (
				<Container fluid className="bodyspacing ImgPage pushdown ">
					<div className="mt-3 mb-3 card-containers-form ">
						<div className="card-header-highlight ">
							<h2 className="text-muted">{subtitle}</h2>
							<h3 className="text-muted pb-5">{chainId}</h3>
							<Form onSubmit={handleLoginSubmit}>
								<Form.Group className="mb-3" controlId="loginEmail">
									<Form.Label className="h3">Email address</Form.Label>
									<Form.Control
										className="form-element"
										type="email"
										placeholder="Enter email"
										onChange={loginEmailChange}
									/>
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group className="mb-3" controlId="loginPassword">
									<Form.Label className="h3">Password</Form.Label>
									<Form.Control
										className="form-element"
										type="password"
										placeholder="Password"
										onChange={loginPasswordChange}
									/>
								</Form.Group>

								<Button
									variant="btn btn btn-primary spacinglrtb "
									type="submit"
								>
									{header}
								</Button>
								<Button
									variant="btn btn btn-outline-dark spacinglrtb"
									type="button"
									onClick={handleCloseImg}
								>
									Cancel
								</Button>
							</Form>
						</div>
					</div>
				</Container>
			) : (
				<Container fluid className="bodyspacing ImgPage pushdown">
					<div className="mt-3 mb-3 card-containers-form ">
						<div className="card-header-highlight ">
							<h2 className="text-muted">{subtitle}</h2>
							<h3 className="text-muted pb-5">{chainId}</h3>
							<Form onSubmit={handleSignUpSubmit}>
								<Form.Group className="mb-3" controlId="NewName">
									<Form.Label className="h3">Name</Form.Label>
									<Form.Control
										className="form-element"
										type="text"
										placeholder="Enter Full Name"
										onChange={signUpNameChange}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="NewEmail">
									<Form.Label className="h3">Email address</Form.Label>
									<Form.Control
										className="form-element"
										type="email"
										placeholder="Enter email"
										onChange={signUpEmailChange}
									/>
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group className="mb-3" controlId="NewPassword">
									<Form.Label className="h3">Password</Form.Label>
									<Form.Control
										className="form-element"
										type="password"
										placeholder="Password"
										onChange={signUpPasswordChange}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="ConfimrPassword">
									<Form.Label className="h3">Confirm Password</Form.Label>
									<Form.Control
										className="form-element"
										type="password"
										placeholder="Re-enter Password"
										onChange={signUpConfirmPasswordChange}
									/>
								</Form.Group>
								<Button
									variant="btn btn btn-primary spacinglrtb "
									type="submit"
								>
									{header}
								</Button>
								<Button
									variant="btn btn btn-outline-dark spacinglrtb"
									type="button"
									onClick={handleCloseImg}
								>
									Cancel
								</Button>
							</Form>
						</div>
					</div>
				</Container>
			)}
		</Card>
	);
};

export default Forms;
