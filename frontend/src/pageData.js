export const pageData = [
	{
		id: 1,
		popular: true,
		latest: false,
		trending: true,
		genesis: false,
		temple: true,
		void: false,
		bayc: false,
		img: "https://i.redd.it/p7e9jyxsxjv61.jpg",
		header: "Giga Floppa",
		subtitle: "@catto ",
		chainId: "0x64gdhgh",
	},
	{
		id: 2,
		popular: true,
		latest: true,
		trending: true,
		genesis: false,
		temple: true,
		void: false,
		bayc: false,
		img: "https://i.kym-cdn.com/photos/images/newsfeed/001/725/807/cef.png",
		header: "Gentle Catto",
		subtitle: "@neko",
		chainId: "0x76twy46",
	},
	{
		id: 3,
		popular: true,
		latest: true,
		trending: true,
		genesis: false,
		temple: false,
		void: true,
		bayc: false,
		img: "https://cdni.rbth.com/rbthmedia/images/2021.05/original/60b4cf3985600a50dd341bb7.jpg",
		header: "Lil Floppa",
		subtitle: "@shiro-neko",
		chainId: "0x864gd6te",
	},
	{
		id: 4,
		popular: true,
		latest: true,
		trending: true,
		genesis: false,
		temple: false,
		void: true,
		bayc: false,
		img: "https://img-comment-fun.9cache.com/media/avPGm5W/aXPLK4nD_700w_0.jpg",
		header: "Hehe Carlo",
		subtitle: "@chunky0feline",
		chainId: "0x53hgdj",
	},
	{
		id: 5,
		popular: true,
		latest: false,
		trending: true,
		genesis: true,
		temple: false,
		void: false,
		bayc: false,
		img: "https://www.telegraph.co.uk/content/dam/art/2021/05/03/Space-Cat_trans_NvBQzQNjv4BqvqfDbYV_7XcRT56v9L25rAk82TRM0xi_N4x7ucCy1vw.png",
		header: "card header",
		subtitle: "@bingus",
		chainId: "0x42gdjty",
	},
	{
		id: 6,
		popular: true,
		latest: false,
		trending: false,
		genesis: false,
		temple: false,
		void: false,
		bayc: true,
		img: "https://i.kym-cdn.com/photos/images/original/002/251/954/398.jpg",
		header: "Air Fryer",
		subtitle: "@longboi",
		chainId: "0x475hgdh",
	},
];

export const buttonData = [
	{
		id: 1,
		active: false,
		flag: "trending",
		iText: "fas fa-fire p-1",
		styleText: { color: "red" },
		buttonText: "24h Trending",
	},
	{
		id: 2,
		active: false,
		flag: "latest",
		iText: "",
		styleText: {},
		buttonText: "Latest Shows",
	},
	{
		id: 3,
		active: true,
		flag: "popular",
		iText: "",
		styleText: {},
		buttonText: "Most Popular",
	},
	{
		id: 4,
		active: false,
		flag: "genesis",
		iText: "fas fa-gem p-1",
		styleText: { color: "rgba(69,180,208,255)" },
		buttonText: "in Genesis",
	},
	{
		id: 5,
		active: false,
		flag: "temple",
		iText: "fas fa-gopuram p-1",
		styleText: { color: "#ed473b" },
		buttonText: "in Temple",
	},

	{
		id: 6,
		active: false,
		flag: "void",
		iText: "",
		styleText: {},
		buttonText: "🌀 in Void",
	},
	{
		id: 7,
		active: false,
		flag: "bayc",
		iText: "",
		styleText: {},
		buttonText: "🦍 #BAYC",
	},
];

export const startingPageData = [
	{
		id: 1,

		img: "https://i.redd.it/p7e9jyxsxjv61.jpg",
		header: "Login",
		subtitle: "Existing Users",
		chainId: "Login using registered Email & Password.",
		active: false,
		icon: "fas fa-sign-in-alt h3 p-1",
	},
	{
		id: 2,

		img: "https://i.redd.it/p7e9jyxsxjv61.jpg",
		header: "Register",
		subtitle: "New Users",
		chainId: "Please create a new account with a vaild email id.",
		active: false,
		icon: "fas fa-plus-square h3 p-1",
	},
];

export const newHistoryPageData = [
	{
		id: 1,

		img: "https://i.redd.it/p7e9jyxsxjv61.jpg",
		header: "New ITR",
		subtitle: "Create a new tax filing.",
		chainId:
			"Keep all realted documents & vouchers nearby for easy filling the form.",
		active: false,
		icon: "fas fa-file-medical h3 p-1",
		steps: [
			{
				stepId: 1,
				step: "firstStep",
				buttonText1: "Next",
				buttonText2: "Cancel",
				subtitle: "Salary Income Details",
				chainId:
					"Please fill in the following details: Basic Pay, LTA, HRA, Food Allowance.",
				fieldRequired: [
					{ id: 1, text: "Basic Pay" },
					{ id: 2, text: "Leave Travel Allowance" },
					{ id: 3, text: "House Rent Allowance" },
					{ id: 4, text: "Food Allowance" },
				],
			},
			{
				stepId: 2,
				step: "secondStep",
				buttonText1: "Preview",
				buttonText2: "Previous",
				subtitle: "Exemptions",
				chainId:
					"Please fill all applicable fields and leave other fields empty",
				fieldRequired: [
					{ id: 1, text: "Investments under section 80C" },
					{ id: 2, text: "Rent", dropdown: "Metro/Non metro city" },
					{ id: 3, text: "Premium paid for Medical Insurance" },
				],
			},
		],
	},
	{
		id: 2,

		img: "https://i.redd.it/p7e9jyxsxjv61.jpg",
		header: "Tax History",

		subtitle: "View already filed tax reports.",
		chainId: "Lists all previously fililed tax reports.",
		active: false,
		icon: "fas fa-history h3 p-1",
		steps: [
			{
				stepId: 1,
				step: "fullStep",
				buttonText1: "Edit",
				buttonText2: "Close",
				subtitle: "Salary Income Details",
				chainId:
					"Please fill in the following details: Basic, LTA, HRA, Food Allowance.",
				fiedRequired: [
					{ id: 1, text: "Basic Pay" },
					{ id: 2, text: "Leave Travel Allowance" },
					{ id: 3, text: "House Rent Allowance" },
					{ id: 4, text: "Food Allowance" },
				],
			},
			{
				stepId: 2,
				step: "secondStep",
				buttonText: "Next",
				subtitle: "Exemptions",
				chainId:
					"Please fill all applicable fields and leave other fields empty",
				fiedRequired: [
					{ id: 1, text: "Investments under section 80C" },
					{ id: 2, text: "Rent", dropdown: "Metro/Non metro city" },

					{ id: 3, text: "Premium paid for Medical Insurance" },
				],
			},
		],
	},
];
