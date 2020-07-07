<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="letterClick"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'cityAlphabet',
  props: {
    cityList: Object
  },
  data () {
    return {
      isTouch: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
    // console.log(this.startY)
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cityList) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    letterClick (e) {
      this.$emit('letter', e.target.innerText)
    },
    touchStart () {
      this.isTouch = true
    },
    touchMove (e) {
      if (this.isTouch) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(this.startY)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('letter', this.letters[index])
          }
        }, 10)
      }
    },
    touchEnd () {
      this.isTouch = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  .item
    height .4rem
    line-height .4rem
    text-align center
    color $bgColor
</style>
