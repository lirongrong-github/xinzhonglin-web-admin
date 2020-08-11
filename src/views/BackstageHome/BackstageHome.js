import NavMenu from '@/components/Backstage/BackstageComponent/NavMenu/NavMenu.vue'

export default {

  name: 'BackstageHome',

  components: {

    NavMenu

  },

  data () {
    return {

      menuList: [{
        icon: 'el-icon-ship',
        id: '12332323232',
        name: '首页',
        url: '/backstage/home'
      }, {
        icon: 'el-icon-basketball',
        id: '123323232311ss2',
        name: '模板管理',
        url: '/backstage/template'
      }, {
        icon: 'el-icon-football',
        id: '123323232311ssqasqq',
        name: '公司管理',
        url: '/backstage/company'
      }, {
        icon: 'el-icon-soccer',
        id: '12332399232311ssqa11sqq',
        name: '人员管理',
        url: '/backstage/person'
      }, {
        icon: 'el-icon-baseball',
        id: '1233239923112311ssqa11sqq',
        name: '备案资料管理',
        url: '/backstage/data'
      }, {
        icon: 'el-icon-wind-power',
        id: '1233239923112311ssq22a11sqq',
        name: '项目管理',
        url: '/backstage/project'
      }, {
        icon: 'el-icon-light-rain',
        id: '12332399231221212390',
        name: '流程中心',
        url: '/backstage/process'
      }, {
        icon: 'el-icon-lightning',
        id: '134234234kljlkasssda566',
        name: '会计资料',
        url: '/backstage/accounting'
      }, {
        icon: 'el-icon-heavy-rain',
        id: '134234234kljlkasda566',
        name: '网站管理',
        url: '/backstage/website'
      }, {
        icon: 'el-icon-sunrise-1',
        id: '98446e2e48fd4c9db0bf0490d013255dsasas',
        name: '备案资料管理',
        url: '',
        subs: [
          { id: '212154512', icon: 'el-icon-help', name: 'template', url: '/template' },
          { id: 'qwewddf13', icon: 'el-icon-help', name: 'templates', url: '/templates' }
        ]
      }, {
        icon: 'el-icon-sunrise',
        id: '98446e2e48fd4c9db0bf0490d013255dsas1212as',
        name: '岗位管理S',
        url: '',
        subs: [
          {
            id: '2121wwwq54512',
            icon: 'el-icon-sunset',
            name: 'template',
            url: '/template',
            subs: [{ id: '2121545wewe12', icon: 'el-icon-sunny', name: 'template', url: '/template' }]
          },
          { id: 'qwewdgfgdf13', icon: 'el-icon-moon-night', name: 'templates', url: '/templates' }
        ]
      }, {
        icon: 'el-icon-dish',
        id: '98446e2gfge48fd4c9db0bf0490d013255dsasas',
        name: '岗位管理',
        url: '',
        subs: [
          { id: '2121dsd54512', icon: 'el-icon-sugar', name: 'template', url: '/template' },
          { id: 'qwewddgfgf13', icon: 'el-icon-dessert', name: 'templates', url: '/templates' }
        ]
      }, {
        icon: 'el-icon-cpu',
        id: '98446e2gfge48fd4cgfsgdf9db0bf0490d013255dsasas',
        name: '后台管理',
        url: '',
        subs: [
          { id: '2121dsd545weqqczx12', icon: 'el-icon-ice-cream', name: '字典管理', url: '/backstage/backstageAdministration/Dictionaries' },
          { id: 'qwewddgfsdfasdfgf13', icon: 'el-icon-coffee-cup', name: 'templates', url: '/templates' }
        ]
      }],
      defaultActive: '/backstage/home',
      loading: false,
      isCollapse: false

    }
  },

  methods: {

    loginOut () {
      this.$router.push('/backstage/login')
    },
    navMenvuToggle () {
      this.isCollapse = !this.isCollapse
    }

  }

}
