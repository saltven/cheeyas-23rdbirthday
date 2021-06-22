<template>
  <body class="parent-wrap">
    <div class="header-wrap">
      <vue-particles class="particle"
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="90"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      <div class="nav-bar">

      </div>
      </vue-particles>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Header',
  props: {
    
  }
}
</script>


<style>
body {
  margin: 0;
}
.header-wrap {
  background: #000;
}
.particle {
  height: 100vh;
}


</style>
