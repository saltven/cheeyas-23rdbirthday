<template>
    <div>
    <b-navbar toggleable="lg" type="dark" class="nav-items">
        <b-navbar-brand href="#" class="logo">SZ</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav> 
                <b-nav-item href="#">STAR MAP</b-nav-item>
                <b-nav-item href="#">STAR CHART</b-nav-item>
                <b-nav-item href="#">WISHES</b-nav-item>
                <b-nav-item href="#">SUBMIT A WISH</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>
<script>
import '../assets/_main.scss'
export default {
  name: 'Navbar',
  props: {
    
  }
}
</script>
<style lang="">
    
</style>