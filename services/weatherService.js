import axios from "axios";

const API_KEY = "8c34d1c1e65d3b9b1fe4ec2c3f3624a5";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
        lang: "ru",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных о погоде:", error);
    throw error;
  }
};
