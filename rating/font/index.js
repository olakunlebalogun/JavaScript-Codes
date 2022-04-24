console.log("Starting");

const getAverage = (arr) => {
	let sumValue = 0;
	for (let i = 0; i < arr.length; i++) {
		sumValue += arr[i];
	}
	const value = sumValue / arr.length;
	return value;
};

const nums = [4, 5, 2, 4, 1];
console.log(getAverage(nums));
