const panels = document.querySelectorAll(".panel");

panels.forEach((x) => {
	x.addEventListener("click", () => {
		revomeActiveClasses();
		x.classList.add("active");
	});
});

function revomeActiveClasses() {
	panels.forEach((x) => {
		x.classList.remove("active");
	});
}
