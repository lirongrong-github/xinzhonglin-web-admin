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
              <li class="active" @click=" defaultActive( 'humanSelect' ) ">人力资源</li>
              <li @click=" defaultActive( 'contactSelect' ) ">联系我们</li>
              <li @click=" defaultActive( 'backstageSelect' ) ">进入后台</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <!-- bannerView -->
    <div class="img_style">
      <img src="../../../assets/img/agreement-business-businessmen-886465-via-sitapix-com.png" alt="HumanResourcesView">
    </div>

    <!-- humanResources -->
    <div class="heartContent engineering_style">
      <div class="us_style">人力资源</div>
      <div class="company_style">human resources</div>
    </div>

    <!-- content -->
    <div class="heartContent human_style">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="技术人员" name="1">
          <div>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="workAddress"
                label="工作地址"
                align="center">
              </el-table-column>
              <el-table-column
                prop="recruitersNum"
                label="招聘人数"
                align="center">
              </el-table-column>
              <el-table-column
                prop="Salary"
                label="薪资待遇"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sex"
                label="性别要求"
                align="center">
              </el-table-column>
              <el-table-column
                prop="workBackground"
                label="工作经验"
                align="center">
              </el-table-column>
              <el-table-column
                prop="time"
                label="招聘时间"
                align="center">
              </el-table-column>
            </el-table>
            <div class="job_require">
              <ul>
                <li>岗位要求</li>
                <li>1、各工程项目管理，有效统筹组织人员、机械、材料，全面负责项目实施过程中的质量、安全、进度;</li>
                <li>2、负责内部的日常管理、资源协调</li>
                <li>3、各工程项目管理，有效统筹组织人员、机械、材料</li>
                <li>3、各工程项目管理，资源协调，全面负责项目实施过程中的质量</li>
              </ul>
            </div>
            <div class="job_require">
              <ul>
                <li>工作职责</li>
                <li>1、大专及以上学历，3年以上工程行业项目管理工作经验;</li>
                <li>2、吃苦耐劳，抗压能力好，能够协调、督促团队共同完成任务指标;</li>
                <li>3、各工程项目管理，有效统筹组织人员、机械、材料</li>
                <li>4、各工程项目管理，资源协调，全面负责项目实施过程中的质量</li>
              </ul>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="销售人员" name="2">
          <div>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="workAddress"
                label="工作地址"
                align="center">
              </el-table-column>
              <el-table-column
                prop="recruitersNum"
                label="招聘人数"
                align="center">
              </el-table-column>
              <el-table-column
                prop="Salary"
                label="薪资待遇"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sex"
                label="性别要求"
                align="center">
              </el-table-column>
              <el-table-column
                prop="workBackground"
                label="工作经验"
                align="center">
              </el-table-column>
              <el-table-column
                prop="time"
                label="招聘时间"
                align="center">
              </el-table-column>
            </el-table>
            <div class="job_require">
              <ul>
                <li>岗位要求</li>
                <li>1、各工程项目管理，有效统筹组织人员、机械、材料，全面负责项目实施过程中的质量、安全、进度;</li>
                <li>2、负责内部的日常管理、资源协调</li>
                <li>3、各工程项目管理，有效统筹组织人员、机械、材料</li>
                <li>3、各工程项目管理，资源协调，全面负责项目实施过程中的质量</li>
              </ul>
            </div>
            <div class="job_require">
              <ul>
                <li>工作职责</li>
                <li>1、大专及以上学历，3年以上工程行业项目管理工作经验;</li>
                <li>2、吃苦耐劳，抗压能力好，能够协调、督促团队共同完成任务指标;</li>
                <li>3、各工程项目管理，有效统筹组织人员、机械、材料</li>
                <li>4、各工程项目管理，资源协调，全面负责项目实施过程中的质量</li>
              </ul>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="前台人员" name="3">
          <div>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="workAddress"
                label="工作地址"
                align="center">
              </el-table-column>
              <el-table-column
                prop="recruitersNum"
                label="招聘人数"
                align="center">
              </el-table-column>
              <el-table-column
                prop="Salary"
                label="薪资待遇"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sex"
                label="性别要求"
                align="center">
              </el-table-column>
              <el-table-column
                prop="workBackground"
                label="工作经验"
                align="center">
              </el-table-column>
              <el-table-column
                prop="time"
                label="招聘时间"
                align="center">
              </el-table-column>
            </el-table>
            <div class="job_require">
              <ul>
                <li>岗位要求</li>
                <li>1、各工程项目管理，有效统筹组织人员、机械、材料，全面负责项目实施过程中的质量、安全、进度;</li>
                <li>2、负责内部的日常管理、资源协调</li>
                <li>3、各工程项目管理，有效统筹组织人员、机械、材料</li>
                <li>3、各工程项目管理，资源协调，全面负责项目实施过程中的质量</li>
              </ul>
            </div>
            <div class="job_require">
              <ul>
                <li>工作职责</li>
                <li>1、大专及以上学历，3年以上工程行业项目管理工作经验;</li>
                <li>2、吃苦耐劳，抗压能力好，能够协调、督促团队共同完成任务指标;</li>
                <li>3、各工程项目管理，有效统筹组织人员、机械、材料</li>
                <li>4、各工程项目管理，资源协调，全面负责项目实施过程中的质量</li>
              </ul>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="设计人员" name="4">
          <div>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="workAddress"
                label="工作地址"
                align="center">
              </el-table-column>
              <el-table-column
                prop="recruitersNum"
                label="招聘人数"
                align="center">
              </el-table-column>
              <el-table-column
                prop="Salary"
                label="薪资待遇"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sex"
                label="性别要求"
                align="center">
              </el-table-column>
              <el-table-column
                prop="workBackground"
                label="工作经验"
                align="center">
              </el-table-column>
              <el-table-column
                prop="time"
                label="招聘时间"
                align="center">
              </el-table-column>
            </el-table>
            <div class="job_require">
              <ul>
                <li>岗位要求</li>
                <li>1、各工程项目管理，有效统筹组织人员、机械、材料，全面负责项目实施过程中的质量、安全、进度;</li>
                <li>2、负责内部的日常管理、资源协调</li>
                <li>3、各工程项目管理，有效统筹组织人员、机械、材料</li>
                <li>3、各工程项目管理，资源协调，全面负责项目实施过程中的质量</li>
              </ul>
            </div>
            <div class="job_require">
              <ul>
                <li>工作职责</li>
                <li>1、大专及以上学历，3年以上工程行业项目管理工作经验;</li>
                <li>2、吃苦耐劳，抗压能力好，能够协调、督促团队共同完成任务指标;</li>
                <li>3、各工程项目管理，有效统筹组织人员、机械、材料</li>
                <li>4、各工程项目管理，资源协调，全面负责项目实施过程中的质量</li>
              </ul>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="清洁人员" name="5">
          <div>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="workAddress"
                label="工作地址"
                align="center">
              </el-table-column>
              <el-table-column
                prop="recruitersNum"
                label="招聘人数"
                align="center">
              </el-table-column>
              <el-table-column
                prop="Salary"
                label="薪资待遇"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sex"
                label="性别要求"
                align="center">
              </el-table-column>
              <el-table-column
                prop="workBackground"
                label="工作经验"
                align="center">
              </el-table-column>
              <el-table-column
                prop="time"
                label="招聘时间"
                align="center">
              </el-table-column>
            </el-table>
            <div class="job_require">
              <ul>
                <li>岗位要求</li>
                <li>1、各工程项目管理，有效统筹组织人员、机械、材料，全面负责项目实施过程中的质量、安全、进度;</li>
                <li>2、负责内部的日常管理、资源协调</li>
                <li>3、各工程项目管理，有效统筹组织人员、机械、材料</li>
                <li>3、各工程项目管理，资源协调，全面负责项目实施过程中的质量</li>
              </ul>
            </div>
            <div class="job_require">
              <ul>
                <li>工作职责</li>
                <li>1、大专及以上学历，3年以上工程行业项目管理工作经验;</li>
                <li>2、吃苦耐劳，抗压能力好，能够协调、督促团队共同完成任务指标;</li>
                <li>3、各工程项目管理，有效统筹组织人员、机械、材料</li>
                <li>4、各工程项目管理，资源协调，全面负责项目实施过程中的质量</li>
              </ul>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

  </div>
</template>

<script src="./HumanResourcesView.js"></script>

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

  .human_style {

    margin-bottom: 100px;

  }

  .el-collapse-item /deep/ .el-collapse-item__content {

    padding-left: 20px;
    padding-right: 20px;

  }

  .el-collapse-item /deep/ .el-collapse-item__header {

    font-size: 18px;
    color: #53AEF4;
    // background-color: rgba(231, 228, 228, 0.61);

  }

  .job_require {

    margin-top: 10px;

  }

</style>
