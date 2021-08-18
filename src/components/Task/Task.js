import React from "react";
import "./Task.css";
import deletebtn from "../../assets/imgs/delete.svg";

const Task = (props) => {
	const today = new Date().getTime() / 1000;
	const taskDate = new Date(props.date).getTime() / 1000;
	const difTime = parseInt((today - taskDate) / 60 / 60 / 24);

	const handleDeleteBtn = () => {
		alert(
			`¿Desea borrar la tarea '${props.title.toUpperCase()}', hoy, ${new Date().toLocaleDateString(
				"es-ES",
				{ weekday: "long", year: "numeric", month: "long", day: "numeric" }
			)}?`
		);
	};
	const handleCheckbox = () => {
		props.onSetStatus(props.id);
		console.log(`mensaje desde Task.js ${props.id}`)
	};

	return (
		<div className="task-container">
			<div className="info">
				<h1>{props.title}</h1>
				<h3>
					{props.date} - <em>{difTime === 0 ? 'Hoy' : `Hace ${difTime} días`}</em>
				</h3>
				<h4>Categoría:</h4>
				<p>
					<span>{props.category}</span>
				</p>
			</div>
			<div className="controls">
				<label className="label">
					<input onChange={handleCheckbox} type="checkbox" />
					<span className="checkmark"></span>
				</label>
				<img onClick={handleDeleteBtn} alt="delete button" src={deletebtn} />
			</div>
		</div>
	);
};

export default Task;
