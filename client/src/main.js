import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import vue3GoogleLogin from 'vue3-google-login'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '576078230076-d15lfq52c1pto03nm76uhg7bqdbkir07.apps.googleusercontent.com'
})
app.mount('#app')
