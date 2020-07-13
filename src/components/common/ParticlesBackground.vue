<template>
  <div class="particles-background">
  <vue-particles
  color="#999999"
  :particleOpacity="0.7"
  :particlesNumber="160"
  shapeType="circle"
  :particleSize="4"
  linesColor="#999999"
  :linesWidth="1"
  :lineLinked="true"
  :lineOpacity="0.4"
  :linesDistance="150"
  :moveSpeed="3"
  :hoverEffect="true"
  hoverMode="grab"
  :clickEffect="false"/>
  </div>
</template>

<script>
export default {
  name: 'ParticlesBackground'
}
</script>

<style scoped>
  .particles-background {
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100%;
  }
  #particles-js {
    height: 100%;
  }
</style>
