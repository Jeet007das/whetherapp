function formatDateWithTime(date) {
	let day = date.getDate();
	let month = date.getMonth();
	let year = date.getFullYear();
	let hours = date.getHours();
	let minutes = date.getMinutes();

	if (month <= 12) {
		return day + "/" + (month + 1) + "/" + year + " " + hours + ":" + minutes;
	} else {
		return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
	}
}
module.exports = { formatDateWithTime };
