<script setup lang="ts">
defineOptions({
  name: 'YYButton'
})

interface Props {
  type: string
  title: string
}
// const props = defineProps<Partial<Props>>()
// const { title = '按钮' } = props
const props = withDefaults(defineProps<Partial<Props>>(), {
  type: 'default',
  title: '按钮'
})
</script>
<template>
  <div>
    <button class="yy-button yy-button-primary">
      <slot>{{ title }}</slot>
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
