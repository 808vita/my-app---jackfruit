import { useState, useRef, useEffect, useContext } from "react";
import { Container, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

import { GlobalContext } from "../../GlobalState";
import PreviewTaxForm from "./PreviewTaxForm";

function AllTaxRecords({ newHistoryPageData }) {
	const Gcontext = useContext(GlobalContext);
	const { getUser, user, getUserRecords, userRecords, record, createdRecord } =
		Gcontext;

	const history = useNavigate();
	let modifiedRecord;
	let taxRecords;
	useEffect(() => {
		if (localStorage.getItem("token")) {
			modifiedRecord = JSON.parse(localStorage.getItem("modifiedRecord"));
			taxRecords = JSON.parse(localStorage.getItem("userRecords"));

			getUser();

			localStorage.setItem(
				"createdRecord",
				JSON.stringify({
					bas: 0,
					lta: 0,
					hra: 0,
					fa: 0,
					inv: 0,
					med: 0,
					rent: 0,
					metro: true,
					_id: 0,
				})
			);

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
			const appHra = Math.min(0.5 * bas, 0.1 * rent, hra);
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
			const appHra = Math.min(0.4 * bas, 0.1 * rent, hra);
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
					subtitleText={`View all tax records`}
					loggedIn={true}
				/>
				<Container fluid>
					<Row md={3}>
						{
							<div
								className="card border-primary mb-3 d-flex"
								style={{ maxWidth: "25rem" }}
							>
								<div className="card-body">
									<h4 className="card-title">{taxInc}</h4>
									<h5 className="card-title">Taxable Income</h5>
									<p className="card-text">Your total total taxable income.</p>
								</div>
							</div>
						}
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
export default AllTaxRecords;
