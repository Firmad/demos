<template>
  <div>
    <home-header/>
    <home-swiper :swiperList="swiperList"/>
    <home-category :categoryList="categoryList"/>
    <home-recommend :recommendList="recommendList"/>
    <home-weekend :weekendList="weekendList"/>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import homeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeCategory from './components/category'
import homeRecommend from './components/recommend'
import homeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      categoryList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    homeHeader,
    homeSwiper,
    homeCategory,
    homeRecommend,
    homeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(res => {
          const data = res.data
          // console.log(res)
          if (data.ret) {
            this.swiperList = data.data.swiperList
            this.categoryList = data.data.categoryList
            this.recommendList = data.data.recommendList
            this.weekendList = data.data.weekendList
            // console.log(this.city)
          } else {
            throw new Error('获取失败')
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
