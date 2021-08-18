import React, { useState } from "react";
import Task from "../Task/Task";
import { tareas } from "../../assets/data/tasks";

const TaskList = (props) => {
	const [taskList, setTaskList] = useState(tareas);

	const setGlobalStatus = (key) => {
		const newList = tareas.map((tarea) => {
			if (tarea.key === key) {
				return {
					...tarea,
					completed: (tarea.completed = !tarea.completed),
				};
			}
			return tarea;
		});
		setTaskList(newList);
		console.log(key);
	};
	// console.log(taskList);

	// console.log(props.actualCategory);

	const filterByCategoryAndStatus = () => {
		const newFilteredList = taskList
			.filter((tarea) => {
				if (props.actualCategory !== "todos") {
					return tarea.categorias === props.actualCategory;
				}
				return tarea;
			})
			.filter((tarea) => {
				if (props.actualStatus !== "todos") {
					// console.log(props.actualStatus);
					// console.log(typeof props.actualStatus);

					// console.log(tarea.completed);
					// console.log(typeof tarea.completed);
					const booleanStatus = () => {
						if (props.actualStatus === "true") {
							return true;
						} else {
							return false;
						}
					};
					return tarea.completed === booleanStatus();
				}
				return tarea;
			});
		return newFilteredList;
	};

	const renderNewList = filterByCategoryAndStatus();
	// console.log(renderNewList);
	return renderNewList.map((tarea) => {
		return (
			<Task
				id={tarea.key}
				title={tarea.titulo}
				date={tarea.fechaCreacion}
				category={tarea.categorias}
				onSetStatus={setGlobalStatus}
			/>
		);
	});
};

export default TaskList;
