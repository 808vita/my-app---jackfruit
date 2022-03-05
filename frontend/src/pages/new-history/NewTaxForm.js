import React, { useRef, useContext, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../../GlobalState";

const Forms = ({
	stepId,
	step,
	buttonText1,
	buttonText2,
	subtitle,
	chainId,
	fieldRequired,
	handleCloseImg,
}) => {
	const Gcontext = useContext(GlobalContext);
	const { addRecord, createdRecord, formState } = Gcontext;

	const history = useNavigate();

	// const [note, setNote] = useState({
	// 	bas: "",
	// 	lta: "",
	// 	hra: "",
	// 	fa: "",
	// 	inv: "",
	// 	med: "",
	// 	rent: "",
	// 	metro: true,
	// });

	const scrollStep2 = useRef();

	const handleScroll = (stepName) => {
		// console.log(data);
		if (stepName === "firstStep") {
			scrollStep2.current.scrollIntoView({ behavior: "smooth" });
		} else {
			const id = "formBasicPay";
			const yOffset = -200;
			const element = document.getElementById(id);
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};
	const testChange = (e, text) => {
		const taskVariables = {
			formBasicPay: "bas",
			formLeaveTravelAllowance: "lta",
			formHouseRentAllowance: "hra",
			formFoodAllowance: "fa",
			formInvestmentsundersection80C: "inv",
			formRent: "rent",
			formMetro: "metro",

			formPremiumpaidforMedicalInsurance: "med",
		};
		let eventElement = e.nativeEvent.target.id;
		const mappedVar = taskVariables[eventElement];
		console.log(eventElement === "formBasicPay");

		console.log(eventElement);
		console.log(taskVariables);

		console.log(mappedVar);

		if (e.nativeEvent.target.id !== "formMetro") {
			const regExp = new RegExp("^\\d+$");
			const isValid = regExp.test(e.nativeEvent.data);
			if (!isValid) {
				e.nativeEvent.target.value = "";
			}
			formState.setNote({
				...formState.note,
				[mappedVar]: e.nativeEvent.target.value,
			});
			console.log(formState.note);
			console.log(e.nativeEvent.target.value);
			// console.log(e.nativeEvent.target.id);
		} else {
			formState.setNote({
				...formState.note,
				mappedVar: e.nativeEvent.target.value,
			});
			console.log(formState.note);

			// console.log(e.nativeEvent.target.value);
			// console.log(e.nativeEvent.target.id);
		}
	};
	return (
		<>
			<Card body>
				<Container fluid className="bodyspacing ImgPage pushdown ">
					<div className="mt-3 mb-3 card-containers-form ">
						<div className="card-header-highlight ">
							<h2 className="text-muted">{subtitle}</h2>
							<h3 className="text-muted pb-5">{chainId}</h3>
							<Form>
								{fieldRequired.map((field) => {
									return (
										<div key={field.id}>
											<Form.Group
												className="mb-3"
												controlId={`form${field.text.replace(/\s/g, "")}`}
											>
												<Form.Label className="h3">{field.text}</Form.Label>
												<Form.Control
													className="form-element"
													type="number"
													// onInput={(e) => {
													// 	// console.log(e.nativeEvent);
													// 	// console.log(e.nativeEvent.data);
													// 	// console.log(e.nativeEvent.target.value);
													// 	const regExp = new RegExp("^\\d+$");
													// 	const isValid = regExp.test(e.nativeEvent.data);
													// 	if (!isValid) {
													// 		e.nativeEvent.target.value = "";
													// 		//  const originalString = e.nativeEvent.target.value;
													// 		//     newString = originalString.replace(/G/-, '');
													// 	}
													// }}
													onChange={(event) => testChange(event, field.text)}
													onWheel={(e) => e.target.blur()}
													placeholder="Enter Numbers Only"
												/>
											</Form.Group>

											{field.text === "Rent" && (
												<Form.Group className="mb-3" controlId={`formMetro`}>
													<Form.Label className="h3">Metro City</Form.Label>
													<Form.Select onChange={testChange}>
														<option>true</option>
														<option>false</option>
													</Form.Select>
												</Form.Group>
											)}
										</div>
									);
								})}
								<Button
									variant="btn btn btn-primary spacinglrtb "
									type={step === "firstStep" ? "button" : "submit"}
									onClick={
										step === "firstStep"
											? () => handleScroll(step)
											: () => console.log("submit")
									}
								>
									{buttonText1}
								</Button>
								<Button
									variant="btn btn btn-outline-dark spacinglrtb"
									type="button"
									onClick={
										step === "secondStep"
											? () => handleScroll(step)
											: () => {
													handleCloseImg();
													formState.setNote(formState.resetNote);
											  }
									}
								>
									{buttonText2}
								</Button>
							</Form>
						</div>
					</div>
				</Container>
			</Card>
			<div ref={scrollStep2}></div>
		</>
	);
};

export default Forms;
