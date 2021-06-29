import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PortalVue from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueParticles)

library.add(faUserSecret)
Vue.component('f-a-i', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')


