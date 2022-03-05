import React, { useState, createContext } from "react";
export const GlobalContext = createContext();

const GlobalState = (props) => {
	const recordInitial = [];
	const [record, setRecord] = useState(recordInitial);
	const [createdRecord, setCreatedRecord] = useState({});

	const userInit = [];

	const [user, setUser] = useState(userInit);
	const [userRecords, setUserRecords] = useState(userInit);

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
		setRecord(record.concat(note));
		setCreatedRecord(note);
	};

	// for form state

	const [newNote, setNewNote] = useState({
		bas: "",
		lta: "",
		hra: "",
		fa: "",
		inv: "",
		med: "",
		rent: "",
		metro: true,
	});

	const formState = {
		note: newNote,
		setNote: setNewNote,
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
		console.log(user);
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
		console.log(response);
		const json = await response.json();
		console.log(json);
		setUserRecords(json);
		console.log(userRecords);
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
				userRecords,
				formState,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
