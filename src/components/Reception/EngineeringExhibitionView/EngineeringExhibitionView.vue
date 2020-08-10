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
              <li class="active" @click=" defaultActive( 'engineeringSelect' ) ">工程展示</li>
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
      <img src="../../../assets/img/banner_gongchengzhanshi.png" alt="EngineeringExhibition">
    </div>

    <!-- EngineeringShow -->
    <div class="heartContent engineering_style">
      <div class="us_style">工程展示</div>
      <div class="company_style">Engineering show</div>
    </div>

    <!-- EngineeringItem -->
    <div class="heartContent engineering_all">
      <ul>
        <li class="clearfix">
          <div class="left left_content">
            <img src="../../../assets/img/image_jianzhu.png" alt="engineering">
          </div>
          <div class="right right_content">
            <div class="line_style top_style">
              建筑工程
            </div>
            <div class="line_style bottom_style">
              建筑施工是指工程建设实施阶段的生产活动，是各类建筑物的建造过程，也可以说是把设计图纸上的各种线条，在指定的地点，变成实物的过程
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="left left_content">
            <img src="../../../assets/img/image_qiaoliang.png" alt="engineering">
          </div>
          <div class="right right_content">
            <div class="line_style top_style">
              桥梁工程
            </div>
            <div class="line_style bottom_style">
              桥梁施工（bridge construction)按照设计内容，建造桥梁的过程；主要指桥梁施工技术与施工组织、施工管理、施工质
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="left left_content">
            <img src="../../../assets/img/image_shuili.png" alt="engineering">
          </div>
          <div class="right right_content">
            <div class="line_style top_style">
              水利工程
            </div>
            <div class="line_style bottom_style">
              按照设计提出的工程结构、数量、质量、进度及造价等要求修建 水利工程 的工作。包括施工准备、施工技术与施工管理等内容。
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="left left_content">
            <img src="../../../assets/img/image_suidong.png" alt="engineering">
          </div>
          <div class="right right_content">
            <div class="line_style top_style">
              隧洞工程
            </div>
            <div class="line_style bottom_style">
              道工程是属于地下结构物，地下结构是多种多样的，构筑地下结构的施工方法和技术也是多种多样的。施工方法和技术形成与发展和地下结构物
            </div>
          </div>
        </li>
        <li class="clearfix">
          <div class="left left_content">
            <img src="../../../assets/img/image_huanbao.png" alt="engineering">
          </div>
          <div class="right right_content">
            <div class="line_style top_style">
              环保工程
            </div>
            <div class="line_style bottom_style">
              环保工程是指特定为环境保护所做的工程，由于工业发展导致环境污染，而以某组设想目标为依据，应用有关的科学知识和技术手段，通过一群
            </div>
          </div>
        </li>
      </ul>
      <div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script src="./EngineeringExhibitionView.js"></script>

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

    margin: 20px auto;

  }

  .engineering_style {

    margin: 30px auto;
    height: 90px;
    text-align: center;

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

  .engineering_all {

    ul {

      width: 100%;

      li {

        width: 100%;
        height: 180px;
        margin-bottom: 10px;
        border-bottom: 2px solid #ccc;

        .left_content {

          box-sizing: border-box;
          width: 26%;
          height: 100%;
          padding-right: 20px;
          padding-bottom: 20px;

          img {

            width: 100%;
            height: 100%;

          }

        }

        .right_content {

          width: 74%;

        }

      }

    }

  }

  .line_style {

    line-height: 30px;
    font-size: 20px;

  }

  .top_style,
  .bottom_style {

    margin-top: 20px;

  }

  .el-pagination {

    margin-top: 20px;
    margin-bottom: 60px;
    text-align: center;

  }

</style>
