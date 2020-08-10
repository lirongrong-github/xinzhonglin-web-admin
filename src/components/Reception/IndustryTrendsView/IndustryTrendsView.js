export default {
  name: 'AboutView',
  data () {
    return {
    }
  },
  methods: {
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
