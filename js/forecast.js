const API_KEY = "54VT2GbACvpQgTZAEoh7xFwZS4ESSFgv";

// GET CITY INFO
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${API_KEY}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();

  // console.log("GET CITY", data[0]);
  return data[0];
};

// GET WEATHER API CALL
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${API_KEY}`;
  const response = await fetch(base + query);
  const data = await response.json();

  // console.log("GET WEATHER", data[0]);
  return data[0];
};

getCity("tashkent");

getWeather("351199");
