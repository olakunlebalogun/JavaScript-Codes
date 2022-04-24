const arr = [
	{
		id: 1,
		name: "kunle",
	},
	{
		id: 2,
		name: "lanre",
	},
	{
		id: 3,
		name: "niyi",
	},
];

const changeItem = (id) => {
	const newItem = arr.find((item) => {
		return item.id === 1;
	});
	console.log(newItem);
	newItem.id = id;

	return arr;
};

changeItem(123);
console.log(arr);
