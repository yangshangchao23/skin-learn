<script setup lang="ts">
onMounted(() => {
  window.document.documentElement.setAttribute('data-theme', 'default')
})
</script>

<template>
  <RouterView />
</template>
