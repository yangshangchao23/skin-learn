<script setup lang="ts">
const checked = ref(false)
watch(checked, (newValue) => {
  // console.log(newValue)
  if (newValue) {
    document.documentElement.classList.add('grayscale-mode')
  } else {
    document.documentElement.classList.remove('grayscale-mode')
  }
})
</script>

<template>
  <div class="my-4 flex items-center">
    <div class="mr-4">灰色模式</div>
    <a-switch v-model:checked="checked"></a-switch>
  </div>
</template>
