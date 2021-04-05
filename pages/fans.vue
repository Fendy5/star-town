<template>
  <div>
    <div class="bg-banner h-64 w-full flex justify-center items-center">
      <input class="search rounded-full px-7  focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="迪迦和哥尔赞合集" type="text">
      <svg-icon icon-class="search" class="search-icon relative right-12 cursor-pointer" />
    </div>
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
import tab from '@/components/Tab'
import textList from '@/components/TextList'
import ArtList from '@/components/ArtList'
import fdButton from '@/components/FdButton'

export default {
  components: {
    tab,
    ArtList,
    fdButton,
    textList
  },
  data () {
    return {
      artList: [
        {
          id: 1,
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
.bg-banner {
  background: url('https://image.fendy5.cn/s/ObrG13kHn8RBIFjd.png') 50% 50%;
  .search {
    width: 687px;
    height: 52px;
  }
  .search-icon {
    width: 24px;
    height: 20px;
  }
}
.tab-panel {
  @apply p-6 bg-white rounded-2xl relative bottom-6 mb-5
}
</style>
