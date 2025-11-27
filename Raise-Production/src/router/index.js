import { createWebHistory, createRouter } from 'vue-router';
const routes = [
 { 
  path: '/', 
  name: 'HomePage',
  component: () => import('../views/HomePage.vue'),
 },
 {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
 },
 {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/Pricing.vue'),
 },
 {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import('../views/Testimonials.vue'),
 },
 {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
 }
]

const router = createRouter({
 history: createWebHistory(),
 routes,
})

export default router