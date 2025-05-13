<script setup lang="ts">
const changeSkin = (skin: string) => {
  window.document.documentElement.setAttribute('data-theme', skin)
}
</script>

<template>
  <div class="index">
    <yy-button @click="changeSkin('pink')">粉色主题</yy-button>
    <yy-button @click="changeSkin('violet')">紫色主题</yy-button>
    <yy-header title="YYUI使用手册" />
    <yy-button>点击</yy-button>
  </div>
</template>

<style scoped lang="scss">
.index {
}
</style>
