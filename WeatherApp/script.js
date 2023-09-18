// Replace Feather Icons

feather.replace();

/* Todays date and day*/
const today = new Date();

const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayOfWeek = daysOfWeek[today.getDay()];
const month = monthsOfYear[today.getMonth()];

const date = today.getDate();
const year = today.getFullYear();
/* Todays date and day*/

// Construct the date and day string
const dateToday = `${date} ${month}, ${year}`;
const DayString = `${dayOfWeek}`;

// Display the date and day in an HTML element
const dateElement = document.querySelector(".date-day");
const dayElement = document.querySelector(".date-dayname");
dateElement.textContent = dateToday;
dayElement.textContent = DayString;

const dayyy_1 = daysOfWeek[today.getDay() + 1];
const dayyy_2 = daysOfWeek[today.getDay() + 2];
const dayyy_3 = daysOfWeek[today.getDay() + 3];
const dayyy_4 = daysOfWeek[today.getDay() + 4];

const dayy_1 = document.getElementById("day-1");
const dayy_2 = document.getElementById("day-2");
const dayy_3 = document.getElementById("day-3");
const dayy_4 = document.getElementById("day-4");

dayy_1.textContent = dayyy_1;
dayy_2.textContent = dayyy_2;
dayy_3.textContent = dayyy_3;
dayy_4.textContent = dayyy_4;

// Add an event listener to the "Change location" button
const changeLocationButton = document.getElementById("change-location-button");
changeLocationButton.addEventListener("click", () => {
  // Prompt the user to enter a new location
  const newLocation = prompt("Enter a new location:");
  if (newLocation !== null) {
  } else {
    alert("please enter a city");
  }

  const apiUrl = "https://api.weatherapi.com/v1/forecast.json?";
  const key = "58b6a2d6f2be49e6bf745743231709";
  const imageElement = document.querySelector("weather-icon");
  fetch(apiUrl + "key=" + key + "&q=" + newLocation + "&days=4")
    .then((res) => res.json())

    .then((data) => {
      console.log(data);

      const city = document.getElementById("city-location");
      const temp = document.querySelector(".weather-temp");
      const desc = document.querySelector(".weather-desc");
      const icon = document.querySelector(".weather-icon");
      const preci = document.querySelector(".precipitation .value");
      const humi = document.querySelector(".humidity .value");
      const wind = document.querySelector(".wind .value");
      const temp_1 = document.getElementById("temp-1");
      const temp_2 = document.getElementById("temp-2");
      const temp_3 = document.getElementById("temp-3");
      const temp_4 = document.getElementById("temp-4");

      if (data.location.name) {
        city.textContent = data.location.name + ", " + data.location.country;
        temp.textContent = data.current.temp_c + "°C";
        desc.textContent = data.current.condition.text;
        icon.textContent = data.current.condition.icon;
        preci.textContent = " " + data.current.precip_mm;
        humi.textContent = data.current.humidity + "%";
        wind.textContent = data.current.wind_kph + "kph";
        temp_1.textContent = data.forecast.forecastday[0].day.avgtemp_c;
        temp_2.textContent = data.forecast.forecastday[1].day.avgtemp_c;
        temp_3.textContent = data.forecast.forecastday[2].day.avgtemp_c;
        temp_4.textContent = data.forecast.forecastday[3].day.avgtemp_c;
      } else {
        city.textContent = "City not found";
      }
    });
});
