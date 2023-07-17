<script lang="ts" setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const user = ref(userStore.user);
const props = defineProps({
  active: String,
});

const isRotated = ref(false);
const updateDrop = () => {
  isRotated.value = !isRotated.value;
};

</script>

<template>
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
</template>

<style scoped lang="scss">
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
</style>
