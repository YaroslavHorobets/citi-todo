<template>
  <header class="header"></header>
  <div class="nav">
    <a href=""><Logotype /></a>
  </div>
</template>

<script>
import Logotype from "../assets/Logotype.vue";
export default {
  components: {
    Logotype,
  },
};
</script>

<style>
.header {
  width: 100%;
  height: 53px;
  max-width: 1920px;
  background-color: #333333;
  color: wheat;
}
.nav {
  width: 100%;
  max-width: 1920px;
  position: relative;
  background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
  height: 96px;
}
.nav a {
  position: absolute;
  height: 66px;
  bottom: calc((96px - 66px) / 2);
  left: 377px;
}
</style>
