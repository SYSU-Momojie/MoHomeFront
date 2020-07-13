<template>
  <div>
    <el-upload
      class="upload-demo"
      :action="action"
      drag
      :limit="maxSize"
      :file-list="fileList"
      :data="data">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传excel文件</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      fileList: [],
      maxSize: 1,
      action: process.env.VUE_APP_MQ_API_HOST + '/manage/uploadManual'
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
