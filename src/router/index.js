import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/auth/FormLogin.vue';
import Signup from '@/components/auth/FormSignup.vue';
import Home from '@/components/Home.vue';
import UserDetail from '@/components/user/UserDetail.vue';
import Counter from '@/components/Counter.vue';

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
    {
        path: '/counter',
        name: 'Counter',
        component: Counter
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    console.log(to);
    if(to.name !== 'Login' && !localStorage.getItem('accessToken') && to.name !== 'Signup') return '/login'
    if(to.name === 'Login' && localStorage.getItem('accessToken')) return '/'
})

export default router