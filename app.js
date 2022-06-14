import Home from './components/Home.js'
import NotFound from './components/NotFound.js'
import Profile from './components/Profile.js'
import Task from './components/Task.js'
import Update from './components/Update.js'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/profile/:name', name: 'profile', component: Profile },
  { path: '/update/:name', name: 'update', component: Update },
  { path: '/task', name: 'task', component: Task },
  { path: '*', name: 'notfound', component: NotFound },
]

const router = new VueRouter({
  routes,
})

const vm = new Vue({
  el: '#app',
  router,
  data: {
    name: 'narendra',
  },
})
