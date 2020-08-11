// import axios from 'axios'

export default {
  name: 'BackstageLogin',
  data () {
    return {
      loginForm: {
        userCode: '',
        password: '',
        companyId: '1'
      },
      loginRules: {
        userCode: [
          { required: true, message: '请输入账号', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      },
      rememberPassword: true
    }
  },
  methods: {
    getPassword () {
      const userCode = localStorage.getItem('username')
      const password = localStorage.getItem('password')
      if (userCode) {
        this.loginForm = {
          userCode,
          password,
          companyId: '1'
        }
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    async login () {
      const _loginForm = this._.cloneDeep(this.loginForm)
      const rememberPassword = this.rememberPassword
      const password = localStorage.getItem('password')
      if (!password) {
        _loginForm.password = this.$md5(_loginForm.password)
      } else if ( password !== _loginForm.password )  {
        _loginForm.password = this.$md5(_loginForm.password)
      }
      const { code, data, message } = await this.$http.post('sys/webLogin', _loginForm)
      if (code !== 200) {
        return this.$notify({
          title: message,
          type: 'warning'
        })
      }
      sessionStorage.setItem('token', data.token)
      // 判断是否勾选记住密码
      if (rememberPassword) {
        localStorage.setItem('username', _loginForm.userCode)
        localStorage.setItem('password', _loginForm.password)
      } else {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
      }
      this.$notify({
        title: message,
        type: 'success'
      })
      this.$router.push('/backstage/home')
    }
  },
  mounted () {
    this.getPassword()
  }
}
