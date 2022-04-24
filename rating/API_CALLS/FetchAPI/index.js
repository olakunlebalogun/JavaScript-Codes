/**================================|
 *  Browser Client Side API Call
 *  Methods are:
 *
 *      1. Fetch API
 *      2. Axios
 *      3. JQuery
 *      4. XMLHttpRequest
 *      5. Async
 *
 * ================================|
 */

/**
 * Fetch API
 */

// const URL = "https://api.twitter.com";
const URL = "./../data.json";

// const getData = () => {
// 	// let dataList = null;
// 	fetch(URL)
// 		.then((res) => {
// 			return res.json();
// 		})
// 		// .then((data) => {
// 		// 	// console.log(data);
// 		// 	dataList = data;
// 		// 	return dataList;
// 		// })
// 		.catch((err) => {
// 			console.error("fetch error is " + err.message);
// 		});
// 	// return dataList;
// };
// // getData();
// // console.log(getData());
// const myData = getData();
// console.log(myData);

const getData = () => {
	fetch("data.json")
		.then((data) => {
			return data.json();
			console.log(data);
		})
		.then((data) => {
			console.log(data);
			return data;
		})
		.catch((err) => {
			console.log("this is the error: " + err);
		});
};
getData();

const myNameFunc = () => {
	const info = {
		name: "olakunle",
		gender: "male",
		hobbies: ["Football", "Reading", "Golfing"],
	};
	return info;
};

console.log(myNameFunc());
const details = {
	id: 5,
	description: "Fine girl sitting on the floor",
	rating: 4.5,
	image: "images/Fine-girl.jpg",
	title: "Omo to shan",
};

const addData = (data) => {
	fetch("data.json", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		});
};

addData(details);

const json = {
	email: "hi@attacomsian.com",
	password: "123abc",
};

// request options
const options = {
	method: "POST",
	body: JSON.stringify(json),
	headers: {
		"Content-Type": "application/json",
	},
};

// send post request
fetch("/login", options)
	.then((res) => res.json())
	.then((res) => console.log(res))
	.catch((err) => console.error(err));
