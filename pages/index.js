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
    <div>
      <h1>รายงานสภาพอากาศ</h1>
      {weather ? (
        <p>อุณหภูมิ: {weather.main.temp}°C</p>
      ) : (
        <p>กำลังโหลดข้อมูล...</p>
      )}
    </div>
  );
}
