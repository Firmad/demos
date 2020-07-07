<template>
  <div>
    <div class="title">周末去哪</div>
    <ul class="list">
      <li
        class="item border-bottom"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'homeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/mixins'
.title
  margin-top .2rem
  height .8rem
  line-height .8rem
  text-indent .2rem
  background-color #eeeeee
.list
  width 100%
  .item
    padding 0.2rem
    .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 34%
      .item-img
        width 100%
    .item-info
      .item-title
        width 100%
        font-size 0.32rem
        height 0.48rem
        line-height 0.48rem
        ellipsis()
      .item-desc
        font-size 0.28rem
        width 100%
        height 0.48rem
        line-height 0.48rem
        color #ccc
        ellipsis()
</style>
