<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">Прогноз погоды</h1>
    <form @submit.prevent="fetchWeather" class="flex flex-col items-center">
      <div class="mb-4 w-full max-w-md">
        <label for="city" class="block text-sm font-medium text-gray-700"
          >Город</label
        >
        <input
          v-model="city"
          id="city"
          name="city"
          type="text"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">
        Узнать погоду
      </button>
    </form>
    <div
      v-if="weather"
      class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <div class="col-span-1 bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-2">{{ weather.name }}</h2>
        <p>Температура: {{ weather.main.temp }}°C</p>
        <p>Влажность: {{ weather.main.humidity }}%</p>
        <p>Описание: {{ weather.weather[0].description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getWeather } from "@/services/weatherService";

export default {
  data() {
    return {
      city: "",
      weather: null,
    };
  },
  methods: {
    async fetchWeather() {
      try {
        this.weather = await getWeather(this.city);
      } catch (error) {
        console.error("Ошибка при получении данных о погоде:", error);
        alert(
          "Не удалось получить данные о погоде. Пожалуйста, проверьте правильность ввода города."
        );
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 640px;
}
</style>
