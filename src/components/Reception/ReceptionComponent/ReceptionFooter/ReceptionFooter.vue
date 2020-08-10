<template>

  <div>
    <div class="footer">
      <div class="heartContent footer_content clearfix">
        <div class="left content clearfix">
          <div class="left_first">
            <ul>
              <li>关于我们</li>
              <li>公司简介</li>
              <li>文化产品</li>
              <li>发展历程</li>
            </ul>
          </div>
          <div class="left_second">
            <ul>
              <li>企业文化</li>
              <li>企业价值</li>
              <li>办公活动</li>
              <li>员工活动</li>
            </ul>
          </div>
          <div class="left_three">
            <ul>
              <li>技术服务</li>
              <li>软件研发</li>
              <li>APP开发</li>
              <li>网站开发</li>
              <li>ERP开发</li>
            </ul>
          </div>
        </div>
        <div class="left content clearfix">
          <div class="right_four">
            <ul>
              <li>电话：400-886-888</li>
              <li>邮编:512846</li>
              <li>邮箱：+xingzhonglin_99@qq.com</li>
              <li>地址：成都市武侯区天府新谷5栋1307</li>
            </ul>
          </div>
          <div class="right_five">
            <div class="right_five_top">
              <img src="../../../../assets/img/erweima.png" alt="QR code">
            </div>
            <div class="right_five_bottom">扫码关注我们</div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      版权所有：四川兴中林建设有限公司  2020年-2025年  技术支持：百能芮
    </div>
  </div>

</template>

<script src="./ReceptionFooter.js"></script>

<style lang="scss" scoped>

  li {

    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 15px;

  }

  // 设置版心
  .heartContent {

    width: 1200px;
    margin: 0 auto;

  }

  .footer {

    width: 100vw;
    // height: 217px;
    background-color: #212121;
    border-bottom: 2px solid #818181;

  }

  .footer_content {

    box-sizing: border-box;
    padding-top: 20px;
    height: 100%;

    .content {

      width: 50%;
      height: 100%;

      .left_first,
      .left_second,
      .left_three {

        width: 33.3%;
        float: left;
        margin-top: 20px;

        ul {

          li {

            height: 50px;
            color:#818181;

          }

          li:nth-child(1) {

            color: #C6C6C6;
            font-size: 18px

          }

        }

      }

      .right_four {

        width: 60%;
        float: left;
        margin-top: 20px;

        ul {

          li {

            height: 60px;
            color:#818181;

          }

        }

      }

      .right_five {

        width: 40%;
        float: left;
        margin-top: 20px;

        .right_five_top {

          width: 70%;
          margin: 0 auto;
          margin-bottom: 10px;
          height: 150px;

          img {

            width: 100%;
            height: 100%;

          }

        }

        .right_five_bottom {

          margin-top: 30px;
          text-align: center;
          font-size: 19px;
          color: #C6C6C6

        }

      }

    }

  }

  .copyright {

    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #818181;
    background-color: #212121;

  }

</style>
