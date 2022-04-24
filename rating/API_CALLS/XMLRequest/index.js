console.log("this is great!");

/**
 * GET Request to a JSON file.
 */

// let xhr = new XMLHttpRequest();

// xhr.onload = () => {
// 	if (xhr.status === 200) {
// 		results = JSON.parse(xhr.responseText);
// 		console.log(results);
// 	} else {
// 		console.log(xhr.status);
// 		console.log("An error occured");
// 	}
// };

// xhr.open("GET", "./../data.json", true);
// xhr.send(null);

/**
 * POST Request to JSON file.
 *
 */

// const details = {
// 	id: 5,
// 	description: "Fine girl sitting on the floor",
// 	rating: 4.5,
// 	image: "images/Fine-girl.jpg",
// 	title: "Omo to shan",
// };

// pxhr.onload = function () {
// 	if (this.status === 200) {
// 		console.log("this is successful");
// 	}
// };

// pxhr.open("POST", "./../data.json", details);
// pxhr.send(null);

// let xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
// let theUrl = "./data.json";
// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send(JSON.stringify(details));

// var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
// var theUrl = "/json-handler";
// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send(
// 	JSON.stringify({ email: "hello@user.com", response: { name: "Tester" } })
// );

// const xhr = new XMLHttpRequest();

// // configure a `POST` request
// xhr.open('POST', '/login');

// // prepare form data
// let params = 'username=attacomsian&password=123456';

// // set `Content-Type` header
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// // pass `params` to `send()` method
// xhr.send(params);

// // listen for `load` event
// xhr.onload = () => {
//    console.log(xhr.responseText);
//}
//Want to make a JSON POST request? Make sure you convert the JSON data into a string using JSON.stringify() and set the Content-Type header to application/json:

const xhr = new XMLHttpRequest();

// configure a `POST` request
xhr.open("POST", "/data");

// create a JSON object
// const params = {
// 	username: "attacomsian",
// 	password: "123456",
// };

// const details = {
// 	id: 5,
// 	description: "Fine girl sitting on the floor",
// 	rating: 4.5,
// 	image: "images/Fine-girl.jpg",
// 	title: "Omo to shan",
// };

// set `Content-Type` header
xhr.setRequestHeader("Content-Type", "application/json");

// pass `params` to `send()` method
xhr.send(
	JSON.stringify({
		id: 5,
		description: "Fine girl sitting on the floor",
		rating: 4.5,
		image: "images/Fine-girl.jpg",
		title: "Omo to shan",
	}),
	true
);

// listen for `load` event
xhr.onload = () => {
	if (xhr.status === 200) {
		console.log(xhr.responseText);
	}
};
