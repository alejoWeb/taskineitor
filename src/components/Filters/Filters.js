import React from "react";

import "./Filters.css";

const Filters = (props) => {
	const handleDateIn = (e) => {
		// console.log(`acabo de cambiar el dateIn a ${dateIn}`);
		props.onSetDateIn(e.target.value);
	};
	const handleDateOut = (e) => {
		// console.log(`acabo de cambiar el dateOut a ${dateOut}`);
		props.onSetDateOut(e.target.value);
	};
	const handleCategory = (e) => {
		// console.log(`acabo de cambiar la categoría a ${category}`);
		props.onSetCategory(e.target.value);
	};
	const handleStatus = (e) => {
		console.log(`msj desde Filter.js el valor del handleStatus es ${e.target.value} y es de tipo ${typeof e.target.value}`);
		console.log(e.target);
		props.onSetStatus(e.target.value);
	};
	
	// props.onSetHeaderCategory(category);
	// props.onSetHeaderStatus(status);

	return (
		<div className="form-container">
			<div className="date-container">
				<label className="input-date">
					<input value={props.actualDateIn} onChange={handleDateIn} type="date" />
				</label>
				<label className="input-date">
					<input value={props.actualDateOut} onChange={handleDateOut} type="date" />
				</label>
			</div>
			<div className="select-container">
				<label className="categories-select">
					<select value={props.actualCategory} onChange={handleCategory} name="" id="">
						<option value="todos">Todas las categorías</option>
						<option value="organizacion">Organización</option>
						<option value="casa">Casa</option>
						<option value="negocio">Negocio</option>
						<option value="salud">Salud</option>
						<option value="estudios">Estudios</option>
					</select>
				</label>
				<label className="status-select">
					<select value={props.actualStatus} onChange={handleStatus} name="" id="">
						<option value="todos">Todos los estados</option>
						<option value={true}>Completada</option>
						<option value={false}>No completada</option>
					</select>
				</label>
			</div>
		</div>
	);
};

export default Filters;
