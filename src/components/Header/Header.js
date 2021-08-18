import React from "react";

import "./Header.css";

const Header = (props) => {
	// console.log(`desde Header.js ${props.headerCategory()}`);
	return (
		<div className="header-container">
			<div className="title-container">
				<h1>Taskineitor</h1>
			</div>
			<div className="subtitle-container">
				<h3>Categoría: {props.headerCategory} </h3>
				<h3>Estado: {props.headerStatus} </h3>
			</div>
		</div>
	);
};

export default Header;
