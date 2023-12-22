import PageHome from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'
import PageNotFound from '@/pages/PageNotFound'
import PageSinglePost from '@/pages/PageSinglePost'
import {createRouter, createWebHistory} from 'vue-router'
import sourceData from '@/data.json'



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
        props: true,
        beforeEnter(to,from,next){
            //Check if thread exists
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            //if exists continue
            if (threadExists){
                return next()
            } else{
                next({
                    name: 'NotFound',
                    params : { pathMatch: to.path.substring(1).split('/') },
                    query: to.query,
                    hash: to.hash
                })
            }
            //if not redirect to not found
        }
    },
    {
        //Path sobre páginas que não existem.
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: PageNotFound
    },
    {
        path: '/post/:id_post',
        name: 'PageSinglePost',
        component: PageSinglePost,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})