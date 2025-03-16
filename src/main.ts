import { createApp } from 'vue'
import Elementplus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(Elementplus)
app.mount('#app')