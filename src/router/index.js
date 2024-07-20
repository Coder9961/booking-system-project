import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Rooms from '../views/RoomPage.vue'
import About from '../views/AboutView.vue'
import Contact from '../views/ContactPage.vue'
import Booking from '../views/BookingPage.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import Dashboard from '../views/BackendPages/DashboardPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
  ]
})

export default router
