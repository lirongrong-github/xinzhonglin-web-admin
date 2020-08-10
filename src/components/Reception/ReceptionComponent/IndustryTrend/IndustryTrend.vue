<template>
  <div>

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

    <!-- industryTrends -->
    <div class="heartContent about_style">
      <p>
        行业动态
      </p>
      <div class="about_content">
        industry dynamic
      </div>
    </div>

    <!-- tabs -->
    <div class="heartContent tabs_style">

      <el-tabs tab-position="left">

        <el-tab-pane label="资质荣誉">
          <div class="title_style text_style">资质荣誉</div>
          <div class="company_style">
            <ul class="clearfix">
              <li>
                <img src="../../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../../assets/img/image_rongyu.png" alt="company">
                <div>互联网出版许可证</div>
              </li>
              <li>
                <img src="../../../../assets/img/image_rongyu.png" alt="company">
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
        <el-tab-pane label="学习培训">
          <div class="title_style">学习培训</div>
          <div class="industry_trends">
            <ul>
              <li @click=" routerHump ">
                1、地基基础工程专业承包基基础工程专业承包资质标准
              </li>
              <li @click=" routerHump ">
                2、地基基础工程专业承基基础工程专业承包资质标准
              </li>
              <li @click=" routerHump ">
                3、地基基础工程专业承包资质标准基基础工程专业承包资质标准
              </li>
              <li @click=" routerHump ">
                4、地基基础工程专业承包资质标准基基础工程专业承包
              </li>
              <li @click=" routerHump ">
                5、地基基础工程专业承包资质
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
        <el-tab-pane label="相关链接">
          <div class="title_style">相关链接</div>
          <div class="industry_trends">
            <ul>
              <li>
                1、相关链接名称相关链接名称相关链接名称相关链接名称相关链接名称
              </li>
              <li>
                2、相关链接名称相关链接名称相关链接名称
              </li>
              <li>
                3、相关链接名称相关链接名称相关3
              </li>
              <li>
                4、地基基础工程专业承包资质标基基础工程专业承包资质标准准
              </li>
              <li>
                5、地基基础工程专业承包资质基基础工程专业承包资质标准标准
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

<script src="./IndustryTrend.js"></script>

<style lang="scss" scoped>

  // 设置版心
  .heartContent {

    width: 1200px;
    margin: 0 auto;

  }

  .breadcrumb {

    margin-top: 40px;
    margin-bottom: 80px;

  }

  .title_style {

    font-size: 20px;
    font-weight: bold;

  }

  .text_style {

    margin-bottom: 20px;

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

    height: 600px;

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

    line-height: 63px;
    text-indent: 2em;

  }

  .company_style {

    width: 100%;
    height: 100%;

    ul {

      width: 100%;
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

  .industry_trends {

    ul {

      li {

        height: 70px;
        line-height: 70px;
        margin-bottom: 20px;
        font-size: 18px;
        border-bottom: 1px dashed #ccc;
        cursor: pointer;
        user-select: none;

      }

    }

  }

  .el-pagination {

    margin-top: 10px;
    text-align: center;
  }
</style>
