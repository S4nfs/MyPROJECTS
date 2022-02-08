const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
  event.preventDefault(); // prevent default action of the event
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Enter City First`;
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c631f7bd93f21b7bcb88127e4a9d8cc2`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      //showing data from array of an object
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;
    } catch {
      city_name.innerText = `Enter City Name Properly`;
    }
  }
}
submitBtn.addEventListener("click", getInfo);
