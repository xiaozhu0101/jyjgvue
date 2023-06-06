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
        path: '/customer/changeinfo',
        name: 'changeinfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/Customer/ChangeInfoView.vue')
      },
      {
        path: '/customer/registercourseinfo',
        name: 'registercourseinfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/Customer/RegisterCoureInfoView.vue')
      },

  ]
  },
  {
    path: '/eadmain',
    name: 'eadmainView',
    component: () => import(/* webpackChunkName: "about" */ '../views/EAdmainView.vue'),
    children:[

      {
        path: '/eadmain',
        name: 'edmaininfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/EAdmain/EAdmainInfoView.vue')
      },

      {
        path: '/eadmain/courseinfo',
        name: 'courseinfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/EAdmain/CouserInfoView.vue')
      },
      {
        path: '/eadmain/registercourseinfo',
        name: 'registercourseinfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/EAdmain/RegisterCourseInfoView.vue')
      },

    ]
  },
  {
    path: '/administrators',
    name: 'administrators',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdministratorsView.vue'),
    children:[

      {
        path: '/administrators',
        name: 'administrators',
        component: () => import(/* webpackChunkName: "about" */ '../views/administrators/AdministratorsInfoView.vue')
      },


      {
        path: '/administrators/courseinginfo',
        name: 'courseinginfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/administrators/CourseingInfoView.vue')
      },
      {
        path: '/administrators/enrollmentadmin',
        name: 'enrollmentadmin',
        component: () => import(/* webpackChunkName: "about" */ '../views/administrators/EnrollmentAdminView.vue')
      },
      {
        path: '/administrators/enrollmentplaninfo',
        name: 'enrollmentplaninfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/administrators/EnrollmentPlanInfoView.vue')
      },

      {
        path: '/administrators/enrollmenttext',
        name: 'enrollmenttext',
        component: () => import(/* webpackChunkName: "about" */ '../views/administrators/EnrollmentTextView.vue')
      },
      {
        path: '/administrators/messageinfo',
        name: 'messageinfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/administrators/MessageInfoView.vue')
      },
      {
        path: '/administrators/studentrecruitmentbrochure',
        name: 'studentrecruitmentbrochure',
        component: () => import(/* webpackChunkName: "about" */ '../views/administrators/StudentRecruitmentBrochureView.vue')
      },
      {
        path: '/administrators/testcourseinfo',
        name: 'testcourseinfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/administrators/TestCourseInfoView.vue')
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
