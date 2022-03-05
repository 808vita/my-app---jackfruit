import { useState, useRef, useEffect, useContext } from "react";

import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardsNew from "../../components/CardsNew";
import Header from "../../components/Header";

// import { startingPageData } from "../../pageData";
import { GlobalContext } from "../../GlobalState";
import Forms from "./NewTaxForm";

// const dataOnly = pageData[2];
// const showFullImg = { show: true, data: dataOnly };

function NewHistory({ newHistoryPageData }) {
	const Gcontext = useContext(GlobalContext);
	const { getUser, user, getUserRecords, UserRecords } = Gcontext;

	const history = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			history("/");
		}
	}, []);

	///////

	const scrollFullImg = useRef();

	const [showFull, setShowFull] = useState({
		show: false,
		data: {},
	});
	const [cardsData, setCardsData] = useState(newHistoryPageData);
	console.log(cardsData);
	const handleImg = (data) => {
		// console.log(data);
		setShowFull({ show: true, data: data.steps });
		console.log(data);
		scrollFullImg.current.scrollIntoView({ behavior: "smooth" });
		const newCardsData = cardsData.map((cardData) =>
			data.id === cardData.id
				? { ...cardData, active: true }
				: { ...cardData, active: false }
		);
		setCardsData(newCardsData);
		if (data.header === "New ITR") {
			window.history.replaceState(
				null,
				`${data.header}`,
				"/home/new-tax-filing"
			);
		} else if (data.header === "Tax History") {
			window.history.replaceState(null, `${data.header}`, "/home/tax-history");
		}
	};

	const handleCloseImg = () => {
		setShowFull({ show: false, data: {} });
		setCardsData(newHistoryPageData);
	};

	return (
		<div className="bodyspacing">
			<Header
				headerText={"Tax Filing App"}
				userInfo={`Welcome ${user.name}.\n Registered using ${user.email}.`}
				subtitleText={`Create new tax filing / view tax history.`}
				loggedIn={true}
			/>

			<div className="showFull" ref={scrollFullImg}>
				{/* {showFull.show && (
					<Forms {...showFull.data} handleCloseImg={handleCloseImg} />
				)} */}
				{showFull.show &&
					showFull.data.map((formData) => (
						<Forms
							key={formData.stepId}
							{...formData}
							handleCloseImg={handleCloseImg}
						/>
					))}
			</div>

			{/* {showFullImg.show && <ImgPage {...showFullImg.data} />} */}

			<Container fluid className="body-container">
				<Row md={2} sm={1}>
					{/* <Cards {...dataOnly} /> */}
					{cardsData.map((card) => {
						return <CardsNew key={card.id} {...card} handleImg={handleImg} />;
					})}
				</Row>
			</Container>
		</div>
	);
}
export default NewHistory;
