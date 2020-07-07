<template>
  <div>
    <city-header />
    <city-search :cityList="cityList" />
    <city-list :hotCities="hotCities" :cityList="cityList" :letter="letter" />
    <city-alphabet :cityList="cityList" @letter="changeLetter" />
  </div>
</template>
<script>
import cityHeader from './components/header'
import citySearch from './components/search'
import cityList from './components/list'
import cityAlphabet from './components/alphabet'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cityList: {},
      letter: ''
    }
  },
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  methods: {
    getCityInfo () {
      axios
        .get('/api/city.json')
        .then(res => {
          const data = res.data
          if (data.ret) {
            this.hotCities = data.data.hotCities
            this.cityList = data.data.cities
          } else {
            throw new Error('获取失败')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeLetter (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped></style>
