import BackstageSearch from '@/components/Backstage/BackstageComponent/BackstageSearch/BackstageSearch.vue'

export default {
  name: 'DictionariesView',
  components: {
    BackstageSearch
  },
  data () {
    return {
      tableData: [],
      tableDataS: [],
      multipleSelection: [],
      currentPage4: 4
    }
  },
  mounted () {
    this.getDicts()
  },
  methods: {
    async getDicts () {
      const { code, data } = await this.$http.post('/sys/dictType/listByCondition', {
        currentPage: 1,
        pageNo: 0,
        pageSize: 10
      })
      if (code !== 200) {
        return this.$notify({
          title: '获取数据字典失败,可刷新页面重新获取',
          type: 'warning'
        })
      }
      this.tableData = data.rows
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
