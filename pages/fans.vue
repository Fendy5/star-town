<template>
  <div>
    <banner :title="bannerTitle" bg="https://image.fendy5.cn/s/ObrG13kHn8RBIFjd.png" />
    <div class="fd-container">
      <!--      文字星球-->
      <div class="tab-panel">
        <tab title="文字星球">
          <text-list :text-list="textList" />
          <div class="text-center">
            <fd-button plain size="medium">更多</fd-button>
          </div>
        </tab>
      </div>
      <!--      艺术星球-->
      <div class="tab-panel">
        <tab :tabs="artTabs" title="艺术星球">
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
      artList: [
        {
          id: 1,
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          bg: 'https://image.fendy5.cn/s/7UniAOwgZLMdY0kj.png'
        },
        {
          id: 2,
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          bg: 'https://image.fendy5.cn/s/7UniAOwgZLMdY0kj.png'
        },
        {
          id: 3,
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          bg: 'https://image.fendy5.cn/s/7UniAOwgZLMdY0kj.png'
        },
        {
          id: 4,
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          bg: 'https://image.fendy5.cn/s/7UniAOwgZLMdY0kj.png'
        }
      ],
      artTabs: ['漫画', '写真', '手绘'],
      textList: [
        {
          id: 1,
          nickname: '昵称',
          title: '主题',
          desc: '这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段...',
          create_time: '今天 · 13:40'
        },
        {
          id: 2,
          nickname: '昵称',
          title: '主题',
          desc: '这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段...',
          create_time: '今天 · 13:40'
        },
        {
          id: 3,
          nickname: '昵称',
          title: '主题',
          desc: '这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段...',
          create_time: '今天 · 13:40'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.tab-panel {
  @apply p-6 bg-white rounded-2xl relative bottom-6 mb-5
}
</style>
