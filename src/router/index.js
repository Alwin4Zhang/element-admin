import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateArticle from '../views/CreateArticle.vue'
import ListArticle from '../views/ListArticle.vue'
import EditArticle from "../views/EditArticle.vue"
import ShowArticle from "../views/ShowArticle.vue"
import ListPerson from "../views/ListPerson.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component: CreateArticle
  },
  {
    path: '/articles/list',
    name: 'list',
    component: ListArticle
  },
  {
    path: '/article/:id/edit',
    name: 'edit',
    component: EditArticle
  },
  {
    path: '/article/:id/show',
    name: 'show',
    component: ShowArticle
  },
  {
    path: "/test",
    name: "test",
    component: ListPerson
  }
]

const router = new VueRouter({
  routes
})

export default router
