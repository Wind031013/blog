import { createApp } from 'vue'
import App from './App.vue'
import Elementplus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

const app = createApp(App)
app.use(Elementplus)
app.use(router)
app.mount('#app')