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
          <b-navbar toggleable="lg" type="dark" >
              <b-navbar-brand href="#" class="logo">SZ</b-navbar-brand>

              <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav> 
                      <b-nav-item href="#">STAR MAP</b-nav-item>
                      <b-nav-item href="#">STAR CHART</b-nav-item>
                      <b-nav-item href="#">WISHES</b-nav-item>
                      <b-nav-item href="#">SUBMIT A WISH</b-nav-item>
                  </b-navbar-nav>
              </b-collapse> -->
          </b-navbar>
        </div>
      </div>
      <div class="title-text">
        <div class="title">
          <h1 id="bday-title">Happy Birthday,
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
          </h1>
        </div>
        <div class="date">
          <h3>05/08/2021</h3>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import '../assets/_main.scss'
import { setTimeout } from 'timers';
  export default {
    name: 'Header',
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['Cheeya!', 'Shahiddles!', 'Yaya!', 'Shaheera!'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    components: {
    },
    methods: {
       typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    },
    props: {
      
    }
    
}
</script>


<style>
body {
  margin: 0;
}


</style>
