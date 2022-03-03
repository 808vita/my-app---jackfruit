import React from "react";
import { Container, Row, Form, Button, Card } from "react-bootstrap";

const Forms = ({
	stepId,
	step,
	buttonText1,
	buttonText2,
	subtitle,
	chainId,
	fiedRequired,
	handleCloseImg,
}) => {
	return (
		<Card body>
			(
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

							<Button variant="btn btn btn-primary spacinglrtb " type="submit">
								{chainId}
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
			)
		</Card>
	);
};

export default Forms;
