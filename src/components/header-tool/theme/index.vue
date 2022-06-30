<template>
  <a-button type="text" style="color: #1D2129;" @click="isDark = !isDark">
    <template #icon>
      <icon-sun-fill :size="24" v-if="!isDark"/>
      <icon-moon-fill :size="24" v-else/>
    </template>
  </a-button>
</template>
<script setup>
import { ref } from 'vue'; 

let isDark = ref(false);

const changeStatus = () => {
  isDark = !isDark;
  console.log(isDark);
}
</script>