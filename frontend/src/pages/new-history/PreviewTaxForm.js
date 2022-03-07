import React, { useRef, useContext, useState, useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../../GlobalState";

const PreviewTaxForm = ({
	stepId,
	step,
	buttonText1,
	buttonText2,
	subtitle,
	chainId,
	fieldRequired,
}) => {
	const Gcontext = useContext(GlobalContext);
	const {
		addRecord,
		createdRecord,
		formState,
		record,

		modifyRecord,
	} = Gcontext;

	const history = useNavigate();

	// const [newlyCreatedRecord, SetNewlyCreatedRecord]=useState({})
	const [newlyCreatedRecord, SetNewlyCreatedRecord] = useState({});
	useEffect(() => {
		if (localStorage.getItem("token")) {
			SetNewlyCreatedRecord(JSON.parse(localStorage.getItem("createdRecord")));
			// SetNewlyCreatedRecord(createdRecord);
			// SetNewlyCreatedRecord(record);
			console.log("here");
		} else {
			history("/");
		}
	}, [record]);
	const [display, setDisplay] = useState(true);
	// setDisplay(true);

	const [inputData, setInputData] = useState({
		bas: 0,
		lta: 0,
		hra: 0,
		fa: 0,
		inv: 0,
		med: 0,
		rent: 0,
		metro: true,
		recordId: 0,
	});
	useEffect(() => {
		console.log("from use effect");
		console.log(newlyCreatedRecord.bas);

		setInputData(newlyCreatedRecord);

		formState.setNote({
			bas: newlyCreatedRecord.bas,
			lta: newlyCreatedRecord.lta,
			hra: newlyCreatedRecord.hra,
			fa: newlyCreatedRecord.fa,
			inv: newlyCreatedRecord.inv,
			med: newlyCreatedRecord.med,
			rent: newlyCreatedRecord.rent,
			metro: newlyCreatedRecord.metro,
			recordId: newlyCreatedRecord._id,
		});
	}, [newlyCreatedRecord]);

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

	const recordChange = (e, text) => {
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
				e.nativeEvent.target.value = 0;
			}
			formState.setNote({
				...formState.note,
				[mappedVar]: e.nativeEvent.target.value,
			});
			setInputData({
				...inputData,
				[mappedVar]: e.nativeEvent.target.value,
			});

			localStorage.setItem(
				"modifiedRecord",
				JSON.stringify({
					...inputData,
					[mappedVar]: e.nativeEvent.target.value,
				})
			);
			console.log(formState.note);
			console.log(e.nativeEvent.target.value);
			// console.log(e.nativeEvent.target.id);
		} else {
			formState.setNote({
				...formState.note,
				mappedVar: e.nativeEvent.target.value,
			});
			setInputData({
				...inputData,
				[mappedVar]: e.nativeEvent.target.value,
			});
			console.log(formState.note);
			localStorage.setItem(
				"modifiedRecord",
				JSON.stringify({
					...inputData,
					[mappedVar]: e.nativeEvent.target.value,
				})
			);
			// console.log(e.nativeEvent.target.value*1);
			// console.log(e.nativeEvent.target.id);
		}
	};

	const previewRecord = () => {
		console.log(formState.note);
		console.log("preview function");

		console.log("adding record");
		const newPost = formState.note;
		modifyRecord(
			newPost.bas,
			newPost.lta,
			newPost.hra,
			newPost.fa,
			newPost.inv,
			newPost.med,
			newPost.rent,
			newPost.metro,
			newPost.recordId
		);

		console.log("edited record");
		history("../taxable-income");

		// formState.setNote(formState.resetNote);
	};

	const formVariables = {
		formBasicPay: "bas",
		formLeaveTravelAllowance: "lta",
		formHouseRentAllowance: "hra",
		formFoodAllowance: "fa",
		formInvestmentsundersection80C: "inv",
		formRent: "rent",
		formMetro: "metro",

		formPremiumpaidforMedicalInsurance: "med",
	};
	return (
		<>
			<Card>
				<Container fluid className="bodyspacing ImgPage pushdown ">
					<div className="mt-3 mb-3 card-containers-form ">
						<div className="card-header-highlight ">
							<h2 className="text-muted">Preview: {subtitle}</h2>
							<h3 className="text-muted pb-5">You can edit , if required.</h3>
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
													onChange={(event) => recordChange(event, field.text)}
													onWheel={(e) => e.target.blur()}
													placeholder="Enter Numbers Only"
													value={
														inputData[
															formVariables[
																`form${field.text.replace(/\s/g, "")}`
															]
														]
													}
												/>
											</Form.Group>

											{field.text === "Rent" && (
												<Form.Group className="mb-3" controlId={`formMetro`}>
													<Form.Label className="h3">Metro City</Form.Label>
													<Form.Select
														onChange={recordChange}
														value={inputData[formVariables[`formMetro`]]}
													>
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
									type={step === "firstStep" ? "button" : "button"}
									onClick={
										step === "firstStep"
											? () => handleScroll(step)
											: () => {
													console.log("sumbit");
													previewRecord();
													console.log(formState.note);
											  }
									}
								>
									{step === "firstStep" ? buttonText1 : "Calculate"}
								</Button>
								{step === "secondStep" && (
									<Button
										variant="btn btn btn-outline-dark spacinglrtb"
										type="button"
										onClick={
											step === "secondStep" ? () => handleScroll(step) : null
										}
									>
										{buttonText2}
									</Button>
								)}
							</Form>
						</div>
					</div>
				</Container>
			</Card>
			<div ref={scrollStep2}></div>
		</>
	);
};

export default PreviewTaxForm;
