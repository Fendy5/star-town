<template>
  <div>
    <banner bg="https://image.fendy5.cn/s/JX91PlaYBu2HLjkh.png" :title="bannerTitle" />
    <!--    cp榜单-->
    <div class="fd-container">
      <div class="mt-6">
        <tab title="CP排行榜" :tabs="cpRank">
          <c-p-list :cp-list="cpList" />
        </tab>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Tab from '@/components/Tab'
import CPList from '@/components/CPList'
export default {
  components: {
    Tab,
    CPList,
    Banner
  },
  data () {
    return {
      cpList: [
        {
          id: 1,
          fans: 100,
          bg: 'https://image.fendy5.cn/s/S6lUbNvWzqmitfQ7.png'
        }
      ],
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
