function changeBackgroundColor({ target }) {
	document.getElementById(`screen${target.id}`).style.backgroundColor =
		target.value;
}

const colorPickers = document.querySelectorAll("input[type='color']");

colorPickers.forEach((colorPicker) => {
	colorPicker.addEventListener("change", changeBackgroundColor);
});
