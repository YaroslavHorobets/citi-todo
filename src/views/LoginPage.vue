<template>
  <Header />
  <div class="login-page">
    <div class="background">
      <p>
        Welcome to <br />
        Business Analytics Online
      </p>
      <img src="../assets/Background.png" alt="container background" />
      <LoginForm />
    </div>
    <div class="businessInfo">
      <p>
        <span>Business Analytics</span>
        — a new, convenient tool for managing and forecasting your business
        performance, which will help analyze your own finances and cash flows,
        visualize your reporting, business processes, KPI's
      </p>
      <h4>
        <img class="checkVector" src="../assets/Vector.png" alt="" />
        Interactive Reporting
      </h4>
      <p class="checkText">
        In just a few clicks, you can connect your data from 1C, CRM (Bitrix24,
        AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova
        Poshta), Google Analytics and many more systems that reflect different
        aspects of business activities.
      </p>
      <h4>
        <img class="checkVector" src="../assets/Vector.png" alt="" />Automated
        data updates
      </h4>
      <p class="checkText">
        The application automatically updates and structures the data in just 60
        seconds, saving you time and money.
      </p>
      <h4>
        <img class="checkVector" src="../assets/Vector.png" alt="" />Data
        Security
      </h4>
      <p class="checkText">
        The Bank guarantees the safety of your personal data, ensuring their
        integrity and confidentiality.
      </p>
    </div>
  </div>
  <Footer />
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    LoginForm,
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700&family=Roboto:wght@100;300;400;500;700&display=swap");
.login-page {
}
.background {
  position: relative;
  height: 457px;
}
.background img {
  width: 100%;
  height: auto;
}
.background p {
  position: absolute;
  width: 629px;
  height: 172px;
  left: 371px;
  bottom: 70px;
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 55px;
  line-height: 86px;
  text-align: left;
  color: #ffffff;
}
.businessInfo {
  width: 664px;
  margin-bottom: 40px;
  margin-top: 40px;
  margin-left: 377px;
  text-align: left;
  color: #333333;
}
.businessInfo span {
  font-weight: 500;
  font-size: 16px;
}
.checkText {
  padding-left: 35px;
  font-size: 14px;
}
.checkVector {
  margin-right: 10px;
}
@media (max-width: 1919px) {
  .background p {
    font-size: 45px;
    left: 280px;
    bottom: 155px;
  }
  .businessInfo {
    width: 564px;
    margin-bottom: 40px;
    margin-top: -80px;
    margin-left: 287px;
  }
  .businessInfo span {
    font-weight: 500;
    font-size: 16px;
  }
  .checkText {
    padding-left: 35px;
    font-size: 14px;
  }
}
</style>
