import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import 'font-awesome/css/font-awesome.min.css'
import ToggleButton from 'vue-js-toggle-button'

createApp(App).use(ToggleButton).mount('#app')
