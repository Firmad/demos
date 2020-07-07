<template>
  <div class="category">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) in category" :key="index">
        <div class="categroy-item-wrapper" v-for="item in page" :key="item.id">
          <div class="category-item">
            <img class="item-img" :src="item.imgUrl" />
            <p class="item-desc">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeCategory',
  props: {
    categoryList: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: 0
      }
    }
  },
  computed: {
    category () {
      const pages = []
      this.categoryList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/mixins';
@import '~style/varibles';

.category {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

  .categroy-item-wrapper{
    float left
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .category-item {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .item-img {
        width: 1.2rem;
        margin-top: 0.1rem;
      }

      .item-desc {
        flex: 1;
        padding-bottom: 0.44rem;
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        color: $darkTextColor;
        ellipsis();
      }
    }
  }
}
</style>
