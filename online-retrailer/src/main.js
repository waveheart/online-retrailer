// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import index.scss
import 'common/style/index.css'

// import element
import { Button, Tabs, TabPane, InputNumber, Input, Form, FormItem } from 'element-ui'
import './element-variables.scss'

Vue.component(Button.name, Button)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Input.name, Input)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
