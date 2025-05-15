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

const setHtmlModeAndTransition = (event) => {
  // 检查浏览器是否支持 View Transition API
  if (!document.startViewTransition) {
    // 不支持则直接切换主题，不添加动画
    document.documentElement.classList.toggle('dark')
    return
  }
  const transition = document.startViewTransition(() => {
    document.documentElement.classList.toggle('dark')
  })
  transition.ready.then(() => {
    const { clientX, clientY } = event
    const endRadius = Math.hypot(
      Math.max(clientX, innerWidth - clientX),
      Math.max(clientY, innerHeight - clientY)
    )
    const clipPath = [
      `circle(0px at ${clientX}px ${clientY}px)`,
      `circle(${endRadius}px at ${clientX}px ${clientY}px)`
    ]
    const isDark = document.documentElement.classList.contains('dark')
    document.documentElement.animate(
      {
        clipPath: isDark ? clipPath.reverse() : clipPath
      },
      {
        duration: 450,
        easing: 'ease-in',
        pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)'
      }
    )
  })
}

const toggleMode = (event) => {
  // 获取当前模式
  // const mode = getModePerference()
  // const newMode = mode === 'dark' ? 'light' : 'dark'
  const newMode = curMode.value === 'dark' ? 'light' : 'dark'
  // 获取html标签，设置class="dark"
  // setHtmlMode(newMode)
  setHtmlModeAndTransition(event)
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
