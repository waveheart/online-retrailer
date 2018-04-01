import Vue from 'vue'
import Router from 'vue-router'
import PlaceOrder from '@/components/place_order/place_order'
import Pay from '@/components/pay/pay'
import PersonalCenter from '@/components/personal_center/personal_center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlaceOrder',
      component: PlaceOrder
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/personal_center',
      name: 'PersonalCenter',
      component: PersonalCenter
    }
  ]
})
