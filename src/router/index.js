import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/aboutus',
    name: 'AboutUsView',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUsView.vue')
  },
  {
    path: '/testcourse',
    name: 'TestCourseView',
    component: () => import(/* webpackChunkName: "about" */ '../views/TestCourseView.vue')
  },
  {
    path: '/registercourse',
    name: 'RegisterCourseView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterCourseView.vue')
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/studentrecruitmentbrochure',
    name: 'StudentRecruitmentBrochureView',
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentRecruitmentBrochureView.vue')
  },
  {
    path: '/enrollmentplan',
    name: 'EnrollmentPlanView',
    component: () => import(/* webpackChunkName: "about" */ '../views/EnrollmentPlanView.vue')
  },
  {
    path: '/customer',
    name: 'CustomerView',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomerView.vue'),
    children:[

      {
        path: '/customer',
        name: 'customerinfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/Customer/Customerinfo.vue')
      },
      {
        path: '/customer/testcourseinfo',
        name: 'testcourseinfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/Customer/TestCourseInfoView.vue')
      },
      {
        path: '/customer/registercourseinfo',
        name: 'registercourseinfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/Customer/RegisterCoureInfoView.vue')
      },

  ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
