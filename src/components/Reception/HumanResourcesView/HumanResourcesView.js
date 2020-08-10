export default {
  name: 'AboutView',
  data () {
    return {
      activeNames: ['1'],
      tableData: [{
        workAddress: '四川成都',
        recruitersNum: '2人',
        Salary: '10000',
        sex: '男',
        workBackground: '3年以上',
        time: '2020-08-05'
      }]
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    defaultActive (select) {
      switch (select) {
        case 'homeSelect':
          this.$router.push('/reception/home')
          break
        case 'aboutSelect':
          this.$router.push('/reception/about')
          break
        case 'engineeringSelect':
          this.$router.push('/reception/engineering')
          break
        case 'industrySelect':
          this.$router.push('/reception/industry')
          break
        case 'humanSelect':
          this.$router.push('/reception/human')
          break
        case 'contactSelect':
          this.$router.push('/reception/contact')
          break
        case 'backstageSelect':
          this.$router.replace('/backstage')
          break
      }
    }
  }
}
