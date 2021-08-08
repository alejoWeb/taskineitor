import React, { useState } from "react";
import "./Filters.css";

const Filters = () => {
	const [dateIn, setDateIn] = useState("");
	const [dateOut, setDateOut] = useState("");
	const [category, setCategory] = useState("");
	const [status, setStatus] = useState("");

	const handleDateIn = (e) => {
		// console.log(`acabo de cambiar el dateIn a ${dateIn}`);
		setDateIn(e.target.value);
	};
	const handleDateOut = (e) => {
		// console.log(`acabo de cambiar el dateOut a ${dateOut}`);
		setDateOut(e.target.value);
	};
	const handleCategory = (e) => {
		// console.log(`acabo de cambiar la categoría a ${category}`);
		setCategory(e.target.value);
	};
	const handleStatus = (e) => {
		setStatus(e.target.value);
	};

	return (
		<div className="form-container">
			<div className="date-container">
				<label htmlFor="" className="input-date">
					<input value={dateIn} onChange={handleDateIn} type="date" />
				</label>
				<label htmlFor="" className="input-date">
					<input value={dateOut} onChange={handleDateOut} type="date" />
				</label>
			</div>
			<div className="select-container">
				<label htmlFor="" className="categories-select">
					<select value={category} onChange={handleCategory} name="" id="">
						<option value="organizacion">Organización</option>
						<option value="casa">Casa</option>
						<option value="negocio">Negocio</option>
						<option value="salud">Salud</option>
						<option value="estudios">Estudios</option>
					</select>
				</label>
				<label htmlFor="" className="status-select">
					<select value={status} onChange={handleStatus} name="" id="">
						<option value="completada">Completada</option>
						<option value="no completada">No completada</option>
					</select>
				</label>
			</div>
		</div>
	);
};

export default Filters;
