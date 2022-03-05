const dummyData = [
	{
		id: 1,
		userId: "firstUser",
		header: "New ITR",
		subtitle: "Create a new tax filing.",
		chainId:
			"Keep all realted documents & vouchers nearby for easy filling the form.",

		fieldfills: [
			{ id: 1, Bas: 150000 },
			{ id: 2, LTA: 10000 },
			{ id: 3, HRA: 50000 },
			{ id: 4, FA: 2000 },
			{ id: 1, Inv: 50000 },
			{ id: 2, Rent: 2000 },
			{ id: 3, CityType: { Metro: true } },
			{ id: 4, Med: 1000 },
		],
	},
	{
		id: 2,
		userId: "secondUser",
		header: "New ITR",
		subtitle: "Create a new tax filing.",
		chainId:
			"Keep all realted documents & vouchers nearby for easy filling the form.",

		fieldfills: [
			{ id: 1, Bas: 150000 },
			{ id: 2, LTA: 10000 },
			{ id: 3, HRA: 50000 },
			{ id: 4, FA: 2000 },
			{ id: 1, Inv: 50000 },
			{ id: 2, Rent: 2000 },
			{ id: 3, CityType: { Metro: true } },
			{ id: 4, Med: 1000 },
		],
	},
];

module.exports = dummyData;
