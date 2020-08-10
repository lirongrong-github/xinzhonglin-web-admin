import Vue from 'vue'
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  TabPane,
  Pagination,
  Collapse,
  CollapseItem,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Checkbox,
  Backtop,
  Icon,
  Container,
  Aside,
  Header,
  Main,
  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Menu,
  Submenu,
  MenuItem,
  Loading,
  Card,
  Notification
} from 'element-ui'

import '@/base/css/element-variables.scss'

// 设置 element 整体得size
Vue.prototype.$ELEMENT = { size: 'small' }
Vue.prototype.$notify = Notification

Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Pagination)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Backtop)
Vue.use(Icon)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Avatar)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Loading.directive)
Vue.use(Card)
