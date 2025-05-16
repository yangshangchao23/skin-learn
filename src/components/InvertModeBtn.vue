<script setup lang="ts">
const checked = ref(false)
watch(checked, (newValue) => {
  // console.log(newValue)
  if (newValue) {
    document.querySelector(':root')?.classList.add('invert-mode')
  } else {
    document.querySelector(':root')?.classList.remove('invert-mode')
  }
})
</script>

<template>
  <div class="my-4 flex items-center">
    <div class="mr-4">色弱模式</div>
    <a-switch v-model:checked="checked"></a-switch>
  </div>
</template>
