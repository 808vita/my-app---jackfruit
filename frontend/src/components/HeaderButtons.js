import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import { buttonData } from "../pageData";

const HeaderButtons = ({ handleCardData }) => {
	const [buttonInputs, setButtonInputs] = useState(buttonData);

	const handleActive = (fullData) => {
		let newInputs = [];
		let newData;
		// setButtonInputs(buttonData);
		buttonInputs.map((data) => {
			if (data.id === fullData.id) {
				newData = { ...data, active: true };
			} else {
				newData = { ...data, active: false };
			}
			newInputs.push(newData);
			return newInputs;
		});

		setButtonInputs(newInputs);
		handleCardData(fullData.flag);
	};
	return (
		<Container fluid>
			<div className="header-buttons">
				<Col md={12}>
					{buttonInputs.map((data) => {
						return (
							<button
								key={data.id}
								type="button"
								onClick={() => handleActive(data)}
								className={`btn btn btn-outline-dark spacinglrtb ${
									data.active && `active`
								}`}
							>
								<i className={data.iText} style={data.styleText}></i>
								{data.buttonText}
							</button>
						);
					})}
					{/* <button
						type="button"
						className="btn btn btn-outline-dark spacinglrtb "
					>
						<i className="fas fa-fire p-1" style={{ color: "red" }}></i>
						24h Trending
					</button>
					<button type="button" className="btn btn-outline-dark spacinglrtb">
						Latest Shows
					</button>
					<button type="button" className="btn btn-outline-dark spacinglrtb">
						Most Popular
					</button>
					<button type="button" className="btn btn-outline-dark spacinglrtb">
						<i
							className="fas fa-gem p-1"
							style={{ color: "rgba(69,180,208,255)" }}
						></i>
						in Genesis
					</button>
					<button type="button" className="btn btn-outline-dark spacinglrtb">
						<i className="fas fa-gopuram p-1" style={{ color: "#ed473b" }}></i>
						in Temple
					</button>
					<button type="button" className="btn btn-outline-dark spacinglrtb ">
						<i className="fas p-1">🌀</i>
						in Void
					</button>
					<button type="button" className="btn btn-outline-dark spacinglrtb">
						<i className="fas">🦍</i>
						#BAYC
					</button> */}
				</Col>
			</div>
		</Container>
	);
};

export default HeaderButtons;
