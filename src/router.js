import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Intro from '@/views/Intro.vue';
import Terms from '@/views/terms/Terms.vue';
import AccountSelection from '@/views/terms/AccountSelection.vue';
import ServiceTerms from '@/views/terms/ServiceTerms.vue';
import CddEdd from '@/views/terms/CddEdd.vue';
import Research from '@/views/terms/Research.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro,
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms,
      children: [
        {
          path: 'account-selection',
          name: 'account-selection',
          component: AccountSelection,
        },
        {
          path: 'service-terms',
          name: 'service-terms',
          component: ServiceTerms,
        },
        {
          path: 'cdd-edd',
          name: 'cdd-edd',
          component: CddEdd,
        },
        {
          path: 'research',
          name: 'research',
          component: Research,
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
