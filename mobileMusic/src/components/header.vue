<template>
    <div class="header">
        <v-search></v-search>
        <v-swiper></v-swiper>
    </div>
</template>
<script>
import swiper from '@/components/swiper'
import search from '@/components/search'

export default {
    components: {
        "v-swiper": swiper,
        "v-search": search

    }
}
</script>
<style lang="stylus" scoped> 
    .header
        position relative
        background-color #AEEEEE
        height 330rpx
        width 100%
        box-sizing border-box
        padding-top 25rpx        
        
    
</style>
