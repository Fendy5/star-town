<template>
  <div>
    <banner :title="bannerTitle" bg="https://image.fendy5.cn/s/ObrG13kHn8RBIFjd.png" />
    <div class="fd-container">
      <!--      文字星球-->
      <div class="tab-panel">
        <tab title="文字星球" @changeTab="changeTextTab">
          <svg-icon v-if="loading.text" class="mx-auto" icon-class="loading" />
          <div v-else>
            <div v-if="textList.length">
              <text-list :text-list="textList" @changeFollow="follow" />
              <div class="text-center">
                <fd-button plain size="medium">
                  <NuxtLink to="/text-star">更多</NuxtLink>
                </fd-button>
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
        <tab :tabs="artTabs" title="艺术星球" @changeTab="changeArtTab">
          <svg-icon v-if="loading.art" class="mx-auto" icon-class="loading" />
          <div v-else>
            <div v-if="artList.length">
              <art-list :art-list="artList" @changeFollow="follow" />
              <div class="text-center">
                <fd-button plain size="medium">
                  <NuxtLink to="/art-star">更多</NuxtLink>
                </fd-button>
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
    follow () {
      this.initPage()
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
      this.getArtList(val + 3)
    },
    changeTextTab (val) {
      this.loading.text = true
      this.getTextList(val)
    },
    getArtList (type) {
      getWorksApi({ type, cc_id: this.ccId, ...this.page }).then(value => {
        this.artList = value.data.works
        this.loading.art = false
      })
    },
    getTextList (type) {
      getWorksApi({ type, cc_id: this.ccId, ...this.page }).then(value => {
        this.textList = value.data.works
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
