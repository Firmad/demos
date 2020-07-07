<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'cityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles'
.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size .32rem
  color #fff
  background-color $bgColor
  .back-icon
    position absolute
    top 0
    left 0.1rem
    font-size 0.4rem
    color #fff
</style>
