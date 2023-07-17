<script setup lang="ts">
import { useAuthStore } from "@/stores/user";
const authStore = useAuthStore();

const props = defineProps({
  type: String,
});
</script>

<template>
  <footer :class="{ 'minWindow': !authStore.isAuth, 'profile-footer': type==='profile', 'auth-footer': type==='auth' }">
    <span>created by <a class="link" href="https://github.com/jnzm02" target="_blank">Devhouse</a></span>
    <span>devChallenges.io</span>
  </footer>
</template>

<style scoped lang="scss">
.link {
  color: #2D9CDB;
  cursor: pointer;
  text-decoration: none;
}

footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  max-width: 1024px;
  color: #828282;
  margin: 12px 0;
}

.profile-footer {
  width: 70%;
}

.auth-footer {
  width: 474px;
}
</style>