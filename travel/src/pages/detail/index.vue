<template>
  <div>
    <detail-banner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"
     />
    <detail-header />
    <div class="content">
      <detail-list :list="list" />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        const data = res.data
        if (data.ret === true) {
          this.sightName = data.data.sightName
          this.bannerImg = data.data.bannerImg
          this.gallaryImgs = data.data.gallaryImgs
          this.list = data.data.categoryList
        }
        // console.log(this.gallaryImgs)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
.content
  height 50rem
</style>
