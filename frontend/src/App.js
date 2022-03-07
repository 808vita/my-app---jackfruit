import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";

import GlobalState from "./GlobalState";

import StartingPage from "./pages/login-register/StartingPage";
import NewHistory from "./pages/new-history/NewHistory";

import { startingPageData, newHistoryPageData } from "./pageData";
import PreviewPage from "./pages/new-history/PreviewPage";
import TaxableIncome from "./pages/new-history/TaxbleIncome";
import AllTaxRecords from "./pages/new-history/AllTaxRecords";

const App = () => {
	return (
		<>
			<GlobalState>
				<Router>
					<Routes>
						<Route
							exact
							path="/home"
							element={<NewHistory newHistoryPageData={newHistoryPageData} />}
						/>
						<Route
							exact
							path="/home/new-tax-filing"
							element={<NewHistory newHistoryPageData={newHistoryPageData} />}
						/>
						<Route
							exact
							path="/home/new-tax-filing/preview"
							element={<PreviewPage newHistoryPageData={newHistoryPageData} />}
						/>
						<Route
							exact
							path="/home/tax-history"
							element={<NewHistory newHistoryPageData={newHistoryPageData} />}
						/>
						<Route
							exact
							path="/taxable-income"
							element={
								<TaxableIncome newHistoryPageData={newHistoryPageData} />
							}
						/>
						<Route
							exact
							path="/tax-records"
							element={
								<AllTaxRecords newHistoryPageData={newHistoryPageData} />
							}
						/>
						<Route
							exact
							path="/login"
							element={<StartingPage startingPageData={startingPageData} />}
						/>
						<Route
							exact
							path="/register"
							element={<StartingPage startingPageData={startingPageData} />}
						/>
						<Route
							exact
							path="/"
							element={<StartingPage startingPageData={startingPageData} />}
						/>
					</Routes>
				</Router>

				{/* <h2>sample</h2>
			<TaxHistory /> */}
			</GlobalState>
		</>
	);
};

export default App;
