<template>
  <a-layout class="wrap">
    <LayoutHeader></LayoutHeader>
    <div class="divider"></div>
    <a-layout>
      <LayoutSider></LayoutSider>
      <a-layout>
        <LayoutContent></LayoutContent>
        <div class="divider"></div>
        <LayoutFooter></LayoutFooter>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import LayoutHeader from './layout-header/index.vue';
import LayoutSider from './layout-sider/index.vue';
import LayoutContent from './layout-content/index.vue';
import LayoutFooter from './layout-footer/index.vue';
</script>
<style lang="less" scoped>
.wrap {
  height: 100vh;

  .divider {
    width: 100%;
    height: 1px;
    background-color: #E5E6EB;
  }
}
</style>