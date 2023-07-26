import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import useComponents from './plugins/useComponents'

useComponents(App)
createApp(App).mount('#app')
