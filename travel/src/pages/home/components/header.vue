<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入景点/游玩
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-down-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'homeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
@import'~style/varibles'
.header
  display flex
  justify-content space-between
  align-items center
  height $headerHeight
  background-color $bgColor
  color #ffffff
  &-left
    width .64rem
    .back-icon
      text-align center
      font-size 0.4rem
  &-input
    flex 1
    height .64rem
    line-height .64rem
    background-color #fff
    color #ccc
    padding-left .2rem
  &-right
    min-width 1.04rem
    padding 0 0.1rem
    text-align center
    color #fff
    .arrow-down-icon
      font-size .24rem
</style>
