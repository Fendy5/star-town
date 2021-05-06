<template>
  <div>
    <banner :title="bannerTitle" bg="https://image.fendy5.cn/s/ObrG13kHn8RBIFjd.png" @search="handleSearch" />
    <div class="fd-container">
      <!--      文字星球-->
      <div class="tab-panel">
        <tab title="文字星球" :count="text_count" @changeTab="changeTextTab">
          <svg-icon v-if="loading.text" class="mx-auto" icon-class="loading" />
          <div v-else>
            <div v-if="textList.length">
              <text-list :text-list="textList" @changeFollow="follow" />
              <div class="text-center">
                <fd-button plain size="medium" @click="goTextStar">更多</fd-button>
              </div>
            </div>
            <div v-else>
              <svg-icon class="text-primary mx-auto" icon-class="empty" />
              <p class="text-center text-2xl">空空如也</p>
            </div>
          </div>
        </tab>
      </div>
      <!--      艺术星球-->
      <div class="tab-panel">
        <tab :count="art_count" :tabs="artTabs" title="艺术星球" @changeTab="changeArtTab">
          <svg-icon v-if="loading.art" class="mx-auto" icon-class="loading" />
          <div v-else>
            <div v-if="artList.length">
              <art-list :art-list="artList" @changeFollow="follow" />
              <div class="text-center">
                <fd-button plain size="medium" @click="goArtStar">更多</fd-button>
              </div>
            </div>
            <div v-else>
              <svg-icon class="text-primary mx-auto" icon-class="empty" />
              <p class="text-center text-2xl">空空如也</p>
            </div>
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
import { getCircleApi } from '@/api/circle'

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
      text_count: null,
      art_count: null,
      tabIndex: {
        text: 1,
        art: 1
      },
      loading: {
        text: true,
        art: true
      },
      circle: {},
      bannerTitle: {
        en: 'Fans community',
        zh: '粉丝社区'
      },
      ccId: null,
      artList: [],
      keywords: null,
      page: {
        pageNo: 1,
        pageSize: 6
      },
      artTabs: ['漫画', '写真', '手绘'],
      textList: []
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
    handleSearch (value) {
      this.keywords = value
      this.loading.art = true
      this.loading.text = true
      this.initPage()
    },
    goArtStar () {
      this.$router.push('art-star')
    },
    goTextStar () {
      this.$router.push('text-star')
    },
    follow () {
      this.getTextList(this.tabIndex.text)
      this.getArtList(this.tabIndex.art)
    },
    initPage () {
      this.ccId = this.$route.query.cc_id
      if (this.ccId) {
        getCircleApi(this.ccId).then(val => {
          this.bannerTitle.zh = val.data.circle.name + '的粉丝社区'
          this.circle = val.data.circle
        })
      }
      this.getTextList(1)
      this.getArtList(4)
    },
    changeArtTab (val) {
      this.loading.art = true
      this.tabIndex.art = val + 3
      this.getArtList(val + 3)
    },
    changeTextTab (val) {
      this.loading.text = true
      this.tabIndex.text = val
      this.getTextList(val)
    },
    getArtList (type) {
      getWorksApi({ type, cc_id: this.ccId, ...this.page, keywords: this.keywords }).then(value => {
        this.artList = value.data.works
        this.art_count = value.data.art_count
        this.loading.art = false
      })
    },
    getTextList (type) {
      getWorksApi({ type, cc_id: this.ccId, ...this.page, keywords: this.keywords }).then(value => {
        this.textList = value.data.works
        this.text_count = value.data.text_count
        this.loading.text = false
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
