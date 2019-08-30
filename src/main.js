import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

import ECharts from 'vue-echarts/components/ECharts.vue'
import ElementUI from 'element-ui'	// 引入组件库
import 'element-ui/lib/theme-chalk/index.css'	// 引入样式

Vue.component('v-chart', ECharts)

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
