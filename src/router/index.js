import Vue from 'vue'
import VueRouter from 'vue-router'

// 前台
import ReceptionHome from '@/views/ReceptionHome/ReceptionHome.vue'
// 前台首页
import ReceptionHomeView from '@/components/Reception/ReceptionHomeView/ReceptionHomeView.vue'
// 关于我们
import AboutView from '@/components/Reception/AboutView/AboutView.vue'
// 工程展示
import EngineeringExhibitionView from '@/components/Reception/EngineeringExhibitionView/EngineeringExhibitionView.vue'
// 行业动态
import IndustryTrendsView from '@/components/Reception/IndustryTrendsView/IndustryTrendsView.vue'
import IndustryTrend from '@/components/Reception/ReceptionComponent/IndustryTrend/IndustryTrend.vue'
import IndustryDetail from '@/components/Reception/ReceptionComponent/IndustryDetail/IndustryDetail.vue'
// 人力资源
import HumanResourcesView from '@/components/Reception/HumanResourcesView/HumanResourcesView.vue'
// 联系我们
import ContactUsView from '@/components/Reception/ContactUsView/ContactUsView.vue'

// 后台
import BackstageHome from '@/views/BackstageHome/BackstageHome.vue'
// 登录页
import BackstageLogin from '@/views/BackstageLogin/BackstageLogin.vue'
// 后台首页
import BackstageHomeView from '@/components/Backstage/BackstageHomeView/BackstageHomeView.vue'
// 模板管理
import TemplateView from '@/components/Backstage/TemplateView/TemplateView.vue'
// 公司管理
import CompanyView from '@/components/Backstage/CompanyView/CompanyView.vue'
// 后台管理 -- > 码表管理
import DictionariesView from '@/components/Backstage/BackstageAdministration/DictionariesView/DictionariesView.vue'

// 404
import NotFound from '@/views/NotFound/NotFound.vue'

// 500
import ServeError from '@/views/ServeError/ServeError.vue'

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

// 解决 element-ui 3.0 以上版本重复点击导航栏报错问题
// --> 感觉式Vue自己得原因
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ReceptionHome',
    component: ReceptionHome,
    redirect: '/reception/home',
    children: [
      { path: '/reception/home', name: 'ReceptionHomeView', component: ReceptionHomeView },
      { path: '/reception/about', name: 'AboutView', component: AboutView },
      { path: '/reception/engineering', name: 'EngineeringExhibitionView', component: EngineeringExhibitionView },
      {
        path: '/reception/industry',
        name: 'IndustryTrendsView',
        component: IndustryTrendsView,
        redirect: '/reception/industry/trend',
        children: [
          { path: '/reception/industry/trend', name: 'IndustryTrend', component: IndustryTrend },
          { path: '/reception/industry/detail', name: 'IndustryDetail', component: IndustryDetail }
        ]
      },
      { path: '/reception/human', name: 'HumanResourcesView', component: HumanResourcesView },
      { path: '/reception/contact', name: 'ContactUsView', component: ContactUsView }
    ]
  },
  { path: '/backstage/login', name: 'BackstageLogin', component: BackstageLogin },
  {
    path: '/backstage',
    name: 'BackstageHome',
    component: BackstageHome,
    redirect: '/backstage/login',
    children: [
      { path: '/backstage/home', name: 'BackstageHomeView', component: BackstageHomeView },
      { path: '/backstage/template', name: 'TemplateView', component: TemplateView },
      { path: '/backstage/company', name: 'CompanyView', component: CompanyView },
      { path: '/backstage/backstageAdministration/Dictionaries', name: 'DictionariesView', component: DictionariesView }
    ]
  },
  {
    path: '/serve/error',
    name: 'ServeError',
    component: ServeError
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
