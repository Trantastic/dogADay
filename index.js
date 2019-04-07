$(document).ready(() => {
	const urlDog = "https://dog.ceo/api/breeds/image/random";
	const urlShibe = "https://shibe.online/api/shibes?count=1";
	let dog = "";
	let shibe = "";

// Fetch 1 dog image
	fetch(urlDog)
		.then(res => res.json())
		.then(data => {
			dog = data.message

			$("#dog-image").attr("src", dog);
		});
// Fetch 1 shibe image
	fetch(urlShibe)
		.then(res => res.json())
		.then(data => {
			console.log("data", data)
		})

});