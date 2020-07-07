<template>
  <div>
    <div class="search">
      <input v-model="keyWord" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-list" ref="search" v-show="keyWord">
      <ul>
        <li v-for="item of list" :key="item.id" class="search-item border-bottom" @click="cityClick(item.name)">
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="noData">没有相关数据！</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'citySearch',
  props: {
    cityList: Object,
  },
  data() {
    return {
      keyWord: '',
      list: [],
      timer: null,
    }
  },
  methods: {
    cityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']),
  },
  computed: {
    noData() {
      return !this.list.length
    },
  },
  watch: {
    keyWord() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.tiemr = setTimeout(() => {
        const res = []
        for (let i in this.cityList) {
          this.cityList[i].forEach(val => {
            if (val.spell.indexOf(this.keyWord) > -1 || val.name.indexOf(this.keyWord) > -1) {
              res.push(val)
            }
          })
        }
        this.list = res
      }, 100)
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search, {
      click: true,
    })
  },
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles'
.search
  width 100%
  height .72rem
  padding 0 .1rem
  background-color $bgColor
  .search-input
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    padding 0 .1rem
    border-radius 0.1rem
    color #333
.search-list
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  z-index 1
  background-color #fff
  .search-item
    line-height .62rem
    padding-left .2rem
    color #666
    background-color #fff
</style>
