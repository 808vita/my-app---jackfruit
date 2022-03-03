import { useState, useRef } from "react";
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import HeaderButtons from "../../components/HeaderButtons";
import { pageData } from "../../pageData";

import ImgPage from "./ImgPage";

// const dataOnly = pageData[2];
// const showFullImg = { show: true, data: dataOnly };

function Sample() {
	const scrollFullImg = useRef();

	const [showFull, setShowFull] = useState({
		show: false,
		data: {},
	});
	const [cardsData, setCardsData] = useState(pageData);

	const handleCardData = (flag) => {
		let newInputs = [];

		// setButtonInputs(buttonData);
		if (flag === "trending") {
			newInputs = pageData.filter((data) => data.trending);
		} else if (flag === "latest") {
			newInputs = pageData.filter((data) => data.latest);
		} else if (flag === "popular") {
			newInputs = pageData.filter((data) => data.popular);
		} else if (flag === "genesis") {
			newInputs = pageData.filter((data) => data.genesis);
		} else if (flag === "temple") {
			newInputs = pageData.filter((data) => data.temple);
		} else if (flag === "void") {
			newInputs = pageData.filter((data) => data.void);
		} else if (flag === "bayc") {
			newInputs = pageData.filter((data) => data.bayc);
		} else {
			newInputs = [];
		}

		setCardsData(newInputs);
	};

	const handleImg = (data) => {
		// console.log(data);
		setShowFull({ show: true, data: data });

		scrollFullImg.current.scrollIntoView({ behavior: "smooth" });
	};

	const handleCloseImg = () => {
		setShowFull({ show: false, data: {} });
	};

	return (
		<div className="bodyspacing">
			<Header
				headerText={"Tax Filing App"}
				subtitleText={
					"View your tax filing history in more detail by clicking on required year."
				}
			/>
			<HeaderButtons handleCardData={handleCardData} />
			<div className="showFull" ref={scrollFullImg}>
				{showFull.show && (
					<ImgPage {...showFull.data} handleCloseImg={handleCloseImg} />
				)}
			</div>

			{/* {showFullImg.show && <ImgPage {...showFullImg.data} />} */}

			<Container fluid className="body-container">
				<Row md={3} sm={1}>
					{/* <Cards {...dataOnly} /> */}
					{cardsData.map((card) => {
						return <Cards key={card.id} {...card} handleImg={handleImg} />;
					})}
				</Row>
			</Container>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link href="#action1">Home</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}
export default Sample;
