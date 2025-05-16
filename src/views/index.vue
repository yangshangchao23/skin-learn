<script setup lang="ts">
const changeSkin = (skin: string) => {
  window.document.documentElement.setAttribute('data-theme', skin)
}
</script>

<template>
  <div class="index">
    <DarkModeBtn />
    <yy-button @click="changeSkin('pink')">粉色主题</yy-button>
    <yy-button @click="changeSkin('violet')">紫色主题</yy-button>
    <yy-header title="YYUI使用手册" />
    <yy-button>点击</yy-button>
    <h1>文字</h1>
    <InvertModeBtn />
    <GrayModeBtn />
  </div>
</template>

<style scoped lang="scss">
.index {
}
</style>
