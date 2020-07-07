<template>
  <me-navbar>
    <i
      class="iconfont icon-back"
      slot="left"
      @click="goBack"
    ></i>
    <me-search-box
      placeholder="输入搜索哦~"
      slot="center"
      @query="query"
    />
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearchBox from 'base/search-box';

  export default {
    name: 'SearchHeader',
    components: {
      MeSearchBox,
      MeNavbar
    },
    methods: {
      query(query) {
        this.$emit('query', query);
      },
      goBack() {
        this.$router.back();
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
