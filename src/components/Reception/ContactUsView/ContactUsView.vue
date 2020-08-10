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
              <li @click=" defaultActive( 'industrySelect' ) ">行业动态</li>
              <li @click=" defaultActive( 'humanSelect' ) ">人力资源</li>
              <li class="active" @click=" defaultActive( 'contactSelect' ) ">联系我们</li>
              <li @click=" defaultActive( 'backstageSelect' ) ">进入后台</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <!-- bannerView -->
    <div class="img_style">
      <img src="../../../assets/img/banner_lianxiwomen.png" alt="ContactUsView">
    </div>

    <!-- contactUs -->
    <div class="heartContent engineering_style">
      <div class="us_style">四川兴中林建设有限公司</div>
      <div class="company_style">Sichuan xingzhong Lin construction co. LTD</div>
    </div>

    <!-- content -->
    <div class="heartContent content_style">
      <ul>
        <li>
          电话：028-85858358
        </li>
        <li>
          邮编：610000
        </li>
        <li>
          邮箱：+xingzhongli_99@qq.com
        </li>
        <li>
          地址：成都市武侯区天府新区5号楼1307
        </li>
      </ul>
    </div>

  </div>
</template>

<script src="./ContactUsView.js"></script>

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

  .engineering_style {

    margin: 50px auto;
    height: 90px;
    text-align: center;
    border-bottom: 2px solid #ccc;

    .us_style {

      font-size: 33px;
      font-weight: bold;
      color: #53AEF4;

    }

    .company_style {

      margin-top: 5px;
      font-size: 16px;
      color: #ccc;

    }

  }

  .content_style {

    margin-bottom: 80px;

    li {

      font-size: 18px;
      margin-bottom: 30px;

    }

  }

</style>
