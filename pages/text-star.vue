<template>
  <div>
    <div class="banner flex justify-center text-white items-center">
      <div class="text-center">
        <p class="text-3xl">Word planet</p>
        <p class="text-xl">文字星球</p>
      </div>
    </div>
    <div class="fd-container relative -top-12 bg-white rounded-2xl">
      <!--      按热度、时间排序的按钮-->
      <div class="flex justify-end pt-6 pr-6">
        <div class="flex">
          <fd-button plain>
            <span>按热度</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
          <fd-button class="pl-2" plain>
            <span>按时间</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
        </div>
      </div>
      <tab>
        <text-list :text-list="textList" />
      </tab>
    </div>
  </div>
</template>

<script>
import FdButton from '@/components/FdButton'
import TextList from '@/components/TextList'
import Tab from '@/components/Tab'
export default {
  components: {
    Tab,
    TextList,
    FdButton
  },
  data () {
    return {
      textList: [
        {
          id: 1,
          nickname: '昵称',
          title: '主题',
          likes: 12,
          comments: 34,
          desc: '这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段...',
          create_time: '今天 · 13:40'
        },
        {
          id: 2,
          nickname: '昵称',
          title: '主题',
          likes: 12,
          comments: 34,
          desc: '这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段...',
          create_time: '今天 · 13:40'
        },
        {
          id: 3,
          nickname: '昵称',
          title: '主题',
          likes: 12,
          comments: 34,
          desc: '这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段文字这是一段...',
          create_time: '今天 · 13:40'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 320px;
  background: url("https://image.fendy5.cn/s/lXo8HtTQ2dnOuBkh.png");
}
</style>
