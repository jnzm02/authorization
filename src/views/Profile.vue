<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import Footer from "@/components/footer.vue";
import Navbar from "@/components/navbar.vue";

const userStore = useUserStore();
const user = ref(userStore.user);

</script>

<template>
  <main>
    <Navbar active="my-profile" />
    <div class="title">Personal info</div>
    <div class="description">Basic info, like your name and photo</div>
    <div class="window">
      <header>
        <div>
          <p class="header-text">Profile</p>
          <p class="temp">Some info may be visible to other people</p>
        </div>
        <button @click="$router.push('update')">Edit</button>
      </header>
      <hr>
      <div class="info">
        <div class="left">PHOTO</div>
        <div class="right">
          <div v-if="user.photo">
            <img :src="user.photo" alt="avatar">
          </div>
          <div v-else>
            <img src="/blank.svg" alt="avatar">
          </div>
        </div>
      </div>
      <hr>
      <div class="info">
        <div class="left">NAME</div>
        <div class="right">
          {{ user.name }}
        </div>
      </div>
      <hr>
      <div class="info">
        <div class="left">BIO</div>
        <div class="right">
          {{ user.bio }}
        </div>
      </div>
      <hr>
      <div class="info">
        <div class="left">PHONE</div>
        <div class="right">
          {{ user.phone }}
        </div>
      </div>
      <hr>
      <div class="info">
        <div class="left">EMAIL</div>
        <div class="right">
          {{ user.email }}
        </div>
      </div>
      <hr>
      <div class="info">
        <div class="left">PASSWORD</div>
        <div class="right">
          {{ user.password }}
        </div>
      </div>
    </div>
    <Footer type="profile"/>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #f3f3f3;
}

.title {
  font-size: 36px;
  letter-spacing: -1.26px;
  margin-bottom: 8px;
}

.description {
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.63px;
  margin-bottom: 44px;
}


.window {
  width: 70%;
  border-radius: 12px;
  border: 1px solid #E0E0E0;
  max-width: 1024px;
}

.header-text {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.84px;
  margin-bottom: 8px;
}

.temp {
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.455px;
  color: #828282;
}

header {
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

button {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.56px;
  color: #828282;
  padding: 8px 36px;
  border-radius: 12px;
  border: 1px solid #828282;
  cursor: pointer;
}

hr {
  border: 0.5px solid #E0E0E0;
}

.info {
  min-height: 72px;
  text-align: left;
  display: grid;
  grid-template-columns: 0.35fr 1fr;
  padding: 0 50px;
  .left {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: -0.455px;
    color: #BDBDBD;
    display: flex;
    align-items: center;
  }
  .right {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.63px;
    display: flex;
    align-items: center;
  }
  img {
    width: 72px;
    height: 72px;
    border-radius: 8px;
  }
}
.link {
  color: #2D9CDB;
  cursor: pointer;
}
</style>
