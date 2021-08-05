import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import Filters from "./components/Filters/Filters";

export default function App() {
	return (
		<div className="app">
			<Header />
			<Filters />
			<TaskList />
		</div>
	);
}
