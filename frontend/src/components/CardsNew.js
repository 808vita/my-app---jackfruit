import React from "react";
import { Container } from "react-bootstrap";

const CardsNew = ({
	id,
	img,
	header,
	subtitle,
	chainId,
	handleImg,
	active,
	icon,
	steps,
}) => {
	const cardData = {
		id,
		img,
		header,
		subtitle,
		chainId,
		handleImg,
		active,
		icon,
		steps,
	};
	return (
		<Container fluid onClick={() => handleImg(cardData)}>
			<div
				className={`card btn-outline-dark mt-3 mb-3 card-containers new-card ${
					active && "active selected"
				}`}
			>
				<div className="card-header">
					<h3 className="img-description">
						<i className={icon}></i>

						{header}
					</h3>
					<div className="card-header-highlight">
						<h6 className="card-subtitle text-muted">{subtitle}</h6>
						<h6 className="card-subtitle text-muted">{chainId}</h6>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default CardsNew;
