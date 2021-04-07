<template>
  <div>
    <banner bg="https://image.fendy5.cn/s/JX91PlaYBu2HLjkh.png" :title="bannerTitle" />
    <!--    cp榜单-->
    <div class="fd-container">
      <tab title="CP排行榜" :tabs="cpRank">
        567
      </tab>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Tab from '@/components/Tab'
export default {
  components: {
    Tab,
    Banner
  },
  data () {
    return {
      cpRank: ['热门CP', 'CP广场'],
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
