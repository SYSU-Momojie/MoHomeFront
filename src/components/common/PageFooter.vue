<template>
  <div class="footer">
    <div class="container">
      <seperator/>
      <div>❤ZJY</div>
    </div>
  </div>
</template>

<script>
import Seperator from './Seperator'

export default {
  components: {Seperator},
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    opacity: 0.8;
  }
  .container {
    width: 50%;
    color: #eeeeee;
  }
</style>
