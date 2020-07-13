<template>
  <div>
    <article-list-item v-for="item in list" :key="item.id"
      :article="item"/>
    <el-pagination
      layout="prev, pager, next"
      :page-count="pageNum"
      :current-page.sync="currentPage"
      @current-change="getPage"/>
  </div>
</template>

<script>
import ArticleListItem from './ArticleListItem'

export default {
  components: {ArticleListItem},
  data: function () {
    return {
      pageNum: 1,
      pageSize: 10,
      list: [],
      currentPage: 1
    }
  },
  methods: {
    getPage: function () {
      const param = {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
        type: 'blog'
      }
      this.$store.dispatch('article/getPage', param)
        .then((data) => {
          this.pageNum = Math.ceil(data.total / this.pageSize)
          this.list = data.list
        })
    }
  },
  mounted: function () {
    this.getPage()
  }
}
</script>

<style scoped>
</style>
