<template>
  <div>
    <banner bg="https://image.fendy5.cn/s/JX91PlaYBu2HLjkh.png" :title="bannerTitle" />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
  components: {
    Banner
  },
  data () {
    return {
      bannerTitle: {
        zh: '情侣社区',
        en: 'Lovers community'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
