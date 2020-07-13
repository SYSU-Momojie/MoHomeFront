<template>
  <div id="app">
    <particles-background/>
    <image-previewer/>
    <router-view/>
  </div>
</template>

<script>
import ParticlesBackground from './components/common/ParticlesBackground'
import ImagePreviewer from './components/blog/ImagePreviewer'

export default {
  name: 'App',
  components: {
    ImagePreviewer,
    ParticlesBackground
  },
  mounted () {
    this.$store.dispatch('user/fetchUserInfo')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
  html, body {
    height: 100%;
    margin: 0;
    font-family: 'Helvetica Neue', Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  }
</style>
