import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Itme from '@/pages/item'
import Score from '@/pages/score'

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home
		},
		{
			path: "/item",
			name: "item",
			component: Itme
		},
		{
			path: "/score",
			name:"score",
			component: Score
		}
	]
})
