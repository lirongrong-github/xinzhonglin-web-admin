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

    <!-- detailConten -->
    <div class="heartContent detail_content">
      <div class="detail_top">
        <ul>
          <li>地基基础工程专业承包基础工程</li>
          <li>发布日期：2020年6月16日</li>
        </ul>
      </div>
      <div class="detail_middle">
        <p>
          承包工程bai范围：一级资质：可du承担各类地基基础工程的施工。zhi二级资质：可承担下列工程的施工：dao（1）高度100米以下工业、民用建筑工程和高度120米以下构筑物的地基基础工程；（2）深度不超过24米的刚性桩复合地基处理和深度不超过10米的其它地基处理工程；（3）单桩承受设计荷载5000千牛以下的桩基础工程；（4）开挖深度不超过15米的基坑围护工程。三级资质：可承担下列工程的施工：（1）高度50米以下工业、民用建筑工程和高度70米以下构筑物的地基基础工程；（2）深度不超过18米的刚性桩复合地基处理或深度不超过8米的其它地基处理工程；（3）单桩承受设计荷载3000千牛以下的桩基础工程；（4）开挖深度不超过12米的基坑围护工程。
        </p>
      </div>
      <div class="detail_bottom">
        下一篇：地基基础工程专业承包资质标准基基础工程专业承包资质标准
      </div>
    </div>

  </div>

</template>

<script src="./IndustryDetail.js"></script>

<style lang="scss" scoped>

  // 设置版心
  .heartContent {

    width: 1200px;
    margin: 0 auto;

  }

  .breadcrumb {

    margin: 0 auto;
    margin-top: 20px;

  }

  .detail_content {

    // margin: 100px auto;
    margin-top: 100px;
    margin-bottom: 180px;

    .detail_top {

      height: 90px;
      border-bottom: 1px solid #ccc;

      ul {

        li {

          text-align: center;

        }

        li:nth-child(1) {

          font-size: 23px;

        }

        li:nth-child(2) {

          margin-top: 10px;
          font-size: 15px;

        }

      }

    }

    .detail_middle {

      box-sizing: border-box;
      height: 350px;
      padding-top: 35px;
      text-indent: 2em;
      font-size: 16px;
      overflow: hidden;
      overflow-y: auto;
      border-bottom: 1px solid #ccc;

      p {

        line-height: 37px;

      }

    }

    .detail_bottom {

      margin-top: 26px;
      font-size: 18px;

    }

  }

</style>
