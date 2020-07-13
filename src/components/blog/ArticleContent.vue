<template>
  <el-card class="article-container">
    <el-button type="primary" size="mini" v-if="isAdmin" @click="edit">编辑</el-button>
    <h1 class="title">{{article.title}}</h1>
    <markdown-viewer :content="article.content"/>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../../api/blog-api'
import {DateFormat, ParseDate} from '../../util/date'
import MarkdownViewer from './MarkdownViewer'

export default {
  components: {MarkdownViewer},
  data: function () {
    return {
      id: this.$route.params.id,
      article: {
        title: '',
        content: '',
        updatedTime: ''
      }
    }
  },
  mounted: function () {
    api.get('article/getArticle', {id: this.id})
      .then((data) => {
        this.article = {
          title: data.title,
          content: data.content,
          updatedTime: DateFormat(ParseDate(data.updatedTime), 'yyyy-MM-dd')
        }
      })
  },
  computed: {
    ...mapGetters({
      isAdmin: 'user/isAdmin'
    })
  },
  methods: {
    edit: function () {
      const id = this.id
      this.$router.push({
        path: `/postArticle/${id}`
      })
    }
  }
}
</script>

<style scoped>
  .article-container {
    margin-top: 20px;
    opacity: 0.8;
  }
  .title {
    font-size: 24px;
    text-align: left;
  }
</style>
