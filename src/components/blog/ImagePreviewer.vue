<template>
  <transition name="fade">
    <div class="image-previewer" v-if="existsPreview" @click="onClick">
      <img :src="toPreview" alt="none"/>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters({
      existsPreview: 'gallery/existsPreview',
      toPreview: 'gallery/toPreview'
    })
  },
  methods: {
    onClick: function () {
      this.$store.commit('gallery/hidePreview')
    }
  }
}
</script>

<style scoped>
  .image-previewer {
    width: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1500;
  }
  .image-previewer >>> img {
    max-width: 80%;
    height: auto;
  }
</style>
