import { useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import CardsNew from "../../components/CardsNew";
import Header from "../../components/Header";

// import { startingPageData } from "../../pageData";

import Forms from "./NewTaxForm";

// const dataOnly = pageData[2];
// const showFullImg = { show: true, data: dataOnly };

function NewHistory({ newHistoryPageData }) {
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

		scrollFullImg.current.scrollIntoView({ behavior: "smooth" });
		const newCardsData = cardsData.map((cardData) =>
			data.id === cardData.id
				? { ...cardData, active: true }
				: { ...cardData, active: false }
		);
		setCardsData(newCardsData);
	};

	const handleCloseImg = () => {
		setShowFull({ show: false, data: {} });
		setCardsData(newHistoryPageData);
	};

	return (
		<div className="bodyspacing">
			<Header
				headerText={"Tax Filing App"}
				subtitleText={"Tax filing made easy! Login / Register to continue."}
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
