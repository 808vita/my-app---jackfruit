import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Forms = ({ id, img, header, subtitle, chainId, handleCloseImg }) => {
	return (
		<Card body>
			{header === "Login" ? (
				<Container fluid className="bodyspacing ImgPage pushdown ">
					<div className="mt-3 mb-3 card-containers-form ">
						<div className="card-header-highlight ">
							<h2 className="text-muted">{subtitle}</h2>
							<h3 className="text-muted pb-5">{chainId}</h3>
							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className="h3">Email address</Form.Label>
									<Form.Control
										className="form-element"
										type="email"
										placeholder="Enter email"
									/>
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label className="h3">Password</Form.Label>
									<Form.Control
										className="form-element"
										type="password"
										placeholder="Password"
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
							<Form>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className="h3">Name</Form.Label>
									<Form.Control
										className="form-element"
										type="email"
										placeholder="Enter Full Name"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label className="h3">Email address</Form.Label>
									<Form.Control
										className="form-element"
										type="email"
										placeholder="Enter email"
									/>
									<Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label className="h3">Password</Form.Label>
									<Form.Control
										className="form-element"
										type="password"
										placeholder="Password"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="confimrPassword">
									<Form.Label className="h3">Password</Form.Label>
									<Form.Control
										className="form-element"
										type="password"
										placeholder="Re-enter Password"
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
