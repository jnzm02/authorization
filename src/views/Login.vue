<template>
  <main>
    <div class="window">
      <img src="/devchallenges.svg" alt="devchallenges">
      <p class="title">Login</p>
      <div class="input">
        <img src="/mail.svg" alt="mail">
        <input type="text" v-model="email" placeholder="Email">
      </div>
      <div class="input">
        <img src="/mail.svg" alt="mail">
        <input type="password" placeholder="Password">
      </div>
      <div class="button" @click="login">Login</div>
      <p class="temp">or continue with these social profile</p>
      <div class="accounts">
        <img src="/Google.svg" alt="google">
        <img src="/Facebook.svg" alt="facebook">
        <img src="/Twitter.svg" alt="twitter">
        <img src="/Gihub.svg" alt="github">
      </div>
      <p class="temp">Don’t have an account yet? <span class="link" @click="$router.push('register')">Register</span></p>
    </div>
    <div class="bottom">
      <span>created by <a class="link" href="https://github.com/jnzm02" target="_blank">jnzm02</a></span>
      <span>devChallenges.io</span>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import router from "@/router";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore()

const email = ref('')
const login = () => {
  router.push('profile')
  userStore.updateEmail(email.value)
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100vw;
  background-color: #f3f3f3;
}

.window {
  width: 374px;
  padding: 50px;
  border: #BDBDBD 1px solid;
  border-radius: 24px;
}

.title {
  font-size: 18px;
  font-weight: 600;
}

.description {
  letter-spacing: -0.56px;
  color: #333;
  margin-bottom: 34px;
}

.input {
  margin-top: 14px;
  display: flex;
  border-radius: 8px;
  padding: 12px;
  border: #BDBDBD 1px solid;
  img {
    width: 24px;
    height: 24px;
  }
  input {
    font-size: 16px;
    background: none;
    height: 24px;
    border: none;
    margin-left: 8px;
    color: #828282;
    font-weight: 400;
    width: 100%;
    &:focus {
      color: black;
      outline: none;
    }
  }
}

.button {
  cursor: pointer;
  margin-top: 22px;
  padding: 10px;
  text-align: center;
  background: var(--blue-1, #2F80ED);
  color: white;
  border-radius: 8px;
  margin-bottom: 32px;
}

.temp {
  margin-top: 14px;
  text-align: center;
  color: #828282;
  font-size: 14px;
}

.accounts {
  margin: 22px 0;
  display: flex;
  gap: 21px;
  justify-content: center;
  align-items: center;
}

.link {
  color: #2D9CDB;
  cursor: pointer;
}

.bottom {
  margin-top: 12px;
  display: flex;
  width: 474px;
  justify-content: space-between;
  align-items: center;
  color: #828282;
  font-size: 14px;
}
</style>
