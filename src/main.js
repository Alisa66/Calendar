/*
 * @Author: your name
 * @Date: 2021-09-01 10:01:04
 * @LastEditTime: 2021-09-01 10:09:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/border.css'
import '@/assets/css/reset.css'
import '@/assets/js/common.js'

createApp(App).use(store).use(router).mount('#app')
