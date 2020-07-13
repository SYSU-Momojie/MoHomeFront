<template>
  <div>
    <el-select v-model="data.type">
      <el-option v-for="opt in options"
        :key="opt.code"
        :label="opt.title"
        :value="opt.code">
      </el-option>
    </el-select>
    <el-upload
      class="upload-demo"
      :action="action"
      multiple
      :limit="maxSize"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :data="data">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      fileList: [],
      maxSize: 5,
      action: '/blog/gallery/upload',
      data: {
        type: 'blog'
      }
    }
  },
  methods: {
    handleExceed: function () {
      this.$message.warning('最多选择' + this.maxSize + '个文件')
    }
  },
  mounted: function () {
    this.$store.dispatch('gallery/getGroups')
  },
  computed: {
    options: function () {
      return this.$store.state.gallery.groups
    }
  }
}
</script>

<style scoped>
</style>
