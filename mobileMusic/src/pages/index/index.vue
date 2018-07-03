<template>
  <div class="new">
    <v-header></v-header>
    <v-list></v-list>
  </div>
</template>

<script>
import header from '@/components/header'
import list from '@/components/list'
export default {
  data () {
    return {
      
    }
  },

  components: {
    "v-header": header,
    "v-list": list
},

  methods: {
    
    
  },

  created () {
    
    
  }
}
</script>

<style lang="stylus" scoped>
  .new
    width 100%
</style>
