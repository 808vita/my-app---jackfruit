import React from "react";
import { Container } from "react-bootstrap";

const ImgPage = ({ id, img, header, subtitle, chainId, handleCloseImg }) => {
	return (
		<Container fluid className="ImgPage pushdown" onClick={handleCloseImg}>
			<div className="card mt-3 mb-3 card-containers ImgPage">
				<img
					src={img}
					className="d-block user-select-none card-image ImgPage"
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

export default ImgPage;
