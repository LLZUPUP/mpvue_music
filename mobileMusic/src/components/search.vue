<template>
<div class="search">
    <div class="search-box">
        <input @input= "input" @keyup.enter= "search(keyword)" type="text" v-model= "keyword" placeholder="请输入歌手/歌名进行查询">
    </div>
    <div v-if= "keyword.trim() !==''" class="search-list">
        <ul v-if= "isResult > -1">
            <li v-for= "(list,index) in resultList" :key= "index" ></li>
        </ul>
        <p v-else>{{searchTip}}</p>
    </div>
    <div class="searchLogo" @click= "search(keyword)"></div>
</div>
    
</template>
<script>
export default {
    data() {
        return {
            keyword: "",            //搜索的关键字
            resultList: [],
            searchTip: "正在搜索..."    //搜索时的提示信息
        }
    },
    computed: {
        isResult(){
            //判断数据里是否有keyword输入的关键字
        }
    }
}
</script>
<style lang="stylus" scoped>
.search
    position relative
    .search-box
        position fixed
        top 10rpx
        z-index 10
        left 5%
        border-radius 25rpx
        background-color #fff
        width 90%
        height 50rpx
        font-size 30rpx
        overflow hidden
        text-indent 2em
        box-sizing border-box
        padding-left 20rpx
</style>
