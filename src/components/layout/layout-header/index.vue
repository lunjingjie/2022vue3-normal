<template>
  <a-layout-header class="header">
    <div class="left">
      <div>
        <Logo />
      </div>
      <div class="title">
        {{ APP_TITLE }}
      </div>
    </div>
    <div class="tool">
      <a-space :size="24">
        <MultipleLanguage></MultipleLanguage>
        <Github></Github>
        <Theme></Theme>
        <Avatar></Avatar>
      </a-space>
    </div>
  </a-layout-header>
</template>
<script setup>
import { APP_TITLE } from '../../../constant';
import Logo from '../../logo/index.vue';
import Avatar from '../../header-tool/avatar/index.vue';
import Theme from '../../header-tool/theme/index.vue';
import MultipleLanguage from '../../header-tool/multiple-language/index.vue';
import Github from '../../header-tool/github/index.vue';
</script>
<style lang="less" scoped>
@height: 60px;

.header {
  height: @height;
  display: flex;
  line-height: @height;
  margin-right: 15px;

  .left {
    width: 300px;
    display: flex;
    flex: 1;

    .title {
      font-size: 22px;
      font-weight: bold;
      color: #37383C;
    }
  }

  .tool {
    display: flex;
    align-items: center;
  }
}
</style>