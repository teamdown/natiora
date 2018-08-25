import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Blog from './Blog.vue'
import About from './About.vue'
import Start from './Start.vue'

Vue.use(VueRouter)

const routes = [
  { path: '', component: Start},
  { path: '/about', component: About},
  { path: '/blog', component: Blog }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
