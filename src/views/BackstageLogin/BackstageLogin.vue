<template>

  <div class="backstage_loginView">
    <div class="login_content clearfix">
      <div class="login_left">
        <div class="left_logo">
          <img src="../../assets/img/home_icon.png" alt="logo">
        </div>
        <div class="left_content"> 四川兴中林建设有限公司  </div>
      </div>
      <div class="login_right">

        <div class="right_text">管理系统</div>

        <!-- LoginForm -->
        <el-form
          :model="loginForm"
          :rules="loginRules"
          ref="loginFormRef">

          <el-form-item prop="userCode">

            <el-input
              v-model="loginForm.userCode"
              class="input_style name_style"
              prefix-icon="el-icon-user"
              autofocus
              clearable
              placeholder="账号">
            </el-input>

          </el-form-item>

          <el-form-item prop="password">

            <el-input
              v-model="loginForm.password"
              @keyup.enter.native=" submitForm('loginFormRef') "
              class="input_style password_style"
              type="password"
              prefix-icon="el-icon-key"
              show-password
              placeholder="密码">
            </el-input>

          </el-form-item>

          <el-form-item>

            <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>

          </el-form-item>

          <el-form-item class="login_style">

            <el-button @click=" submitForm('loginFormRef') ">登录</el-button>

          </el-form-item>

        </el-form>

      </div>
    </div>
  </div>

</template>

<script src="./BackstageLogin.js"></script>

<style lang="scss" scoped>

  .backstage_loginView {

    width: 100vw;
    height: 100vh;
    background: url('../../assets/img/beijing.png') no-repeat center;
    background-size: 100% 100%;

  }

  .login_content {

    width: 1213px;
    height: 639px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    display: flex;
    overflow: hidden;
    box-shadow: rgb(116, 107, 107) 0 0 20px;
    // box-shadow: 5px 5px 5px rgb(105, 104, 104);

    .login_left,
    .login_right {

      float: left;
      overflow: hidden;
      box-sizing: border-box;
      padding-top: 60px;

    }

    .login_left {

      width: 60%;
      background: url('../../assets/img/tanchuang.png') no-repeat center;
      background-size: 100% 100%;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;

      .left_logo {

        width: 71px;
        height: 75px;
        // background-color: #000;
        margin: auto;
        margin-bottom: 20px;

        img {

          width: 100%;
          height: 100%;

        }

      }

      .left_content {

        text-align: center;
        font-size: 26px;

      }

    }

    .login_right {

      width: 40%;
      background-color: #43A7F3;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      overflow-y: auto;

      .right_text {

        text-align: center;
        font-size: 36px;
        color: #fff;

      }

    }

  }

  .el-form {

    padding: 60px;

  }

  .el-form-item {

    margin-bottom: 22px!important;

  }

  .input_style /deep/ input.el-input__inner {

    border: none;
    border-radius: 0;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    color: #fff;

  }

  .input_style /deep/ .el-input__prefix,
  .input_style /deep/ .el-input__suffix {

    color: #fff

  }

  .input_style /deep/ .el-input__inner::placeholder {

    color: #fff;
    // text-indent: 5em;
    font-size: 18px;

  }

  .el-input {

    margin-top: 30px;

  }

  .el-checkbox /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {

    color: #fff

  }

  .el-checkbox /deep/ .el-checkbox__label {

    font-size: 18px;

  }

  .login_style /deep/ .el-button {

    margin-top: 40px;
    display: block;
    width: 100%;
    height: 60px;
    line-height: 30px;
    border-radius: 26px;
    font-size: 18px;
    color: #43A7F3;
    background-color: #FEFEFE;

  }

</style>
