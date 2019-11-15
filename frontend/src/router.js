import Vue from 'vue';
import Router from 'vue-router';
import Map from './components/map'
import HotSpot from './components/HotSpot'
Vue.use(Router);

export default new Router({
    
    routes:[
        {
            path:'/',
            name: 'LiveMap',
            component: Map
        },
        {
            path:'/hotspots',
            name: 'HotSpot',
            component: HotSpot
        }
    ]
})