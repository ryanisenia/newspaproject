import { authGuard, guestGuard } from './util/router'

export default [
  { path: '/', name: 'welcome', component: require('./pages/welcome.vue') },
  { path: '/coursedetails', name: 'CourseDetails', component: require('./pages/CourseDetailsPage.vue') },

  ...authGuard([
    { path: '/home', name: 'home', component: require('./pages/home.vue') },
    { path: '/settings', component: require('./pages/settings/account.vue'), children: [
      { path: '', redirect: { name: 'settings.profile' }},
      { path: 'profile', name: 'settings.profile', component: require('./pages/settings/_profile.vue') },
      { path: 'security', name: 'settings.security', component: require('./pages/settings/_security.vue') },
      { path: 'dangerzone', name: 'settings.dangerzone', component: require('./pages/settings/_deleteaccount.vue') }
    ] }
  ]),

  ...guestGuard([
    { path: '/auth/login', name: 'auth.login', component: require('./pages/auth/login.vue') },
    { path: '/auth/register', name: 'auth.register', component: require('./pages/auth/register.vue') },
    { path: '/password/reset', name: 'password.request', component: require('./pages/auth/password/email.vue') },
    { path: '/password/reset/:token', name: 'password.reset', component: require('./pages/auth/password/reset.vue') }
  ]),

  { path: '*', component: require('./pages/errors/404.vue') }
]
