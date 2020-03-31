import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Me = () => import('../views/me/Me.vue')

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象 
const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/me',
		component:Me
	},
	{
		path:'/category',
		component:Category
	}
	
]
const router = new VueRouter({
	routes : routes,
	mode : 'history'
})

//导出路由
export default router