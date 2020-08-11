<template>

  <div class="backstage_home">

    <!-- mainContent -->
    <el-container class="main">

      <!-- leftContainer -->
      <el-aside :class="{ collpase: !isCollapse, closed: isCollapse }">

        <!-- topLogo -->
        <div class="aside_header clearfix">
          <div class="img_style">
            <img src="../../assets/img/home_icon.png" alt="logo">
            <div class="aside_text" v-show=" !isCollapse ">兴中林</div>
          </div>
        </div>

        <!-- navMenuRouter -->
        <div class="aside_buttom">
          <el-menu
            :default-active=" defaultActive "
            unique-opened
            background-color="#435062"
            text-color="#fff"
            active-text-color="#FFF"
            class="menu_style"
            router
            :collapse-transition="false"
            :collapse="isCollapse"
            v-loading=" loading "
            element-loading-text="正在加载菜单项, 请稍候"
            element-loading-spinner="el-icon-loading">

            <nav-menu :menuList=" menuList "></nav-menu>

          </el-menu>
        </div>

      </el-aside>

      <!-- rightContainer -->
      <el-container class="right_main">

        <!-- viewHeader -->
        <el-header class="clearfix">

          <div class="collapse_style left" @click=" navMenvuToggle ">
            <i class="el-icon-s-fold"></i>
          </div>

          <div class="user_style right">
            <el-tooltip class="item" effect="dark" content="使用手册" placement="bottom">
              <i class="iconfont icon-bangzhu-copy"></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="版本" placement="bottom">
              <i class="iconfont icon-gantanhao-copy"></i>
            </el-tooltip>
            <el-dropdown trigger="click">
              <div class="el-dropdown-link">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <i class="el-icon-caret-bottom el-icon--right i_style"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>修改个人信息</el-dropdown-item>
                <el-dropdown-item @click.native=" loginOut ">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

        </el-header>

        <!-- viewMain -->
        <el-main>

          <transition name="fade-own">
            <router-view></router-view>
          </transition>

        </el-main>

      </el-container>

    </el-container>

  </div>

</template>

<script src="./BackstageHome.js"></script>

<style lang="scss" scoped>

  .collpase {

    width: 250px!important;

  }

  .closed {

    width: 80px!important;

  }

  .fade-own-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-own-enter, .fade-own-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .el-header,
  .el-main {

    padding: 0;

  }

  .backstage_home {

    width: 100vw;
    height: 100vh;

    .main {

      height: 100%;

      .el-aside {

        height: 100%;
        // background-color: rgb(134, 120, 120);
        overflow: hidden;
        transition: all .5s;

        .aside_header {

          width: 100%;
          height: 10vh;
          background-color: #252d3b;
          // background-color: #222C3C;
          overflow: hidden;

          .img_style {

            width: 100%;
            height: 10vh;
            line-height: 10vh;
            text-align: center;

            img {

              width: 50px;
              height: 50px;
              vertical-align: middle;

            }

          }

          .aside_text {

            display: inline-block;
            /* height: 10vh; */
            /* line-height: 0.4375rem; */
            font-size: 36px;
            color: #fff;
            vertical-align: middle;
            margin-left: 20px;

          }

        }

        .aside_buttom {

          height: 90vh;
          overflow: hidden;

          &:hover {

            overflow-y: auto;

          }

          li {

            user-select: none;

          }

        }

      }

      .right_main {

        .el-header {

          height: 10vh!important;
          background-color: #2991E6;
          overflow: hidden;

        }

      }

    }

  }

  .el-menu {

    transition: all .5s!important;

  }

  .el-main {

    box-sizing: border-box;
    // padding-top: 50px;
    // text-align: center;
    background-color: #E9F4FD;
    height: 90vh;

  }

  .collapse_style {

    width: 90px;
    height: 90px;
    text-align: center;
    line-height: 90px;
    font-size: 30px;
    color: #F3F9FD;
    cursor: pointer;

  }

  .user_style {

    height: 10vh;
    line-height: 13vh;
    margin-right: 30px;
    color: #fff;

    i {

      font-size: 30px;
      margin-right: 20px;
      cursor: pointer;

    }

  }

  .el-avatar {

    width: 40px;
    height: 40px;

  }

  .el-dropdown {

    height: 72px;
    cursor: pointer;

  }

  .i_style {

    font-size: 18px!important;

  }

  .el-dropdown-link {

    color: #fff;

  }

  .menu_style /deep/ i {

    margin-right: 20px;
    font-size: 23px;
    color: #fff!important;

  }

  .menu_style /deep/ span {

    margin-left: 10px!important;
    font-size: 18px;
    color: #fff!important;

  }
  .aside_buttom /deep/ .el-menu--collapse {

    width: 80px!important;

  }

  .menu_style /deep/ .el-submenu__icon-arrow {

    position: relative;
    top: 0;
    right: 0;
    margin-top: 0;
    transition: transform .3s;
    font-size: 12px;
    position: none;
    margin-left: 15px;

  }

  .menu_style /deep/ .el-menu-item {

    padding: 0 20px!important;

  } 
  .menu_style /deep/ .el-tooltip {

    padding: 0 20px!important;

  } 
  .menu_style /deep/ .el-submenu__title {

    padding: 0 20px!important;

  }

</style>
