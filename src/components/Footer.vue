<template>
  <footer class="footer">
    <div class="footerContainer">
      <div class="footNav">
        <div>
          <a href=""><LogotypeSmallVue /></a>
        </div>
        <div class="footNav-links">
          <a href="">Terms & Conditions</a>
          <a href="">Privacy</a>
          <a href="">Notice at Collection</a>
          <a href="">CA Privacy Hub</a>
          <a href="">Contact Us </a>
          <a href="">Sitemap</a>
        </div>
      </div>
      <div class="delimiter"></div>
      <p class="copyText">
        Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
        Opportunity Lender.
      </p>
    </div>
  </footer>
</template>

<script>
import LogotypeSmallVue from "../assets/Logotype-small.vue";
export default {
  components: {
    LogotypeSmallVue,
  },
};
</script>

<style>
.footer {
  width: 100%;
  height: 175px;
  background: #333333;
  padding-top: 35px;
}
.footerContainer {
  width: 1170px;
  margin: 0 auto;
}
.delimiter {
  background-color: gray;
  border: 1px solid gray;
  margin: 35px auto;
}
.footNav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.footNav-links {
  width: 689px;
  display: flex;
  justify-content: space-between;
}
.footNav-links a {
  color: white;
  text-decoration: none;
}
.copyText {
  color: white;
  text-align: left;
}
</style>
