<template>
  <!-- <Header /> -->
  <router-view />
  <!-- <Footer /> -->
</template>

<script>
export default {
  mounted() {
    localStorage.setItem("isAuthorized", false);
    localStorage.setItem("User", "");
  },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  max-width: 1920px;
}
body {
  margin: 0 auto;
  max-width: 1920px;
}
</style>
