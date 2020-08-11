<template>
  <div class="backstage_homeview">
    <el-row :gutter="10">
      <el-col :md="24" :lg="12">
        <div class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :md="24" :lg="12">
        <div class="grid-content bg-purple-light">4</div>
      </el-col>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    
  </div>
</template>

<script src="./BackstageHomeView.js"></script>

<style lang="scss" scoped>

  .backstage_homeview {

    width: 100%;
    height: 100%;
    background-color: rgb(195, 112, 228);

  }

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>
