<template>
  <div class="reception_homeview">

    <!-- main -- navMenu -->
    <div class="main">
      <ul class="main_ul">
        <li class="main_top">
          <div class="heartContent clickStyle">
            <ul class="clickStyle_ul">
              <li class="active" @click=" defaultActive( 'homeSelect' ) ">首页</li>
              <li @click=" defaultActive( 'aboutSelect' ) ">关于我们</li>
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
    <div class="imgStyle">
      <img src="../../../assets/img/banner_shouye.png" alt="HomeView">
    </div>

    <!-- 公司简介 -->
    <div class="heartContent companyExhibition">
      <div class="company_introduce">
        <div class="company_header clearfix">
          <div class="introduce_left">
            <p>公司简介</p>
            <div class="about_style">about us</div>
          </div>
          <div class="introduce_right">
            <button>more</button>
          </div>
        </div>
        <div class="company_main">
          <div class="left main_left">
            <img src="../../../assets/img/image_bangong.png" alt="CompanyProfile">
          </div>
          <div class="left main_right">
            <div class="right_content">
              <p class="line_style">
                四川兴中林建设有限公司成立于2013年1月22日，公司注册地址在成都市双流区东升街道花月东街122号百盛苑，公司法定代表人李锦亮。
              </p>
              <p class="line_style">
                我公司主要从事：市政公用工程；房屋建筑工程；水利水电工程；公路、桥梁、隧道工程；河湖整治工程；水利水电机电设备安装工程；地基与基础工程；建筑装修装饰工程；钢结构工程；模板脚手架安装工程；城市及道路照明工程；建筑幕墙工程；环保工程；建筑机电安装工程；公路交通工程；城市园林绿化；消防设施工程等业务。
              </p>
              <p class="line_style">
                我公司现代化办公设备齐全，办公条件优越，技术人才优秀，管理团队卓越。在企业运作上全面执行“严格组织，严格管理，严格要求；严讲质量，严把安全；吃苦耐劳，求真务实”的管理制度，力争社会各界大力支持，使企业向着良性、快速、健康的方向发展。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 荣誉资质 -->
    <div class="heartContent companyExhibition">
      <div class="company_honor">

        <div class="company_header clearfix">
          <div class="introduce_left">
            <p>荣誉资质</p>
            <div class="about_style">honor and qualification</div>
          </div>
          <div class="introduce_right">
            <button>more</button>
          </div>
        </div>

        <div class="honor_content">
          <ul>
            <li>
              <img src="../../../assets/img/image_zizhi.png" alt="">
            </li>
            <li>
              <img src="../../../assets/img/image_zizhi.png" alt="">
            </li>
            <li>
              <img src="../../../assets/img/image_zizhi.png" alt="">
            </li>
            <li>
              <img src="../../../assets/img/image_zizhi.png" alt="">
            </li>
            <li>
              <img src="../../../assets/img/image_zizhi.png" alt="">
            </li>
            <li>
              <img src="../../../assets/img/image_zizhi.png" alt="">
            </li>
            <li>
              <img src="../../../assets/img/image_zizhi.png" alt="">
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- 工程展示 -->
    <div class="heartContent companyExhibition">
      <div class="engineering_view">
        <div class="company_header clearfix">
          <div class="introduce_left">
            <p>工程展示</p>
            <div class="about_style">Engineering show</div>
          </div>
          <div class="introduce_right">
            <button>more</button>
          </div>
        </div>
        <div class="engineering_content">
          <div class="engineering_top">
            <ul class="clearfix">
              <li>
                <img src="../../../assets/img/image_gonglu.png" alt="Engineering">
                <div class="project_name">
                  <div>项目名称</div>
                </div>
              </li>
              <li>
                <img src="../../../assets/img/image_qiaoliang(2).png" alt="Engineering">
                <div class="project_name">
                  <div>项目名称</div>
                </div>
              </li>
              <li>
                <img src="../../../assets/img/image_shuili(1).png" alt="Engineering">
                <div class="project_names">
                  <div>项目名称</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="engineering_bottom">
            <ul class="clearfix">
              <li>
                <img src="../../../assets/img/image_jianzhu(1).png" alt="Engineering">
                <div class="project_name">
                  <div>项目名称</div>
                </div>
              </li>
              <li>
                <img src="../../../assets/img/image_qiaoliang(1).png" alt="Engineering">
                <div class="project_name">
                  <div>项目名称</div>
                </div>
              </li>
              <li>
                <img src="../../../assets/img/image_daba.png" alt="Engineering">
                <div class="project_names">
                  <div>项目名称</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="./ReceptionHomeView.js"></script>

<style lang="scss" scoped>

  // 设置版心
  .heartContent {

    width: 1200px;
    margin: 0 auto;

  }

  .reception_homeview {

    width: 100vw;

    .imgStyle {

      width: 100%;
      height: 600px;

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

  .companyExhibition {

    margin: 20px auto;

    .company_honor {

      width: 100%;

      .honor_content {

        margin: 20px 0;
        overflow: hidden;

        ul {

          width: 500%;
          // overflow-y: auto;

          li {

            float: left;
            width: 200px;
            height: 154px;
            margin: 0 10px;

            img {

              width: 100%;
              height: 100%;

            }

          }

        }

      }

    }

    .company_introduce {

      width: 100%;

      .company_main {

        box-sizing: border-box;
        padding-top: 20px;
        width: 100%;
        height: 450px;

        .main_left {

          box-sizing: border-box;
          padding-right: 10px;
          width: 50%;
          height: 100%;

          img {

            width: 100%;
            height: 100%;

          }

        }

        .main_right {

          width: 50%;
          height: 100%;
          box-sizing: border-box;
          padding-left: 10px;
          // background-color: rgba(204, 204, 204, 0.671);
          box-shadow: 5px 5px 5px rgba(243, 241, 241, 0.671),5px -5px 5px rgba(233, 226, 226, 0.671),-5px 5px 5px rgba(233, 226, 226, 0.671),-5px -5px 5px rgba(233, 226, 226, 0.671);
          // box-shadow: 5px 5px 5px rgba(204, 204, 204, 0.781);
          border-radius: 8px;
          overflow: hidden;

          .right_content {

            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 10px;
            text-indent: 2em;
            line-height: 20px;

            p {

              margin-bottom: 20px;
              font-size: 17px;

            }

          }

        }

      }

    }

  }

  .company_header {

    height: 70px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;

    .introduce_left {

      float: left;
      margin-top: 21px;

      p {

        font-size: 25px;
        font-weight: bold;
        color: #53AEF4;

      }

      .about_style {

        color: #ccc;

      }

    }

    .introduce_right {

      float: right;
      margin-top: 21px;
      margin-right: 10px;

      button {

        display: inline-block;
        padding: 7px 10px;
        margin-top: 10px;
        background-color: #53AEF4;
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        outline:none;
        cursor: pointer;
        border-radius: 8px;

      }

    }

  }

  .line_style {

    line-height: 33px;

  }

  .engineering_content {

    width: 100%;
    margin-top: 20px;

    .engineering_top,
    .engineering_bottom {

      height: 290px;
      ul {

        display: flex;
        height: 100%;

        li {

          position: relative;

        }

      }

      .project_name {

        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        // background-color: #52483b7a;
        box-sizing: border-box;
        padding-right: 10px;

        div {

          width: 100%;
          height: 100%;
          background-color: #52483b7a;
          color: #fff;

        }

      }

      .project_names {

        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        // background-color: #52483b7a;
        box-sizing: border-box;
        // padding-right: 10px;

        div {

          width: 100%;
          height: 100%;
          background-color: #52483b7a;
          color: #fff;

        }

      }

    }

    .engineering_top {

      li {

        flex: 1;
        box-sizing: border-box;
        padding-right: 10px;

        img {

          width: 100%;
          height: 100%;

        }

      }

      li:nth-child(2) {

        flex: 2;

      }

      li:nth-child(3) {

        padding-right: 0;

      }

    }

    .engineering_bottom {

      margin-top: 10px;

      ul {

        display: flex;
        height: 100%;

        li {

          flex: 1;
          box-sizing: border-box;
          padding-right: 10px;

          img {

            width: 100%;
            height: 100%;

          }

        }

        li:nth-child(1) {

          flex: 2;

        }

        li:nth-child(3) {

          padding-right: 0;

        }

      }

    }

  }

</style>
