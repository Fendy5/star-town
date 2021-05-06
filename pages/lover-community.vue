<template>
  <div>
    <banner bg="https://image.fendy5.cn/s/JX91PlaYBu2HLjkh.png" :title="bannerTitle" @search="handleSearch" />
    <!--    cp榜单-->
    <div class="fd-container">
      <div class="mt-6">
        <div class="text-3xl">
          CP排行榜
          <span v-if="count || count===0" class="text-base text-secondary ml-8">共{{ count }}条数据</span>
        </div>
        <svg-icon v-if="loading" icon-class="loading" class="mx-auto" />
        <svg-icon v-else-if="count===0" class="mx-auto my-8" icon-class="empty" />
        <c-p-list v-else :cp-list="cpList" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import CPList from '@/components/CPList'
import { getCirclesApi } from '@/api/circle'
export default {
  components: {
    CPList,
    Banner
  },
  data () {
    return {
      count: null,
      loading: true,
      cpList: [],
      keywords: null,
      bannerTitle: {
        zh: '情侣社区',
        en: 'Lovers community'
      }
    }
  },
  created () {
    this.getCircles()
  },
  methods: {
    handleSearch (value) {
      this.keywords = value
      this.getCircles()
    },
    getCircles () {
      getCirclesApi({ keywords: this.keywords }).then(val => {
        this.cpList = val.data.circles
        this.count = val.data.count
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
