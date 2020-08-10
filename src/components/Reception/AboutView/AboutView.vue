<template>

  <div class="about_view">

    <!-- main -- navMenu -->
    <div class="main">
      <ul class="main_ul">
        <li class="main_top">
          <div class="heartContent clickStyle">
            <ul class="clickStyle_ul">
              <li @click=" defaultActive( 'homeSelect' ) ">首页</li>
              <li class="active" @click=" defaultActive( 'aboutSelect' ) ">关于我们</li>
              <li @click=" defaultActive( 'engineeringSelect' ) ">工程展示</li>
              <li @click=" defaultActive( 'industrySelect' ) ">行业动态</li>
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
      <img src="../../../assets/img/banner_guanyuwomen.png" alt="AboutView">
    </div>

    <!-- breadcrumbView -->
    <div class="heartContent breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <el-breadcrumb-item class="current_position">当前位置：</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- aboutUs -->
    <div class="heartContent about_style">
      <p>
        关于我们
      </p>
      <div class="about_content">
        about us
      </div>
    </div>

    <!-- tabs -->
    <div class="heartContent tabs_style">

      <el-tabs tab-position="left">

        <el-tab-pane label="公司简介">
          <div class="title_style">公司简介</div>
          <p class="line_style">
            四川兴中林建设有限公司成立于2013年1月22日，公司注册地址在成都市双流区东升街道花月东街122号百盛苑，公司法定代表人李锦亮。
          </p>
          <p class="line_style">
            我公司主要从事：市政公用工程；房屋建筑工程；水利水电工程；公路、桥梁、隧道工程；河湖整治工程；水利水电机电设备安装工程；地基与基础工程；建筑装修装饰工程；钢结构工程；模板脚手架安装工程；城市及道路照明工程；建筑幕墙工程；环保工程；建筑机电安装工程；公路交通工程；城市园林绿化；消防设施工程等业务。
          </p>
          <p class="line_style">
            我公司现代化办公设备齐全，办公条件优越，技术人才优秀，管理团队卓越。在企业运作上全面执行“严格组织，严格管理，严格要求；严讲质量，严把安全；吃苦耐劳，求真务实”的管理制度，力争社会各界大力支持，使企业向着良性、快速、健康的方向发展。
          </p>
        </el-tab-pane>
        <el-tab-pane label="公司资质">
          <div class="title_style">公司资质</div>
          <div class="company_style">
            <ul class="clearfix">
              <li>
                <img src="../../../assets/img/image_zizhi.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../assets/img/image_zizhi.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../assets/img/image_zizhi.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../assets/img/image_zizhi.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../assets/img/image_zizhi.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../assets/img/image_zizhi.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
            </ul>
          </div>
          <div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="公司荣誉">
          <div class="title_style">公司荣誉</div>
          <div class="company_style">
            <ul class="clearfix">
              <li>
                <img src="../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
            </ul>
          </div>
          <div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </el-tab-pane>

      </el-tabs>

    </div>

  </div>
</template>

<script src="./AboutView.js"></script>

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

  .breadcrumb {

    // margin: 20px auto;
    margin-top: 40px;
    margin-bottom: 80px;

  }

  .title_style {

    font-size: 20px;
    font-weight: bold;

  }

  .current_position {

    display: inline-block;
    width: 118px;
    height: 20px;
    overflow: hidden;

  }

  .about_style {

    margin-bottom: 20px;
    border-left: 3px solid #53AEF4;
    box-sizing: border-box;
    padding-left: 20px;

    p {

      font-size: 25px;
      font-weight: bold;
      color: #53AEF4;

    }

    .about_content {

      color: #ccc;

    }

  }

  .el-tabs {

    height: 580px;

  }

  .tabs_style {

    margin-bottom: 120px;

  }

  .el-tabs /deep/ .el-tabs__item {

    height: 70px;
    line-height: 70px;
    background-color: #EDEAED;
    border-bottom: 1px solid #ccc;

  }

  .el-tabs /deep/ .el-tabs__item.is-active {

    color: #53AEF4;

  }

  .line_style {

    font-size: 17px;
    line-height: 63px;
    text-indent: 2em;

  }

  .company_style {

    width: 100%;
    height: 100%;

    ul {

      width: 100%;
      margin-top: 20px;
      // display: flex;

      li {

        float: left;
        width: 30%;
        height: 220px;
        // background-color: #000;
        margin-right: 10px;
        margin-bottom: 10px;
        img {

          width: 100%;
          height: 80%;

        }

        div {

          height: 20%;
          text-align: center;
          margin-top: 10px;

        }

      }

    }

  }

  .el-pagination {

    margin-top: 10px;
    text-align: center;
  }

</style>
