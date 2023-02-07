// console.log("hello");

const options = {
  method: "GET",
  headers: {
    // "X-RapidAPI-Key": "2508685211msh62f754b1220c651p11ee34jsn0d3da0029bef",
    // // or
    "X-RapidAPI-Key": "1ffb6551edmshce58a9935831bedp1cc4f8jsnd1b64d9dc93f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
let api = (city) => {
  //   console.log(city);
  state_name.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((response) => {
      console.log(response.messages);
      if (response.error != "An unexpected error occured.") {
        console.log(response, "response-----");
        temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      } else {
        console.log("callled --------", response.error);
        ul.style.display = "none";
        temperature.style.display = "none";
        col.innerHTML = `"<h4 class="mt-4">Data is not Found</h4>"`;
        location.reload();
      }
    })
    .catch((e) => {
      console.error(e);
    });
};
//input button
Addvalue.addEventListener("click", (e) => {
  //   console.log(e.preventDefault());
  //   console.log(city.value);

  // city is a id name of input box
  if (city.value) {
    api(city.value);
    e.preventDefault();
  } else {
    alert("please enter value");
  }
  city.value = "";
});
api("Delhi");
