import React, { useState } from "react";
import "./Task.css";
import deletebtn from "../../assets/imgs/delete.svg";

const Task = (props) => {
	const today = new Date().getTime() / 1000;
	const taskDate = new Date(props.date).getTime() / 1000;
	const difTime = parseInt((today - taskDate) / 60 / 60 / 24);
	const [checked, setChecked] = useState(false);
	console.log(`La tarea ${props.title} es ${checked}`);

	const handleTitleClick = (event) => {
		console.log(
			`Hiciste click en la tarea con nombre: ${event.target.textContent}`
		);
	};
	const handleDateClick = (event) => {
		console.log(
			`Hiciste click en la tarea con fecha: ${event.target.textContent}`
		);
	};
	const handleDeleteBtn = () => {
		alert(
			`¿Desea borrar la tarea '${props.title.toUpperCase()}', hoy, ${new Date().toLocaleDateString(
				"es-ES",
				{ weekday: "long", year: "numeric", month: "long", day: "numeric" }
			)}?`
		);
	};
	const handleCheck = () => {
		setChecked(!checked);
	};

	return (
		<div className="task-container">
			<div className="info">
				<h1 onClick={handleTitleClick}>{props.title}</h1>
				<h3 onClick={handleDateClick}>
					{props.date} - <em>Hace {difTime} días</em>
				</h3>
				<h4>Categoría:</h4>
				<p>
					<span>{props.category}</span>
				</p>
			</div>
			<div className="controls">
				<label className="label">
					<input onChange={handleCheck} type="checkbox" />
					<span className="checkmark"></span>
				</label>
				<img onClick={handleDeleteBtn} alt="delete button" src={deletebtn} />
			</div>
		</div>
	);
};

export default Task;
