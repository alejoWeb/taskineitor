import React from "react";
import "./Filters.css";

const Filters = () => {
	return (
		<div className="form-container">
			<div className="date-container">
				<label htmlFor="" className="input-date">
					<input type="date" />
				</label>
				<label htmlFor="" className="input-date">
					<input type="date" />
				</label>
			</div>
			<div className='select-container'>
				<label htmlFor="" className="categories-select">
					<select name="" id="">
						<option value="Organización">Organización</option>
						<option value="Casa">Casa</option>
						<option value="Negocio">Negocio</option>
						<option value="Salud">Salud</option>
						<option value="Estudios">Estudios</option>
					</select>
				</label>
				<label htmlFor="" className="status-select">
					<select name="" id="">
						<option value="Completada">Completada</option>
						<option value="No completada">No completada</option>
					</select>
				</label>
			</div>
		</div>
	);
};

export default Filters;
