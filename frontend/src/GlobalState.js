import React, { useState, createContext } from "react";
export const GlobalContext = createContext();

const GlobalState = (props) => {
	const [renderPage, setRenderPage] = useState("");
	const recordInitial = [];
	const [record, setRecord] = useState(recordInitial);
	const [createdRecord, setCreatedRecord] = useState({});

	const userInit = [];

	const [user, setUser] = useState(userInit);
	const [userRecords, setUserRecords] = useState({});

	//Add a record
	const addRecord = async (bas, lta, hra, fa, inv, med, rent, metro) => {
		const response = await fetch(`/api/user/tax-filing`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				token: localStorage.getItem("token"),
			},
			body: JSON.stringify({ bas, lta, hra, fa, inv, med, rent, metro }),
		});
		const note = await response.json();
		console.log(note);
		setRecord(record.concat(note));
		localStorage.setItem("createdRecord", JSON.stringify(note));
		console.log("added to local");
		setCreatedRecord(note);
	};

	/////
	//Add a record
	const modifyRecord = async (
		bas,
		lta,
		hra,
		fa,
		inv,
		med,
		rent,
		metro,
		recordId
	) => {
		const response = await fetch(`/api/user/record/${recordId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				token: localStorage.getItem("token"),
			},
			body: JSON.stringify({ bas, lta, hra, fa, inv, med, rent, metro }),
		});
		const note = await response.json();
		console.log(note);

		localStorage.setItem("modifiedRecord", JSON.stringify(note));
		console.log("added to local");
	};

	// for form state

	const [newNote, setNewNote] = useState({
		bas: 0,
		lta: 0,
		hra: 0,
		fa: 0,
		inv: 0,
		med: 0,
		rent: 0,
		metro: true,
	});

	const resetNote = {
		bas: 0,
		lta: 0,
		hra: 0,
		fa: 0,
		inv: 0,
		med: 0,
		rent: 0,
		metro: true,
		_id: 0,
	};

	const formState = {
		note: newNote,
		setNote: setNewNote,
		resetNote: resetNote,
	};

	//get user details
	const getUser = async () => {
		const response = await fetch(`/api/user/profile`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: localStorage.getItem("token"),
			},
		});
		console.log(response);
		const json = await response.json();
		console.log(json);
		setUser(json);
	};

	//get user records
	const getUserRecords = async () => {
		const response = await fetch(`/api/user/records`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: localStorage.getItem("token"),
			},
		});
		// console.log(response);
		const json = await response.json();
		// console.log(json);
		localStorage.setItem("userRecords", JSON.stringify(json));

		setUserRecords(json);
		console.log(userRecords);
	};

	//get user records
	const getUserRecord = async (recordId) => {
		const response = await fetch(`/api/user/record/${recordId}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: localStorage.getItem("token"),
			},
		});
		console.log(response);
		const json = await response.json();
		console.log(json);
		setRecord(json);
		console.log(record);
	};

	return (
		<GlobalContext.Provider
			value={{
				record,
				createdRecord,
				addRecord,
				getUser,
				user,
				getUserRecords,
				getUserRecord,
				userRecords,
				formState,
				modifyRecord,
				setRenderPage,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
