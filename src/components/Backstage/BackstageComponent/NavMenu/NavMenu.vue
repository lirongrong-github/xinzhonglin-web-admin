<template>

  <div class="container">

    <div v-if=" menuList ">

      <div
        v-for=" item in menuList "
        :key=" item.id ">

        <!-- 判断是否有子路由
          -- 没有 -->
        <el-menu-item
          :index=" item.url "
          v-if=" item.subs === undefined "
          @click=" menuClick( item ) ">
          <i :class=" item.icon "></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>

        <!-- 判断是否有子路由
          -- 有 -->
        <el-submenu
          :index=" item.id "
          v-else>
          <template slot="title">
            <i :class=" item.icon "></i>
            <span>{{ item.name }}</span>
          </template>

          <!-- 判断子路由下是否还存在下一级的子导航
            -- 如果没有则渲染自己
            -- 如果有则递归组件 -->
          <div
            v-for=" subItem in item.subs"
            :key=" subItem.id ">

            <!-- 渲染自己 -->
            <el-menu-item
              v-if=" subItem.subs === undefined "
              :index=" subItem.url  "
              @click=" menuClick( subItem ) ">

              <template slot="title">
                <i :class=" subItem.icon "></i>
                <span>{{ subItem.name }}</span>

              </template>

            </el-menu-item>

            <!-- 递归自己 遍历子导航 -->
            <el-submenu
              v-else
              :index=" subItem.id ">

              <template slot="title">
                <i :class=" subItem.icon "></i>
                <span>{{ subItem.name }}</span>
              </template>

              <!-- 递归组件 -->
              <nav-menu :menuList="subItem.subs"></nav-menu>

            </el-submenu>

          </div>

        </el-submenu>

      </div>

    </div>

    <div
      v-else
      class="haveNot">

      请联系管理人员进行授权

    </div>

  </div>

</template>

<script src="./NavMenu.js"></script>

<style scoped>

  /* .container {

    width: 100px;
    height: 100px;
    background-color: #000;

  } */

  /* 定义导航栏 :hover 自定义颜色 */
  .el-submenu__title:hover{

    background-color: rgba(67,167,243)!important;
    color: #fff!important;

  }

  .el-menu-item:hover{

    background-color: rgba(67,167,243)!important;
    color: #fff!important;

  }

  /* 定义导航栏 选中项 自定义颜色 */
  .el-menu-item.is-active {

    background-color: rgb(67,167,243)!important;
    color: #fff!important;

  }

  .container >>> .el-submenu__title span {

    margin-left: 10px

  }

  .container >>> .el-menu-item span {

    margin-left: 10px

  }

  .haveNot {

    font-weight: bold;
    margin-left: 10px;
    margin-top: 20px;

  }

</style>
