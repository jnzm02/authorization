<script setup lang="ts">
</script>

<template>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<style scoped>
body {
  background-color: #f3f3f3;
  margin: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
