import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import {createRouter, createWebHistory} from 'vue-router'
import PageNotFound from '@/components/PageNotFound'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name:  'ThreadShow',
        component: PageThreadShow,
        props: true
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: PageNotFound
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})