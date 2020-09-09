<template>
  <div class="weather">
    <div class="weather-news">
      <div class="news-icon">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-newspaper"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"
          />
          <path
            d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"
          />
        </svg>
      </div>
      <div class="w-n-meta">
        <h3>Tuesday Capsule</h3>
        <p>Get On The Fly</p>
        <a href="/Weather/News">Brief Me</a>
      </div>
    </div>
    <div class="weather-forecast">
      <div>AmsterDam, Netherlands</div>
      <div class="weather-meta">
        <div class="weather-icon">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-cloud"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
            />
          </svg>
        </div>
        <div class="weather-desc">
          <h2>28 ○C</h2>
          <small>Cloudy Day, Chances Of Rain</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {},
};
</script>

<style scoped>
.weather {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
}
.weather-news {
  width: 100%;
  height: 50%;
  background-color: #eee;
  border-radius: 10px;
  display: flex;
}
.news-icon {
  width: 40%;
  font-size: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-n-meta {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-left: 10px;
}
.weather-forecast {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
}
.weather-meta {
  width: 100%;
  display: flex;
}
.weather-icon {
  width: 20%;
  font-size: 48px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.weather-desc {
}
</style>