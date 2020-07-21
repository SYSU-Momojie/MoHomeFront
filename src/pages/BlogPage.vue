<template>
  <el-container class="main-page-container">
    <el-header class="menu">
      <el-menu :default-active="activeIndex" class="navbar-menu half-width" mode="horizontal" :router="true">
        <el-menu-item index="/blog/blog-list">Blog</el-menu-item>
        <el-menu-item index="/blog/gallery">Gallery</el-menu-item>
        <el-menu-item index="/blog/uploadPic" v-if="isAdmin">Upload</el-menu-item>
        <el-menu-item index="/blog/postArticle" v-if="isAdmin">Post</el-menu-item>
      </el-menu>
    </el-header>

    <el-main class="page-content">
      <router-view class="half-width"/>
    </el-main>

    <el-footer>
      <page-footer/>
    </el-footer>

  </el-container>
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
