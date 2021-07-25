<template >
    <div class="section-container-wishes">
        <div class="wishes-items">
            <div class="wishes-title">
                <h1>Birthday Wishes</h1>
            </div>
            <div class="wishes-container">
                <div class="wishes-outer">
                    <div class="wishes-inner" v-for="wish in wishes" :key="wish.id">
                        <div class="avatar-img">
                            <img :src="require(`@/assets/images/${wish.image}`)" alt="nada">
                        </div>
                        <div class="wish-container">
                            <h4>{{wish.name}}</h4>
                            <p>{{wish.wish}}</p>
                            <div class="main-img">
                                <img :src="require(`@/assets/images/${wish.imagetwo}`)" alt="nada">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '../assets/_main.scss'
import wishData from './wishes.json'

export default {
    name: 'Wishes',
    data() {
        return {
            wishes: wishData
        }
    },
}
</script>
<style lang="">
    
</style>