import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import yyui from './yyui'
import '@/style/style.css'
// 引入组件库css
// import '@/yyui/css/index.scss'
// 改为引入覆盖组件库默认主题的自定义主题css
import '@/style/custom.scss'

const app = createApp(App)

app.use(router).use(yyui)
app.mount('#app')
