<template>
  <a-dropdown trigger="hover" type="text">
    <div>
      <a-avatar :size="32">
        <img alt="avatar"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
      </a-avatar>
      <span style="padding-left: 10px;">
        lunjingjie
      </span>
    </div>
    <template #content>
      <a-doption>
        <template #icon>
          <icon-settings />
        </template>
        <template #default>修改密码</template>
      </a-doption>
      <a-doption>
        <template #icon>
          <icon-export />
        </template>
        <template #default>退出登录</template>
      </a-doption>
    </template>
  </a-dropdown>
</template>
<script setup>
</script>