<template>

  <div class="victionaries_view clearfix">

    <!-- dict -->
    <div class="box_card">
      <el-card>
        <div slot="header" class="clearfix">
          <BackstageSearch />
        </div>
        <el-table
          height="463"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          :header-cell-style="rowClass"
          @row-click="rowClick">
          <!-- <el-table-column
            type="selection"
            width="55">
          </el-table-column> -->
          <el-table-column
            prop="dictTypeCode"
            label="编码"
            align="center"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="dictTypeName"
            label="名称"
            align="center"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            label="状态"
            align="center">
            <template slot-scope="scope">
              {{ scope.row.status ? '正常' : '停用' }}
            </template>
          </el-table-column>
          <el-table-column
            prop="updateTime"
            label="更新时间"
            align="center"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            label="操作"
            width="145"
            align="center">
            <template>
              <el-button size="mini" type="warning">编辑</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          align="center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="pageSize"
          layout="total, prev, pager, next, sizes"
          :total="total">
        </el-pagination>
      </el-card>
    </div>

    <!-- dictDetail -->
    <div class="box_card">
      <el-card>
        <div slot="header" class="clearfix">
          <div class="dict_detail left">字典详情</div>
          <el-button type="info" icon="el-icon-plus" class="right" size="mini" v-show=" false ">新增</el-button>
        </div>
        <div v-if="tableDataS.length === 0" class="empty_class">
          点击字典查看详情
        </div>
        <div v-else>
          <el-table
            ref="multipleTable"
            :data="tableDataS"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="日期"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>

  </div>

</template>

<script src="./DictionariesView.js"></script>

<style lang="scss" scoped>

  .victionaries_view {

    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;

    .box_card {

      float: left;
      width: 50%;
      height: 100%;
      box-sizing: border-box;

      .el-card {

        width: 100%;
        height: 100%;

      }

    }

    .box_card:nth-child(1) {

      padding: 20px 10px 20px 20px;

    }

    .box_card:nth-child(2) {

      padding: 20px 20px 20px 10px;

    }

  }

  .empty_class {

    box-sizing: border-box;
    padding-left: 20px;
    height: 80px;
    line-height: 80px;
    border-left: 6px solid #ccc;
    font-size: 16px;

  }

  .dict_detail {

    font-size: 18px;
    margin-top: 8px;

  }

  .el-pagination {

    margin-top: 20px;

  }

  .el-table {

    cursor: pointer;

  }

</style>
