<template>
  <div class="post-article-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item class="post-line">
        <el-select v-model="form.type">
          <el-option v-for="opt in typeOpts" :key="opt.value" :label="opt.label" :value="opt.value"/>
        </el-select>
        <el-button type="primary" @click="postArticle">发送</el-button>
        <span class="last-saved">最后保存: {{updatedTime}}</span>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="form.title"/>
      </el-form-item>
      <el-form-item label="内容">
        <mavon-editor ref="editor"
                      v-model="form.content" :ishljs = "true"
                      @imgAdd="addImg" @save="saveDraft"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '../../api/blog-api'
import {DateFormat} from '../../util/date'

export default {
  data: function () {
    return {
      form: {
        id: this.$route.params.id,
        title: '',
        content: '',
        type: 'test'
      },
      updatedTime: '--:--',
      typeOpts: [
        {value: 'blog', label: 'blog'},
        {value: 'test', label: 'test'}
      ],
      draftKey: 'draftBlog',
      showApi: '/blog/gallery/show'
    }
  },
  mounted: function () {
    if (this.form.id) {
      const param = {
        id: this.form.id
      }
      api.get('article/getArticle', param)
        .then((data) => {
          this.form = data
        })
    } else {
      const draftStr = this.getLocalStorage(this.draftKey)
      const savedValue = JSON.parse(draftStr)
      if (savedValue) {
        this.form = savedValue
      }
    }
  },
  methods: {
    addImg: function (pos, $file) {
      let formData = new FormData()
      formData.append('file', $file)
      formData.append('type', 'blog')
      api.upload('gallery/upload', formData)
        .then((vo) => {
          if (vo !== null) {
            this.$refs.editor.$img2Url(pos, this.showApi + '?type=' + vo.groupCode + '&name=' + vo.fileName)
          }
        })
    },
    postArticle: function () {
      this.$store.dispatch('article/postArticle', this.form)
        .then((id) => {
          this.removeLocalStorage(this.draftKey)
          this.$router.push({
            path: `/content/${id}`
          })
        })
    },
    saveDraft: function () {
      this.setLocalStorage(this.draftKey, JSON.stringify(this.form))
      this.updatedTime = DateFormat(new Date(), 'HH:mm')
    }
  }
}
</script>

<style scoped>
  .post-article-container {
    margin-top: 40px;
    padding: 0 20px;
  }
  .last-saved {
    margin-left: 20px;
    color: #333;
  }
  .post-line {
    text-align: left;
  }
</style>
