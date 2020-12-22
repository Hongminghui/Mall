<template>
  <div class="about">
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul
        class="list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled">
        <li v-for="i in count" class="list-item">{{ i }}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 10,
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.count >= 100
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      console.log('load');
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style>
.infinite-list-wrapper {
  height: 100px;
  overflow: scroll;
}
</style>
