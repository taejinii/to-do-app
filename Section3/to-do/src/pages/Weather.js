import { useState, useEffect } from "react";
import Loading from "../components/Loading";
const Weather = () => {
  const [regionText, setRegionText] = useState("");
  const [region, setRegion] = useState("seoul");
  const [weather, setWeather] = useState("");
  const [weatherImg, setWeatherImg] = useState("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${region}&units=metric&lang=kr&appid=7f4c1815c9b13c233ecbae0f76a0ef1e`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [region]);
  useEffect(() => {
    if (weather && weather.weather[0].main === "Clouds") {
      setWeatherImg("https://cdn-icons-png.flaticon.com/512/4814/4814300.png");
    }
    if (weather && weather.weather[0].main === "Snow") {
      setWeatherImg("https://cdn-icons-png.flaticon.com/512/4814/4814725.png");
    }
    if (weather && weather.weather[0].main === "Dust") {
      setWeatherImg("https://cdn-icons-png.flaticon.com/512/4814/4814808.png");
    }
    if (weather && weather.weather[0].main === "Sun") {
      setWeatherImg("https://cdn-icons-png.flaticon.com/512/4814/4814275.png");
    }
    if (weather && weather.weather[0].main === "Sand") {
      setWeatherImg("https://cdn-icons-png.flaticon.com/512/4814/4814935.png");
    }
    if (weather && weather.weather[0].main === "Mist") {
      setWeatherImg("https://cdn-icons-png.flaticon.com/512/4814/4814319.png");
    }
  }, [weather]);

  const handleRegionText = (e) => {
    setRegionText(e.target.value);
  };
  const handleRegion = () => {
    if (!regionText) {
      alert("지역을 입력해주세요");
      return;
    }
    setRegion(regionText);
  };
  return (
    <div className="weather">
      <section>
        <div className="weather-image">
          {weatherImg ? (
            <img src={weatherImg} alt="" />
          ) : (
            <img alt="Notfount Image" />
          )}
        </div>
        <div>
          <h2>{`오늘 ${region}의 날씨는 ${
            weather && weather.weather[0].main
          }입니다.`}</h2>
          <div className="weather-tempture">
            <div>온도 : {`${weather && weather.main.temp} °C`}</div>
            <div>체감온도 : {`${weather && weather.main.feels_like} °C`}</div>
            <div>최고온도 : {`${weather && weather.main.temp_max} °C`}</div>
            <div>최저온도 : {`${weather && weather.main.temp_min} °C`}</div>
          </div>
        </div>
        <div className="weather-region-search">
          <input
            type="text"
            placeholder="지역명은 영어로 입력해주세요 ex)seoul"
            onChange={handleRegionText}
          />
          <button onClick={handleRegion}>검색</button>
        </div>
      </section>
    </div>
  );
};
export default Weather;
