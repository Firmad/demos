<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="cityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(val, key) of cityList" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list">
          <li
            class="item border-bottom"
            v-for="item of val"
            :key="item.id"
            @click="cityClick(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    hotCities: Array,
    cityList: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    cityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const elem = this.$refs[this.letter][0]
        // console.log(this)
        this.scroll.scrollToElement(elem)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles';
.border-bottom
  &:before
    border-color #ccc
.list
  width 100%
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    height .54rem
    line-height .54rem
    background-color #eeeeee
    padding-left .2rem
    font-size .26rem
    color #666
  .button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .1rem
        padding 0.1rem 0
        border 0.02rem solid $bgColor
        border-radius .1rem
        text-align center
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
      font-size 0.32rem
</style>
