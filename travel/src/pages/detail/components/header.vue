<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-back-icon">&#xe624;</span>
    </router-link>
    <router-link
      tag="div"
      to="/"
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <span class="iconfont header-fixed-back-icon">&#xe624;</span>
      景点详情
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  components: {},
  methods: {
    scrollShow () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      // console.log(top)
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollShow)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollShow)
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles'
.header-abs
  position absolute
  top 0.2rem
  left .2rem
  width .8rem
  height .8rem
  line-height .8rem
  text-align center
  border-radius .4rem
  background-color rgba(0,0,0,.6)
  .header-abs-back-icon
    color #fff
    font-size .4rem
.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size .32rem
  color #fff
  background-color $bgColor
  .header-fixed-back-icon
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    color #fff
    font-size .4rem
</style>
