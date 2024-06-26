<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-custom">
      <q-toolbar>
        <q-toolbar-title align="center">
          <q-avatar>
            <img alt="weather" src="./assets/weather.jpg">
          </q-avatar>
          WEATHER
        </q-toolbar-title>
        <q-tabs>
          <q-route-tab to="/tugas" label="Tugas" />
          <router-view />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div id="weather" class="q-pa-md">
        <q-card class="weather-widget">
          <q-card-section>
            <q-form @submit.prevent="updateWeather">
              <q-input v-model="city" placeholder="Enter city" outlined dense class="q-mb-md"/>
              <q-btn type="submit" label="Search" class="search-btn custom-btn" />
            </q-form>
          </q-card-section>
          <q-card-section class="display" v-if="weather">
            <div class="weather-info">
              <p>Location: <span class="highlight">{{ weather.name }}</span></p>
              <p>Temperature: <span class="highlight">{{ weather.main.temp }} °C</span></p>
              <p>Weather: <span class="highlight">{{ weather.weather[0].description }}</span></p>
              <img :src="getIconUrl(weather.weather[0].icon)" alt="Weather icon" class="weather-icon" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>

    <q-footer elevated class="bg-custom">
      <q-toolbar>
        <q-toolbar-title align="center">
          <div>ILHAM UAS PBK</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'WeatherWidget',
  data() {
    return {
      weather: null,
      city: '',
      API_KEY: '920dbb38dd7b1767bdf6d26ceacb11e7',
      BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
      UNITS: 'metric'
    };
  },
  methods: {
    async fetchWeather() {
      if (!this.city) return;
      try {
        const response = await fetch(`${this.BASE_URL}?q=${this.city}&units=${this.UNITS}&appid=${this.API_KEY}`);
        const data = await response.json();
        this.weather = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
    updateWeather() {
      this.fetchWeather();
    },
    getIconUrl(iconCode) {
      return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    }
  },
  mounted() {
    this.fetchWeather();
  }
};
</script>

<style>
.bg-custom {
  background-color: #7FC7D9;
  color: #0F1035;
}

#weather {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  background-image: url('./assets/background.jpg');
  margin-top: -155px;
}

.weather-widget {
  max-width: 400px;
  width: 100%;
  min-height: 400px; 
  background-color: #7FC7D9;
  color: #ecf0f1;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: 'Arial', sans-serif;
}

.q-card-section {
  padding: 30px; 
}

.input-city {
  margin-bottom: 20px;
}

.search-btn {
  display: block;
  width: 100%;
  color: white;
  font-weight: bold;
}

.display {
  text-align: center;
  background-color: #365486;
  padding: 30px; 
  border-radius: 0 0 20px 20px;
}

.weather-info {
  margin-top: 20px;
}

.weather-info p {
  margin: 15px 0;
}

.highlight {
  color: #f39c12;
  font-weight: bold;
}

.weather-icon {
  width: 100px;
  height: 100px;
  margin-top: 20px;
}


.highlight {
  color: #f39c12;
  font-weight: bold;
}

.custom-btn{
  background-color: #0F1035;
}
</style>
