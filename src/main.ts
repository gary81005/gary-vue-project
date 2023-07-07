import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

const app = createApp(App).use(ElementPlus)
app.provide(/* key */ 'message', /* value */ 'hello!')
app.use(router)

app.mount('#app')
