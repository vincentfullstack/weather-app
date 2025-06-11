export async function fetchHistory() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/history`);
  if (!res.ok) throw new Error("Failed to fetch history");
  return await res.json();
}

export async function postHistory(weatherData) {
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/history`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      city: weatherData.name,
      temp: weatherData.main.temp,
      description: weatherData.weather[0].description,
    }),
  });
}
