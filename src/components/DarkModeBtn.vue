<script setup lang="ts">
// const Mode = computed(() => {
//   const currentMode = localStorage.getItem('Mode')
//   console.log(currentMode, 'currentMode')

//   if (currentMode) return currentMode
//   return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
// })
const curMode = ref('light')
const setMode = (mode: string) => {
  const htmlEl = document.documentElement
  mode === 'dark' ? htmlEl.classList.add('dark') : htmlEl.classList.remove('dark')
}

// 监听系统主题的变化 -- 首次加载，没经过手动切换需要进行监听
onMounted(() => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    setMode(e.matches ? 'dark' : 'light')
  })
})

const toggleMode = () => {}
</script>

<template>
  <div>
    <button class="Mode-toggle-btn" @click="toggleMode">
      {{ curMode === 'dark' ? '🌞' : '🌙' }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.Mode-toggle-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: var(--ant-primary-color);
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
