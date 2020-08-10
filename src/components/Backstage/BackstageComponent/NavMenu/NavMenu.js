export default {
  name: 'NavMenu',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  methods: {
    menuClick (params) {
      params.menuList = this.menuList
      // this.$store.commit( 'menuClick', params )
    }
  }
}
