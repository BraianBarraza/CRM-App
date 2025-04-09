import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin } from '@formkit/vue'
import formkitConfig from '../formkit.config.js'

const app = createApp(App)

app.use(router)
app.use(plugin, formkitConfig)

app.mount('#app')
