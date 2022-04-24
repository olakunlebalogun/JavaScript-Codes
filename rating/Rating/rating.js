const stars = document.querySelectorAll(".star");
let text = document.querySelector("#dynamic");
stars.forEach((star) => {
	star.addEventListener("mouseover", (e) => {
		if (e.currentTarget == stars[0]) {
			text.innerHTML = "Awful, not what i expected at all";
		} else if (e.currentTarget == stars[1]) {
			text.innerHTML = "Pretty dissapointed";
		} else if (e.currentTarget == stars[2]) {
			text.innerHTML = "Average could be better";
		} else if (e.currentTarget == stars[3]) {
			text.innerHTML = "Good, what i expected";
		} else if (e.currentTarget == stars[4]) {
			text.innerHTML = "Amazing, above expectation";
		}
	});
});


