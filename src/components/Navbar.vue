<template>
    <div class="nav-items">
        <div class="logo">
            <h1>SZ</h1>
        </div>
        <div class="nav-links" v-if="!mobileView">
            <ul>
                <li>STAR MAP</li>
                <li>STAR CHART</li>
                <li>WISHES</li>
                <li>SUBMIT A WISH</li>
            </ul>
        </div>
        <div class="hamburger" v-if="mobileView">
            <f-a-i :icon="['fas', 'fa-bars']"/>
        </div>
    </div>
</template>
<script>
import '../assets/_main.scss'
export default {
    name: 'Navbar',
    data() {
        return {
            mobileView: true,
            showNav: false
        };
    },
    components: {
        
    },
    methods: {
        handleView(){
        this.mobileView = window.innerWidth <= 990;
     }
    },
    created() {
        this.handleView();
    },
    props: {
        
    }
}
</script>
<style lang="">
    
</style>