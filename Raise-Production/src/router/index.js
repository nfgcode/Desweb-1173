import { createWebHistory, createRouter } from 'vue-router';
const routes = [
 { 
  path: '/', 
  name: 'HomePage',
  component: () => import('../views/HomePage.vue'),
 },
 {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
 },
 {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/Pricing.vue'),
 }
]

const router = createRouter({
 history: createWebHistory(),
 routes,
})

export default router