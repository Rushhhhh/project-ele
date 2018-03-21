import Vue from 'vue'
import Router from 'vue-router'


import Home from "../components/home"
import List from "../components/list"
import Detail from "../components/detail"
import Login from "../components/login"
import Register from "../components/register"
import Nowplaying from "../components/nowplaying"
import Comingsoon from "../components/comingsoon"



Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:"/home",
    	component:Home
    },
    {
    	path:"/list",
    	component:List,
        children:[
           {
            path:"nowplaying",
            component:Nowplaying
           },
           {
            path:"comingsoon",
            component:Comingsoon
           },
           {
            path:"/",
            redirect:"/list/nowplaying"
           }

       ]
    },
    {
    	path:"/detail/:id",
    	component:Detail
    },
    {
    	path:"/login",
    	component:Login
    },
    {
    	path:"/register",
    	component:Register
    }
  ]
})
