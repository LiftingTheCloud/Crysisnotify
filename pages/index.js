import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=42f6e391e323921d579a687cf30d42fd&units=metric`
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

