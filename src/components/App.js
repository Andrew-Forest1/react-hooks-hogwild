import React from "react";
import Nav from "./Nav";


import hogs from "../porkers_data";

function App() {
	//console.log(hogs[0]["highest medal achieved"])
	return (
		<div className="App">
			<Nav hogs={hogs}/>
		</div>
	);
}

export default App;
