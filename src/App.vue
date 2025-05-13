<script setup lang="ts">
onMounted(() => {
  window.document.documentElement.setAttribute('data-theme', 'default')
})
</script>
<!-- 固定修改主题色为灰色 -->
<!-- 以下只使用了 theme-color 这个key 留意控制台html标签的属性 -->
<template>
  <yy-config-provider :theme="{ 'theme-color': 'red' }">
    <router-view />
  </yy-config-provider>
</template>
