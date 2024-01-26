const form = document.querySelector('form');

form.addEventListener('submit', eventListener);

async function eventListener(e) {
	e.preventDefault();
	const cityId = form.elements.city.value;
	const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric`;

	getWeather(url)
		.then((data) => {
			console.log({ data });
			const {
				name,
				main: { temp, humidity },
			} = data;

			const weather = document.querySelector('#weather');
			weather.innerHTML = `
	    <h2>${name}</h2>
	    <p>Temperature: ${temp} °C</p>
	    <p>Humidity: ${humidity} %</p>
	  `;
		})
		.catch((err) => console.log(err));
}

async function getWeather(url) {
	const response = await fetch(url);
	const data = await response.json();
	// console.log(data);
	return data;
}
