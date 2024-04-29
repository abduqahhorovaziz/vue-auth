import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('@/pages/Index.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/pages/Profile.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: 'register',
        name: 'AuthRegister',
        component: () => import('@/pages/Auth/Register.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
