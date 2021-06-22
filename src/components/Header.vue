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
      </vue-particles>
      <div class="nav-bar">
        <div class="nav-items">
          <div class="logo">
            <h1>SZ</h1>
          </div>
          <div class="nav-links">
            <ul>
              <li>Star Map</li>
              <li>Star Chart</li>
              <li>Wishes</li>
              <li>Submit A Wish</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="test">
        test1212
      </div>
    </div>
  </body>
</template>

<script>
import '../assets/_main.scss'
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

</style>
