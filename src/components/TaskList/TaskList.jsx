import React from "react";
import { tareas } from "../../assets/data/tasks";
import Task from "../Task/Task";

const TaskList = () => {
	return tareas.map((tarea) => {
		return (
			<Task
				title={tarea.titulo}
				date={tarea.fechaCreacion}
				category={tarea.categorias}
			/>
		);
	});
};

export default TaskList;
