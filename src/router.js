import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Intro from '@/views/Intro.vue';
import Terms from '@/views/terms/Terms.vue';
import StockTerms from '@/views/terms/StockTerms.vue';
import Discription from '@/views/terms/Discription.vue';
import AccountSelection from '@/views/terms/AccountSelection.vue';
import ServiceTerms from '@/views/terms/ServiceTerms.vue';
import CddEdd from '@/views/terms/CddEdd.vue';
import Research from '@/views/terms/Research.vue';
import StockDetail from '@/views/StockDetail.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/terms',
      name: 'terms',
      redirect: '/terms/stock-terms',
      component: Terms,
      props: true,
      children: [
        {
          path: 'stock-terms',
          name: 'stock-terms',
          component: StockTerms
        },
        {
          path: 'discription',
          name: 'discription',
          component: Discription
        },
        {
          path: 'account-selection',
          name: 'account-selection',
          component: AccountSelection
        },
        {
          path: 'service-terms',
          name: 'service-terms',
          component: ServiceTerms
        },
        {
          path: 'cdd-edd',
          name: 'cdd-edd',
          component: CddEdd
        },
        {
          path: 'research',
          name: 'research',
          component: Research
        }
      ]
    },
    {
      path: '/stock/:id',
      name: 'stockDetail',
      component: StockDetail,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
