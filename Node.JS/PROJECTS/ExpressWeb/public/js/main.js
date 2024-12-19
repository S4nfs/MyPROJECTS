const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault(); // prevent default action of the event
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Enter City First`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c631f7bd93f21b7bcb88127e4a9d8cc2`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      //showing data from array of an object
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;
      //temp_status.innerText = arrData[0].weather[0].main;
      const tempMood = arrData[0].weather[0].main;
      if (tempMood == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: orange;'></i>";
      } else if (tempMood == "Cloudy") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: grey;'></i>";
      } else if (tempMood == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-showers-heavy' style='color: blue;'></i>";
      } else if (tempMood == "Snowy") {
        temp_status.innerHTML =
          "<i class='fas fa-snowflake' style='color: white;'></i>";
      } else if (tempMood == "Thunder") {
        temp_status.innerHTML =
          "<i class='fas fa-bolt' style='color: black;'></i>";
      } else if (tempMood == "Mist") {
        temp_status.innerHTML =
          "<i class='fas fa-smog' style='color: rgb (205, 216, 217) ;'></i>";
      } else if (tempMood == "Haze") {
        temp_status.innerHTML =
          "<i class='fas fa-smog' style='color: #B7C0BE;'></i>";
      } else if (tempMood == "Dust") {
        temp_status.innerHTML =
          "<i class='fas fa-smog' style='color: #C9C1B5;'></i>";
      } else if (tempMood == "Fog") {
        temp_status.innerHTML =
          "<i class='fas fa-smog' style='color: white;'></i>";
      } else if (tempMood == "Sand") {
        temp_status.innerHTML =
          "<i class='fas fa-smog' style='color: yellow;'></i>";
      } else if (tempMood == "Ash") {
        temp_status.innerHTML =
          "<i class='fas fa-smog' style='color: ash;'></i>";
      } else if (tempMood == "Squall") {
        temp_status.innerHTML =
          "<i class='fas fa-smog' style='color: #3A3B35;'></i>";
      } else if (tempMood == "Tornado") {
        temp_status.innerHTML =
          "<i class='fas fa-smog' style='color: grey';></i>";
      } else if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: grey;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Enter City Name Properly`;
      datahide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
