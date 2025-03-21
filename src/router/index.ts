import { createRouter, createWebHashHistory} from 'vue-router'

import HomeView from '@/components/views/HomeView.vue'
import ResourcesView from '@/components/views/ResourcesView.vue'
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:HomeView
        },
        {
            path:'/resources',
            component:ResourcesView
        },
    ]
})

export default router