import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SignUpView from '../views/SignUpView.vue'
import LogInView from '../views/LogInView.vue'

import CoursesView from '../views/CoursesView.vue'
import CourseView from '../views/CourseView.vue'
import Author from '../views/Author.vue'

import MyAccountView from '../views/dashboard/MyAccountView.vue'
import CreateCourse from '../views/dashboard/CreateCourse.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/log-in',
    name: 'login',
    component: LogInView
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesView
  },
  {
    path: '/courses/:slug',
    name: 'course',
    component: CourseView
  },
  {
    path: '/authors/:id',
    name: 'author',
    component: Author
  },

  {
    path: '/dashboard/my-account',
    name: 'myaccount',
    component: MyAccountView
  },
  {
    path: '/dashboard/create-course',
    name: 'createcourse',
    component: CreateCourse
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
