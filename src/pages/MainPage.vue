<template>
  <div class="main-page">
    <img :src="imgUrl">
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      imgUrl:require("../assets/yu.png")
    }
  }
}
</script>

<style scoped>
</style>
