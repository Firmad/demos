<template>
  <div>
    <div class="banner" @click="bannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-num">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <fade>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="closeGallary"
      />
    </fade>
  </div>
</template>
<script>
import commonGallary from '@/common/gallary'
import fade from '@/common/fade'
export default {
  name: 'detailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    commonGallary,
    fade
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    bannerClick () {
      console.log(this.gallaryImgs instanceof Array)
      this.showGallary = true
    },
    closeGallary () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-num
      height .32rem
      line-height .32rem
      margin-top .14rem
      padding 0 .4rem
      border-radius .2rem
      background-color rgba(0,0,0,.8)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>
