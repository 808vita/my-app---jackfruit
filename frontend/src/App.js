import React from "react";
import "./css/App.css";

import StartingPage from "./pages/login-register/StartingPage";
import TaxHistory from "./pages/sample/Sample";
import NewHistory from "./pages/new-history/NewHistory";

import { startingPageData, newHistoryPageData } from "./pageData";

const App = () => {
	return (
		<>
			<StartingPage startingPageData={startingPageData} />

			<p>New / history </p>
			<NewHistory newHistoryPageData={newHistoryPageData} />
			{/* <h2>sample</h2>
			<TaxHistory /> */}
		</>
	);
};

export default App;
