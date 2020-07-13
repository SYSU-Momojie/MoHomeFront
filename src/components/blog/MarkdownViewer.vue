<template>
  <div class="markdown-viewer-container">
    <div class="markdown-viewer" v-html="markdownHtml" v-on:click="handleClick"/>
  </div>
</template>

<script>
import MavonEditor from 'mavon-editor'

export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      markdownIt: MavonEditor.mavonEditor.getMarkdownIt()
    }
  },
  computed: {
    markdownHtml: function () {
      return this.markdownIt.render(this.content)
    }
  },
  methods: {
    handleClick: function (event) {
      console.log(event)
      if (event.srcElement.tagName === 'IMG') {
        this.$store.commit('gallery/previewImg', event.srcElement.src)
      }
    }
  }
}
</script>

<style scoped>
  .markdown-viewer {
    text-align: left;
  }
  .markdown-viewer >>> img {
    max-width: 100%;
  }
</style>
