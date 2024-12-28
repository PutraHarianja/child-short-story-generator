<template>
  <div class="app_background"></div>
  <div class="app_main">
    <AiGenerator />
  </div>
</template>

<script>
import AiGenerator from "./components/AiGenerator.vue";

export default {
  components: {
    AiGenerator,
  },
};
</script>

<style>
.app_main {
  padding: 0 1rem;
}
.app_background {
  background-image: url("./assets/christmas-vertical-background-design.jpg");
  background-position: 50% 50%;
  background-color: rgba(255, 255, 255, 0.4);
  background-blend-mode: lighten;
  height: 100vh;
  width: 100vw;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
/* Add your styles here */
</style>
