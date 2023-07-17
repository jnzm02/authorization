<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import Footer from "@/components/footer.vue";

const userStore = useUserStore();
const user = ref(userStore.user);

const isRotated = ref(false);
const updateDrop = () => {
  isRotated.value = !isRotated.value;
};

const active = ref("my-profile");
</script>


<template>
  <main>
    <nav class="profile-nav">
      <img src="/devchallenges.svg" alt="devchallenges">
      <div class="profile">

        <div v-if="user.photo">
          <img :src="user.photo" alt="avatar">
        </div>

        <div v-else>
          <img src="/blank.svg" alt="avatar">
        </div>

        <p v-if="user.name || user.email">{{ user.name || user.email }}</p>

        <img src="/arrow-bottom.svg" alt="arrow" @click="updateDrop" class="rotate-icon" :class="{ 'rotate': isRotated }">
        <dialog :class="{ 'visible': isRotated }">
          <div class="drop-option" :class="{ 'active' : active==='my-profile'}"><img src="/my-profile.svg" alt="">My Profile</div>
          <div class="drop-option" :class="{ 'active' : active==='group-chat'}"><img src="/group-chat.svg" alt="">Group Chat</div>
          <hr>
          <div class="drop-option" :class="{ 'active' : active==='logout'}" style="color: #EB5757"><img src="/logout.svg" alt="">Logout</div>
        </dialog>
      </div>
    </nav>
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
  width: 100vw;
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

.profile-nav {
  width: 100vw;
  // overflow: auto;
  max-width: 1324px;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
}

.profile {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .visible {
    width: 196px;
    margin-right: 10%;
    z-index: 1;
    padding: 12px;
    gap: 2px;
    display: flex;
    flex-direction: column;
    top: 100%;
    right: 0;
    margin-top: 10px;
    border-radius: 12px;
    border: 1px solid #E0E0E0;
    background: #FFF;
    list-style: none;
    transition: height 0.3s;
    animation:a 6s infinite;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    :hover {
      background: #555555;
    }
  }
  .drop-option {
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    cursor: pointer;
  }
  .active {
    background: #F2F2F2 !important;
  }
  hr {
    border: 1px solid #E0E0E0;
    margin: 4px 0;
  }
}

.rotate-icon {
  transition: transform 0.3s;
  transform: rotate(-180deg);
}

.rotate-icon.rotate {
  transform: rotate(0deg);
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
