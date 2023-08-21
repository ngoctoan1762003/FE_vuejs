import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/FormLogin.vue';
import Signup from '@/components/FormSignup.vue';
import Home from '@/components/Home.vue';
import UserDetail from '@/components/UserDetail.vue';

const routes = [
    {
        path: "/login",
        name: 'Login',
        component: Login
    },
    {
        path: "/signup",
        name: 'Signup',
        component: Signup
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user-detail/:id',
        name: 'UserDetail',
        component: UserDetail
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    console.log(to);
    if(to.name !== 'Login' && !localStorage.getItem('accessToken')) return '/login'
    if(to.name === 'Login' && localStorage.getItem('accessToken')) return '/'
})

export default router