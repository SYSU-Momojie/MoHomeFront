<template>
  <div class="login-page">
    <el-form :model="user" :rules="rules" label-width="80px">
      <div v-if="isLogin">
        <el-form-item>
          <el-button type="primary" @click="backToMain">主页</el-button>
          <el-button type="danger" @click="logout">注销</el-button>
        </el-form-item>
      </div>
      <div v-else>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="user.name"/>
        </el-form-item>
        <el-form-item label="密码" :error="errMsg" prop="pwd">
          <el-input type="password" v-model="user.pwd" autocomplete="off"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登陆</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data: function () {
    return {
      user: {
        name: '',
        pwd: ''
      },
      errMsg: '',
      rules: {
        name: {required: true, message: '不空不空'},
        pwd: {required: true, message: '不空不空'}
      }
    }
  },
  methods: {
    login: function () {
      this.errMsg = ''
      this.$store.dispatch('user/login', this.user)
        .catch((err) => {
          this.errMsg = err
        })
    },
    logout: function () {
      this.$store.dispatch('user/logout')
    },
    backToMain: function () {
      this.$router.push('/')
    }
  },
  computed: {
    isLogin: function () {
      return this.$store.getters['user/isLogin']
    }
  }
}
</script>

<style scoped>
  .login-page {
    width: 400px;
    text-align: center;
    padding-right: 60px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    display: inline-block;
    margin-top: 200px;
    padding-top: 20px;
    background-color: white;
  }
</style>
