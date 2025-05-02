<template>
  <div class="css-arrow-ct">
    <div class="css-arrow-line"></div>
    <div class="css-arrow-head"></div>
  </div>
</template>

<script setup lang="ts">
// 无需props
</script>

<script lang="ts">
export default {
  name: 'CssArrow'
}
</script>

<style scoped>
.css-arrow-ct {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 56px;
  position: relative;
}
.css-arrow-line {
  width: 44px;
  height: 4px;
  border-radius: 2px;
  background: repeating-linear-gradient(90deg, #60a5fa 0 16px, #000 16px 32px);
  background-size: 32px 4px;
  animation: arrow-move 0.8s linear infinite;
}
.css-arrow-head {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 12px solid #60a5fa;
  margin-left: -2px;
}
@keyframes arrow-move {
  0% { background-position-x: 0; }
  100% { background-position-x: 32px; }
}
</style> 