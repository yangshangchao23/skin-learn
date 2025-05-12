<script setup lang="ts">
import { theme } from 'ant-design-vue'
import type { Locale } from 'ant-design-vue/es/locale'
// import zhCN from 'ant-design-vue/es/locale/zh_CN'

const locale = inject('locale') as Locale

// 监听浏览器的外观设置模式变化--切换antdV内置的预设算法实现主题切换
// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches, 'xxxx')
const broswerDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
const dynamicTheme = ref(broswerDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  // console.log(e.matches, 'scheme')
  const isDarkMode = e.matches
  if (isDarkMode) {
    dynamicTheme.value = theme.darkAlgorithm
    return
  }
  dynamicTheme.value = theme.defaultAlgorithm
})
</script>

<template>
  <a-config-provider :locale="locale" :theme="{ algorithm: dynamicTheme }">
    <RouterView />
  </a-config-provider>
</template>
