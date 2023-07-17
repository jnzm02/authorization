<script setup lang="ts">
  import { useAuthStore } from "@/stores/user";

  const authStore = useAuthStore();
</script>

<template>
    <body>
      <RouterView/>

      <footer :class="{ 'minWindow': !authStore.isAuth}">
          <span>created by <a class="link" href="https://github.com/jnzm02" target="_blank">Devhouse</a></span>
          <span>devChallenges.io</span>
      </footer>
    </body>
</template>

<style scoped>
body {
  background-color: #f3f3f3;
  min-height: calc(100% - 100px); /* Subtract footer height */
  padding-bottom: 100px; /* Footer height */
}

main {
  min-height: calc(100% - 100px); /* Subtract footer height */
  padding-bottom: 15px; /* Footer height */
  box-sizing: border-box;
}

footer {
  bottom: 20px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 14px;
  max-width: 1024px;
  color: #828282;
}

.minWindow {
  max-width: 475px;
}
</style>
