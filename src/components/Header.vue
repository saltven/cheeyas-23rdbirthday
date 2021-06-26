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
          <Navbar/>
      </div>
      <div class="title-text">
        <div class="title">
          <h1 id="bday-title">Happy Birthday, Cheeya!</h1>
        </div>
        <div class="date">
          <h3>05/08/2021</h3>
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
import Navbar from './Navbar'
export default {
  name: 'Header',
  data() {
    return {
     
    };
  },
  components: {
    Navbar
  },
  methods: {
   
  },
  created() {
    
  },
  props: {
    
  }
  
}
</script>


<style>
body {
  margin: 0;
}
#nav-mobile {
  color: white;
}

</style>
