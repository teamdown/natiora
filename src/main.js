import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Blog from './Blog.vue'
import About from './About.vue'
import Start from './Start.vue'
import Single from './Single.vue'

import Header from './Header.vue'

Vue.use(VueRouter)

Vue.component('app-header', Header);

const routes = [
  { path: '', component: Start},
  { path: '/about', component: About},
  { path: '/blog', component: Blog },
  { path: '/single', component: Single }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
