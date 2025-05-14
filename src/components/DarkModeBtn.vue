<script setup lang="ts">
const curMode = ref('light')
const setHtmlMode = (mode: string) => {
  const rootEl = document.documentElement
  // mode === 'dark' ? rootEl.classList.add('dark') : rootEl.classList.remove('dark')
  rootEl.classList.toggle('dark', mode === 'dark')
}

onMounted(() => {
  curMode.value = getModePerference()
  setHtmlMode(curMode.value)
})

const getModePerference = () => {
  const currentMode = localStorage.getItem('mode')
  if (currentMode) return currentMode
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const toggleMode = () => {
  // 获取当前模式
  // const mode = getModePerference()
  // const newMode = mode === 'dark' ? 'light' : 'dark'
  const newMode = curMode.value === 'dark' ? 'light' : 'dark'
  // 获取html标签，设置class="dark"
  setHtmlMode(newMode)
  localStorage.setItem('mode', newMode)
  curMode.value = newMode
}
</script>

<template>
  <div>
    <button class="mode-toggle-btn" @click="toggleMode">
      {{ curMode === 'dark' ? '🌞' : '🌙' }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.mode-toggle-btn {
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
