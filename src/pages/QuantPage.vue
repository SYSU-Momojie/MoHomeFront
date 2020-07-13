<template>
  <div class="main-page-container">
    <div class="menu">
      <el-menu :default-active="activeIndex" class="navbar-menu half-width" mode="horizontal" :router="true">
        <el-menu-item index="/quant/manual-import">录入</el-menu-item>
      </el-menu>
    </div>

    <div class="page-content">
      <router-view class="half-width"/>
    </div>

    <page-footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageFooter from '../components/common/PageFooter'

export default {
  components: {PageFooter},
  data: function () {
    return {
      activeIndex: this.$route.path
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      isAdmin: 'user/isAdmin'
    })
  }
}
</script>

<style scoped>
  .navbar-menu {
    opacity: 0.8;
  }
  .half-width {
    width: 50%;
  }
  .menu {
    display: flex;
    justify-content: space-around;
  }
  .main-page-container {
    text-align: center;
    position: relative;
  }
  .page-content {
    display: flex;
    justify-content: space-around;
  }
</style>
