import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=a18ceb9f48a77d08cf51731b1e25ec8f&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 drop-shadow-md">🌤️ รายงานสภาพอากาศ</h1>

      {weather ? (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg text-center w-80">
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
            className="mx-auto"
          />
          <p className="text-lg font-medium">อุณหภูมิ: {weather.main.temp}°C</p>
          <p className="text-lg">ความชื้น: {weather.main.humidity}%</p>
          <p className="text-lg capitalize">สภาพอากาศ: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p className="text-lg font-medium">⏳ กำลังโหลดข้อมูล...</p>
      )}
    </div>
  );
}