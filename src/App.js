import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import Filters from "./components/Filters/Filters";

export default function App() {
	const [dateIn, setDateIn] = useState("");
	const [dateOut, setDateOut] = useState("");
	const [category, setCategory] = useState("todos");
	const [status, setStatus] = useState("todos");

	// const [checked, setChecked] = useState(false);

	return (
		<div className="app">
			<Header headerCategory={category} headerStatus={status} />
			<Filters
				onSetDateIn={setDateIn}
				onSetDateOut={setDateOut}
				onSetCategory={setCategory}
				onSetStatus={setStatus}
				actualDateIn={dateIn}
				actualDateOut={dateOut}
				actualCategory={category}
				actualStatus={status}
			/>
			<TaskList
				actualDateIn={dateIn}
				actualDateOut={dateOut}
				actualCategory={category}
				actualStatus={status}
			/>
		</div>
	);
}
