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
      currentPage: 1,
      pageNow: 0,
      pageSize: 10,
      total: 0,
    }
  },
  mounted () {
    this.getDicts()
  },
  methods: {
    async getDicts () {
      const { code, data } = await this.$http.post('/sys/dictType/listByCondition', {
        currentPage: this.currentPage,
        pageNo: this.pageNow,
        pageSize: this.pageSize
      })
      if (code !== 200) {
        return this.$notify({
          title: '获取数据字典失败,可刷新页面重新获取',
          type: 'warning'
        })
      }
      this.tableData = data.rows
      this.total = data.total
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getDicts()
    },
    handleCurrentChange (val) {
      this.pageNow = ( val - 1 ) * this.pageSize
      this.currentPage = val
      this.getDicts()
    },
    rowClass ({ row, rowIndex}) {
      // return 'background: #008080; color: #000' 
    },
    rowClick(row, event, column) {
      console.log(row, event, column)
    }
  }
}
