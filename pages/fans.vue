<template>
  <div>
    <banner :title="bannerTitle" bg="https://image.fendy5.cn/s/ObrG13kHn8RBIFjd.png" />
    <div class="fd-container">
      <!--      文字星球-->
      <div class="tab-panel">
        <tab title="文字星球" @changeTab="changeTextTab">
          <text-list :text-list="textList" />
          <div class="text-center">
            <fd-button plain size="medium">更多</fd-button>
          </div>
        </tab>
      </div>
      <!--      艺术星球-->
      <div class="tab-panel">
        <tab :tabs="artTabs" title="艺术星球" @changeTab="changeArtTab">
          <art-list :art-list="artList" />
          <div class="text-center">
            <fd-button plain size="medium">更多</fd-button>
          </div>
        </tab>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import tab from '@/components/Tab'
import textList from '@/components/TextList'
import ArtList from '@/components/ArtList'
import fdButton from '@/components/FdButton'
import { getWorksApi } from '@/api/fans'

export default {
  components: {
    tab,
    Banner,
    ArtList,
    fdButton,
    textList
  },
  data () {
    return {
      bannerTitle: {
        en: 'Fans community',
        zh: '粉丝社区'
      },
      artList: [],
      artTabs: ['漫画', '写真', '手绘'],
      textList: []
    }
  },
  mounted () {
    this.getTextList(1)
    this.getArtList(4)
  },
  methods: {
    changeArtTab (val) {
      this.getArtList(val + 3)
    },
    changeTextTab (val) {
      this.getTextList(val)
    },
    getArtList (type) {
      getWorksApi({ type }).then(value => {
        this.artList = value.data.works
      })
    },
    getTextList (type) {
      getWorksApi({ type }).then(value => {
        this.textList = value.data.works
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.tab-panel {
  @apply p-6 bg-white rounded-2xl relative bottom-6 mb-5
}
</style>
