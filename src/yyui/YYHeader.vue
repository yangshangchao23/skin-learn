<script setup lang="ts">
defineOptions({
  name: 'YYHeader'
})

interface Props {
  title: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '网页标题'
})
</script>
<template>
  <div class="yy-header yy-header-primary">{{ title }}</div>
</template>
