<script setup lang="ts">
interface Props {
  theme: {
    'theme-color': string
  }
}

const props = defineProps<Props>()

onMounted(() => {
  setTheme()
})
const setTheme = () => {
  for (const key in props.theme) {
    // window.document.documentElement.style.setProperty(`--data-${key}`, props.theme[key])
    const popertyName = `--data-${key}`
    const root = document.querySelector(':root') as HTMLElement
    root.style.setProperty(popertyName, props.theme[key])
  }
}
</script>
<template>
  <slot></slot>
</template>

<style scoped lang="scss"></style>
