const API_KEY = `ed749bf021b14e7f8c956337e5588861`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
// let Main = document.querySelector(".main");
// if (data.main.temp > 25) {
//     Main.style.backgroundColor = "#ebd534";
//   } else if (data.main.temp > 19) {
//     Main.style.backgroundColor = "#34d0eb";
//   } else if (data.main.temp > 15) {
//     Main.style.backgroundColor = "#7b9ca6";
//   } else {
//     Main.style.backgroundColor = "#ebf1f2";
//   }


const getweather = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};

const showWeather = (data) => {
  weather.innerHTML = ` <div class="row" style="display: flex; flex-direction: column" id="weather">
    <h3>Temperature: ${data.main.temp}</h3>
    <img src="http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png" alt=""></img>     
  </div>`;
};

form.addEventListener("submit", open);
function open(e) {
  getweather(search.value);
  e.preventDefault();
}


  


