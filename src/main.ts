import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

const app = createApp(App)

app.provide('locale', zhCN)
app.use(router)
app.mount('#app')
