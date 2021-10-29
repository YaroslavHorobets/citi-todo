<template>
  <form @submit.prevent="redirect" class="loginForm">
    <label for="nameInp">
      Name
      <input v-model="form.name" name="nameInp" type="text" />
    </label>
    <label for="passInp">
      Password
      <input v-model="form.password" name="passInp" type="password" />
    </label>
    <button type="submit">LOGIN</button>
    <a class="forgotLink" href="#">Forgot Password</a>
    <a class="regLink" href="#">Register now</a>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        password: null,
      },
    };
  },
  methods: {
    redirect() {
      if (this.form.name === "Admin" && this.form.password === "12345") {
        localStorage.setItem("isAuthorized", true);
        localStorage.setItem("User", this.form.name);
        this.$router.push({ name: "Todo" });
      }
      return;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700&family=Roboto:wght@100;300;400;500;700&display=swap");
.loginForm {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 421px;
  height: 464px;
  left: 1067px;
  top: 275px;
  border: none;
  background: #ffffff;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
}
.loginForm label {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  margin-top: 40px;
}
.loginForm input {
  width: 100%;
  height: 53px;
  margin-top: 7px;
  background: #ffffff;
  border: 1px solid #9a9a9a;
  box-sizing: border-box;
}
.loginForm button {
  margin-top: 40px;
  height: 53px;
  background: #0076c0;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.forgotLink {
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #056dae;
}
.regLink {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 63px;
  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: #333333;
  font-size: 25px;
  line-height: 29px;
  background: #f6f6f6;
}
</style>
