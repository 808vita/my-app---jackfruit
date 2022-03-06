import { useState, useRef, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

import { GlobalContext } from "../../GlobalState";
import PreviewTaxForm from "./PreviewTaxForm";

function PreviewPage({ newHistoryPageData }) {
	const Gcontext = useContext(GlobalContext);
	const {
		getUser,
		user,
		getUserRecords,
		getUserRecord,
		userRecords,
		record,
		createdRecord,
	} = Gcontext;

	const history = useNavigate();
	const [newlyCreatedRecord, setNewlyCreatedRecord] = useState({});
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			getUser();
			getUserRecords();

			// setNewlyCreatedRecord(JSON.parse(localStorage.getItem("createdRecord")));
			// getUserRecord(JSON.parse(localStorage.getItem("createdRecord"))._id);
			// getUserRecord();

			setDisplay(true);
			// console.log(userRecords);
			// console.log("try record");
			// console.log(JSON.parse(localStorage.getItem("createdRecord"))._id);
		} else {
			history("/");
		}
	}, []);

	///////

	const scrollFullImg = useRef();

	const [showFull, setShowFull] = useState({
		show: false,
		data: newHistoryPageData[0].steps,
	});
	const [cardsData, setCardsData] = useState(newHistoryPageData);
	console.log(cardsData);

	return (
		<div className="bodyspacing">
			<Header
				headerText={"Tax Filing App"}
				userInfo={`Welcome ${user.name}.\n Registered using ${user.email}.`}
				subtitleText={`Calculate Taxable Income. Press calculate after confirming all details.`}
				loggedIn={true}
			/>

			<div className="showFull" ref={scrollFullImg}>
				{showFull.data.map((formData) => (
					<PreviewTaxForm key={formData.stepId} {...formData} record={record} />
				))}
			</div>
		</div>
	);
}
export default PreviewPage;
