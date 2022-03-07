import { useState, useRef, useEffect, useContext } from "react";
import { Container, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

import { GlobalContext } from "../../GlobalState";
import PreviewTaxForm from "./PreviewTaxForm";

function TaxableIncome({ newHistoryPageData }) {
	const Gcontext = useContext(GlobalContext);
	const { getUser, user, getUserRecords, userRecords, record, createdRecord } =
		Gcontext;

	const history = useNavigate();
	let modifiedRecord;
	useEffect(() => {
		if (localStorage.getItem("token")) {
			modifiedRecord = JSON.parse(localStorage.getItem("modifiedRecord"));
			getUser();

			// console.log(localStorage.getItem("createdRecord"));
			// console.log(localStorage.getItem("modifiedRecord"));

			// console.log(JSON.parse(localStorage.getItem("createdRecord")));
			// console.log(JSON.parse(localStorage.getItem("createdRecord"))._id);
		} else {
			history("/");
		}
	}, []);

	/////

	const [taxInc, setTaxInc] = useState("");
	const [info, setInfo] = useState({});

	const taxableIncomeFunc = () => {
		if (modifiedRecord.metro === true) {
			const bas = modifiedRecord.bas;
			const lta = modifiedRecord.lta;
			const hra = modifiedRecord.hra;
			const fa = modifiedRecord.fa;
			const inv = modifiedRecord.inv;
			const med = modifiedRecord.med;
			const rent = modifiedRecord.rent;
			const appHra = Math.min(0.5 * bas, rent - 0.1 * bas, hra);
			const answer = Math.round(bas + lta + hra + fa - appHra - inv - med);
			setTaxInc(answer);
		} else {
			const bas = modifiedRecord.bas;
			const lta = modifiedRecord.lta;
			const hra = modifiedRecord.hra;
			const fa = modifiedRecord.fa;
			const inv = modifiedRecord.inv;
			const med = modifiedRecord.med;
			const rent = modifiedRecord.rent;
			const appHra = Math.min(0.4 * bas, rent - 0.1 * bas, hra);
			const answer = Math.round(bas + lta + hra + fa - appHra - inv - med);
			setTaxInc(answer);
		}
	};

	useEffect(() => {
		taxableIncomeFunc();
		setInfo(modifiedRecord);
	}, []);

	///////

	const handleClick = () => {
		history("/home");
	};

	return (
		<>
			<div className="bodyspacing">
				<Header
					headerText={"Tax Filing App"}
					userInfo={`Welcome ${user.name}.\n Registered using ${user.email}.`}
					subtitleText={`View your taxable income!`}
					loggedIn={true}
				/>
				<Container fluid>
					<Row md={3}>
						<div
							className="card text-white bg-success mb-3 d-flex"
							style={{ maxWidth: "25rem" }}
						>
							<div className="card-body">
								<h4 className="card-title">{taxInc}</h4>
								<h5 className="card-title">Taxable Income</h5>
								<p className="card-text">Your total total taxable income.</p>
							</div>
						</div>
						<div
							className="card border-secondary mb-3 d-flex"
							style={{ maxWidth: "25rem" }}
						>
							<div className="card-body">
								<h4 className="card-title">{info.bas}</h4>
								<h5 className="card-title">Basic Pay</h5>
							</div>
						</div>
						<div
							className="card border-secondary mb-3 d-flex"
							style={{ maxWidth: "25rem" }}
						>
							<div className="card-body">
								<h4 className="card-title">{info.lta}</h4>
								<h5 className="card-title">Leave Travel Allowance</h5>
							</div>
						</div>

						<div
							className="card border-secondary mb-3 d-flex"
							style={{ maxWidth: "25rem" }}
						>
							<div className="card-body">
								<h4 className="card-title">{info.hra}</h4>
								<h5 className="card-title">House Rent Allowance</h5>
							</div>
						</div>

						<div
							className="card border-secondary mb-3 d-flex"
							style={{ maxWidth: "25rem" }}
						>
							<div className="card-body">
								<h4 className="card-title">{info.fa}</h4>
								<h5 className="card-title">Food Allowance</h5>
							</div>
						</div>

						<div
							className="card border-secondary mb-3 d-flex"
							style={{ maxWidth: "25rem" }}
						>
							<div className="card-body">
								<h4 className="card-title">{info.inv}</h4>
								<h5 className="card-title">Investments</h5>
							</div>
						</div>

						<div
							className="card border-secondary mb-3 d-flex"
							style={{ maxWidth: "25rem" }}
						>
							<div className="card-body">
								<h4 className="card-title">{info.rent}</h4>
								<h5 className="card-title">Rent</h5>
							</div>
						</div>

						<div
							className="card border-secondary mb-3 d-flex"
							style={{ maxWidth: "25rem" }}
						>
							<div className="card-body">
								<h4 className="card-title">{info.metro ? "Yes" : "No"}</h4>
								<h5 className="card-title">Metro City</h5>
							</div>
						</div>

						<div
							className="card border-secondary mb-3 d-flex"
							style={{ maxWidth: "25rem" }}
						>
							<div className="card-body">
								<h4 className="card-title">{info.med}</h4>
								<h5 className="card-title">Premium paid</h5>
							</div>
						</div>
					</Row>
					<button
						onClick={handleClick}
						className="btn btn btn-outline-dark spacinglrtb"
					>
						Go Back
					</button>
				</Container>
			</div>
		</>
	);
}
export default TaxableIncome;
