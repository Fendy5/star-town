<template>
  <div>
    <div class="banner flex justify-center text-white items-center">
      <div class="text-center">
        <p class="text-3xl">Art planet</p>
        <p class="text-xl">艺术星球</p>
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
      <tab :tabs="artTabs">
        <art-list :art-list="artList" />
      </tab>
    </div>
  </div>
</template>

<script>
import ArtList from '@/components/ArtList'
export default {
  components: {
    ArtList
  },
  data () {
    return {
      artTabs: ['漫画', '写真', '手绘'],
      artList: []
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
