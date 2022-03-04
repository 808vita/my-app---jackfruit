import React from "react";
import { Container } from "react-bootstrap";

const Cards = ({ id, img, header, subtitle, chainId, handleImg }) => {
	const cardData = { id, img, header, subtitle, chainId };
	return (
		<Container fluid onClick={() => handleImg(cardData)}>
			<div className="card mt-3 mb-3 card-containers ">
				<img
					src={img}
					className="d-block user-select-none card-image"
					alt="heheCat"
				/>
				<div className="card-header">
					<h3 className="img-description">{header}</h3>
					<div className="card-header-highlight">
						<h6 className="card-subtitle text-muted">{subtitle}</h6>
						<h6 className="card-subtitle text-muted">{chainId}</h6>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Cards;
