import React from "react";
import piggy from "../assets/porco.png";
import Hog from "./Hog.js";
import Filters from "./Filters";
import {useState} from 'react';

const Nav = ({hogs}) => {
	const [showGreased, setShowGreased] = useState(true);
	const [nameFilter, setNameFilter] = useState("");
	const [wieghtFilter, setWieghtFilter] = useState("");

	const greasedHogs = showGreased ? hogs : hogs.filter((hog) => {
		return hog.greased
	})

	const nameFilteredHogs = nameFilter === "" ? greasedHogs : hogs.filter((hog) => {
		return hog.name.toLowerCase().includes(nameFilter.toLowerCase())
	})

	const renderHogs = nameFilteredHogs.map((hog) => {
		return <Hog {...hog} medal={hog['highest medal achieved']}/>
	})

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<Filters showGreased={showGreased} setShowGreased={setShowGreased} setNameFilter={setNameFilter} nameFilter={nameFilter} setWieghtFilter={setWieghtFilter} wieghtFilter={wieghtFilter}/>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div className="ui link cards">
				{renderHogs}
			</div>
		</div>
	);
};

export default Nav;
