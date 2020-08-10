<template>
  <div class="reception_home">

    <!-- 页面头部组件 -->
    <!-- <ReceptionHeader class="heartContent" /> -->
    <div class="reception_header clearfix heartContent">
      <div class="header_main clearfix">
        <div class="header_main_left">
          <img src="../../assets/img/home_icon.png" alt="log">
        </div>
        <div class="header_main_right">
          <div class="right_top"> 四川兴中林建设有限公司 </div>
          <div class="right_bottom">Sichuan xingzhong Lin construction co, LTD</div>
        </div>
      </div>
    </div>

    <!-- 路由占位符 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <!-- footerComponent -->
    <ReceptionFooter />

    <el-backtop target=".reception_home">
      <div>
        <i class="el-icon-thumb"></i>
      </div>
    </el-backtop>

  </div>
</template>

<script src="./ReceptionHome.js"></script>

<style lang="scss" scoped>

  // 设置版心
  .heartContent {

    width: 1200px!important;
    margin: 0 auto;
    // background-color: #000;

  }

  .reception_home {

    width: 100vw;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;

  }

  .reception_header {

    width: 100%;
    height: 100px;
    background-color: #fff;

    .header_main {

      width: 500px;
      height: 60px;
      transform: translateY(28%);

      .header_main_left {

        float: left;
        width: 12%;
        height: 100%;

        img {

          width: 100%;
          height: 100%;

        }

      }

      .header_main_right {

        float: left;
        width: 88%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 20px;

        .right_top {

          width: 100%;
          height: 70%;
          font-size: 30px;

        }

        .right_bottom {

          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;

        }

      }

    }

  }

</style>
