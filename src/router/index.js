import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* eslint-disable no-unused-vars */

/* remove eslint-disable after login/logout/isnotfree are implemented */



export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('../components/Home/Home'),
        },
        {
            path: '*',
            redirect: '/home',
            component: () => import('../components/Home/Home'),
        }
    ]
})