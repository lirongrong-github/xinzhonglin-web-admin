<template>

  <div class="about_view">

    <!-- main -- navMenu -->
    <div class="main">
      <ul class="main_ul">
        <li class="main_top">
          <div class="heartContent clickStyle">
            <ul class="clickStyle_ul">
              <li @click=" defaultActive( 'homeSelect' ) ">首页</li>
              <li @click=" defaultActive( 'aboutSelect' ) ">关于我们</li>
              <li @click=" defaultActive( 'engineeringSelect' ) ">工程展示</li>
              <li class="active" @click=" defaultActive( 'industrySelect' ) ">行业动态</li>
              <li @click=" defaultActive( 'humanSelect' ) ">人力资源</li>
              <li @click=" defaultActive( 'contactSelect' ) ">联系我们</li>
              <li @click=" defaultActive( 'backstageSelect' ) ">进入后台</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <!-- bannerView -->
    <div class="img_style">
      <img src="../../../assets/img/banner_hangyedongtai.png" alt="IndustryTrendsView">
    </div>

    <!-- <IndustryTrend v-show="dynamicSelect" />
    <IndustryDetail v-show="!dynamicSelect" /> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script src="./IndustryTrendsView.js"></script>

<style lang="scss" scoped>

  // 设置版心
  .heartContent {

    width: 1200px;
    margin: 0 auto;

  }

  .about_view {

    width: 100vw;

    .img_style {

      width: 100%;
      height: 400px;

      img {

        width: 100%;
        height: 100%;

      }

    }

  }

  .main {

    height: 70px;

    .main_ul {

      width: 100%;
      height: 100%;

    }

    .main_top {

      width: 100%;
      height: 100%;
      background-color:#2A92E7;

      .clickStyle {

        height: 100%;
        // background-color: #000;

      }

    }

  }

  .clickStyle_ul {

    display: flex;
    height: 100%;

    li {

      flex: 1;
      height: 100%;
      text-align: center;
      line-height: 70px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      user-select: none;
      // background-color: #000;

      //  &:hover {

      //   background-color: #BF0413;

      // }

    }

  }

  .active {

    background-color: #BF0413;

  }

  .current_position {

    display: inline-block;
    width: 118px;
    height: 20px;
    overflow: hidden;

  }

</style>
