<template>
  <div>
    <div class="title">热销推荐</div>
    <ul class="list">
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
        :to="/detail/ + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-btn">查看详情&gt;</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'homeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {}
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
    display flex
    padding 0.2rem
    .item-img
      width 1.5rem
      margin-right 0.2rem
    .item-info
      flex 1
      min-width 0
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
      .item-btn
        background-color transparent
        color #cccccc
        font-size 0.26rem
</style>
