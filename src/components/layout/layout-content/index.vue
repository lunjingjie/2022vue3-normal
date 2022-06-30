<template>
  <a-layout-content :style="{ height: offsetHeight + 'px' }">Content</a-layout-content>
</template>
<script setup>
import { ref } from 'vue';

let offsetHeight = ref(0);
offsetHeight = document.body.offsetHeight;

window.onresize = () => {
  offsetHeight = document.body.offsetHeight;
}
</script>
<style lang="less" scoped>
</style>