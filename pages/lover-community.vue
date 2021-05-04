<template>
  <div>
    <banner bg="https://image.fendy5.cn/s/JX91PlaYBu2HLjkh.png" :title="bannerTitle" />
    <!--    cp榜单-->
    <div class="fd-container">
      <div class="mt-6">
        <div class="text-3xl">CP排行榜</div>
        <svg-icon v-if="loading" icon-class="loading" class="mx-auto" />
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
      loading: true,
      cpList: [],
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
    getCircles () {
      getCirclesApi().then(val => {
        this.cpList = val.data.circles
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
