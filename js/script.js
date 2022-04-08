// const response = fetch("https://reqres.in/api/users")
// .then (response => {
// 	console.log(response)
// 	return response.json()
// })
// .then(data => data)
// .catch(error => console.log("ERROR", error))

// console.log(response)

const formCity = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updaeUI = (data) => {
  console.log(data);
  const { cityDetails, weather } = data;

  details.innerHTML = `
	<h5 class="my-3">${cityDetails.EnglishName}, ${cityDetails.Country.LocalizedName}</h5>
				<div class="my-3">${weather.WeatherText}</div>
				<div class="my-3 dateTime">${weather.LocalObservationDateTime}</div>
				<div class="display-4 my-4">
					<span>${weather.Temperature.Metric.Value}</span>
					<span>&deg;C</span>
				</div>
				`;

  // Update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
	icon.setAttribute("src", iconSrc)
  console.log(iconSrc);

	let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg"
	time.setAttribute("src", timeSrc)



	// if (weather.IsDayTime) {
	// 	timeSrc = "img/day.svg"
	// } else {
	// 	timeSrc = "img/night.svg"
	// }



  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  console.log(city);
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    weather: weather,
  };
};

formCity.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get city value
  const city = formCity.city.value.trim();
  // formCity.city.value = ""
  formCity.reset();
  updateCity(city)
    .then((data) => {
      // console.log("updateCity", data);
      updaeUI(data);
    })
    .catch((error) => {
      // console.log(error);
    });
});
