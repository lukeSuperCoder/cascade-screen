<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #000000; /* 纯黑色背景 */
  color: #ffffff;
}

* {
  box-sizing: border-box;
}
</style>
