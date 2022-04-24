// var names = "olakunle";

// function displayName() {
// 	var myName = "kunle";
// 	console.log(myName);
// }

// {
// 	var age = new Date().getTime();
// 	let myTime = new Date().getTime().toString();
// }
// console.log(names);
// // console.log(myName);

// console.log(age);
// console.log(myTime);

// --------------------------------------Example Two ----------------------------------------------------------------

var topic = "javascript";

if (topic) {
	var topic = "ReactJS";
	console.log("Block ", topic);
}
console.log("Global ", topic);

// ------------------------- Example Three ----------------------------------------
// var div,
// 	container = document.getElementById("container");
// for (var i = 0; i < 5; i++) {
// 	div = document.createElement("div");
// 	div.onclick = function () {
// 		alert("This is box #" + i);
// 	};
// 	container.appendChild(div);
// }

const container = document.getElementById("container");
let div;
for (let i = 0; i < 5; i++) {
	div = document.createElement("div");
	div.onclick = function () {
		alert("This is box #: " + i);
	};
	container.appendChild(div);
}

//------------------------- Example Four -------------------------------------

// function greetName() {
// 	console.log(`Hey Olakunle keep the good work`);
// }

// function greetNameWithName(name) {
// 	console.log(`Hey ${name} keep the good work`);
// }

// function getNameOptionally(name = "olakunle") {
// 	console.log(`Hey ${name} keep the good work`);
// }

// greetName();
// greetNameWithName("smith");
// getNameOptionally();
// getNameOptionally("glasglow");

// -------------------------- Example Five -----------------------------------------------------

// const lordify = (firstName, land) => {
// 	if (!firstName) {
// 		throw new Error("A firstName is required to lordify");
// 	}
// 	if (!land) {
// 		throw new Error("A lord must have a land");
// 	}
// 	return `${firstName} of ${land}`;
// };

// console.log(lordify("Kelly", "Sonoma")); // Kelly of Sonoma
// console.log(lordify("Dave"));

// -------------------------- Example on Returning Object from Function Using Arrow Function--------------------------------

// const willNotReturnObject = (name, job, age) => {
// 	name, job, age;
// };

// console.log(willNotReturnObject("olakunle", "Software Engineer", 23)); // this logs Undefined

// to correct this, use parentheses as shown below

// const willReturnObject = (name, job, age) => ({
// 	name,
// 	job,
// 	age,
// });

// console.log(willReturnObject("olakunle", "Software Engineer", 23));

// ------------------------------------- Accessing "this" in a setTimeOut function --------------------------------

// const tahoe = {
// 	mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
// 	print: function (delay = 1000) {
//         console.log(this);  // this here logs the Object
// 		setTimeout(function () {
// 			console.log(this); // this here logs the Windows
// 			console.log(this.mountains.join(", "));
// 		}, delay);
// 	},
// };

// tahoe.print();

// Arrow Function let loose the scope protection of variables
//                              SECOND TEST

// const tahoe = {
// 	mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
// 	print: function (delay = 1000) {
// 		console.log(this); // this logs the Object
// 		setTimeout(() => {
// 			console.log(this);  // this also logs the Object because the arrow function let loose of the scope protection
// 			console.log(this.mountains.join(", "));
// 		}, delay);
// 	},
// };
// tahoe.print(); // Freel, Rose, Tallac, Rubicon, Silver

//                                            THIRD  TEST

// const tahoe = {
// 	mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
// 	print: (delay = 1000) => {
// 		console.log(this);
// 		setTimeout(() => {
// 			console.log(this); // this logs the Windows becasue the Arrow Function let loose of the scope protection
// 			console.log(this.mountains.join(", "));
// 		}, delay);
// 	},
// };

// tahoe.print();

// --------------- Double Arrow Function --------------------------------
// it can be used in an higher order function that

// const salaries = [2000, 3500, 3101, 3200, 4502];

// // using normal method of reduce

// const sumOfSalaries = setTimeout(() => {
// 	salaries.reduce((acc, sal) => {
// 		const ans = acc + sal;
// 		return ans;
// 	}, 0);
// }, 5000);

// console.log(sumOfSalaries);

// // Using the Double Arrow Function

// // const sumOfSalaries = salaries.

// const color = () => {
// 	return Object.assign({});
// };

// -------------------------------- Filter Array Method ----------------------------------------------------
const bname = "ola";
console.log(bname.startsWith("o"));

const school = ["Yorktown", "Washington and Liberty", "Wakefield"];
const wSchool = school.filter((sch) => {
	return (sch = sch.startsWith("W"));
});
console.log(wSchool);

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
	console.log(`${age} > ${max} = ${age > max}`);
	if (age > max) {
		return age;
	} else {
		return max;
	}
}, 0);
console.log("maxAge", maxAge);
