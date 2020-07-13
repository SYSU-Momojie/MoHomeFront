<template>
  <el-card class="article-list-item">
    <div class="title">
      <router-link :to="'content/' + id">{{title}}</router-link>
    </div>
    <div class="create-time">{{createdTime}}</div>
    <div class="description">
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: function () {
        return {
          id: 0,
          title: '',
          createdTime: 0
        }
      }
    }
  },
  data: function () {
    return {
      id: this.article.id,
      title: this.article.title,
      createdTime: this.article.createdTime
    }
  },
  computed: {
  }
}
</script>

<style scoped>
  .article-list-item {
    margin-top: 20px;
    opacity: 0.7;
  }
  .title {
    color: #333;
    font-weight: 400;
    text-align: left;
    font-size: 24px;
    line-height: 38px;
    margin: 16px 0;
  }
  .title>a {
    text-decoration: none;
    color: #333;
  }
  .title>a:hover {
    color: #85d7db;
  }
  .create-time {
    color: #c8c8c8;
    text-align: left;
    font-size: 14px;
  }
</style>
