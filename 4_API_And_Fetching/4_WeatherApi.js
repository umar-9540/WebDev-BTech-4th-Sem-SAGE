let apiKey = "cc1e411479e2b8417decbc2ba7ad2acb";

const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");

const geoUrl = (cityName) => {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
};

const weatherApi = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
};

btn.addEventListener("click", () => {
  //   console.log(inp.value.trim());
  let value = inp.value.trim();
  let url = geoUrl(value);
  inp.value = "";

  axios
    .get(url)
    .then((res) => {
      // console.log(res.data[0]);
      let lat = res.data[0].lat;
      let lon = res.data[0].lon;
      // console.log(lat, lon);
      return { lat, lon };
    })
    .then((data) => {
      let lat = data.lat;
      let lon = data.lon;
      let url = weatherApi(lat, lon);
      // console.log(url);

      axios.get(url).then((res) => {
        console.log(res.data);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
