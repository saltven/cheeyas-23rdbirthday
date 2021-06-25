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
        <div>
          <div id="mobile-nav-icon" v-if="mobileView">
            <font-awesome-icon id="nav-mobile" :icon="['fas','fa-bar']"/>
          </div>
          <Navbar v-if="!mobileView" />
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
      mobileView: true,
      showNav: false
    };
  },
  components: {
    Navbar
  },
  methods: {
    handleView(){
      this.mobileView = window.innerWidth <= 1024;
    }
  },
  created() {
    this.handleView();
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
