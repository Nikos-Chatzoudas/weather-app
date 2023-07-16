const apikey = "adbf62a1020333bbb5eabce0b43b4896";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const imageElement = document.getElementById("weather-image");
const descriptionElement = document.querySelector(".description");

btn.addEventListener("click", async () => {
  const response = await fetch(
    apiurl + "&appid=" + apikey + "&q=" + input.value
  );
  const data = await response.json();

  console.log(data);
  if (data.cod === "404") {
    imageElement.setAttribute("src", "/images/404.png");
    document.querySelector(".temperature").innerHTML = "404";
    descriptionElement.innerHTML = "city not found";
  } else {
    switch (data.weather[0].main) {
      case "Clear":
        imageElement.setAttribute("src", "/images/clear.png");
        descriptionElement.innerHTML = data.weather[0].description;
        break;

      case "Rain":
        imageElement.setAttribute("src", "/images/rain.png");
        descriptionElement.innerHTML = data.weather[0].description;
        break;

      case "Snow":
        imageElement.setAttribute("src", "/images/snow.png");
        descriptionElement.innerHTML = data.weather[0].description;
        break;

      case "Clouds":
        imageElement.setAttribute("src", "/images/cloud.png");
        descriptionElement.innerHTML = data.weather[0].description;
        break;

      case "Haze":
        imageElement.setAttribute("src", "/images/haze.png");
        descriptionElement.innerHTML = data.weather[0].description;
        break;
    }

    document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
    document.querySelector(".weather-details .humidity span").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".weather-details .wind span").innerHTML =
      data.wind.speed + " km/s";
  }
});
