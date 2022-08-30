function WeatherWidget({celsius, unit, icon, city }) {
  let temperature = celsius;
  const unitIsFahrenheit = unit === "F";

  if (unitIsFahrenheit) {
    temperature = celsius * 1.8 + 32;
  }

  return (
    <div className="WeatherWidget">
      <span>{icon}</span>
      <h3>{city}</h3>
      <h2>
        {temperature} °{unit}
      </h2>
    </div>
  );
}

export default WeatherWidget;
