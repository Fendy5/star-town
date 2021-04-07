<template>
  <div class="cp-list">
    <div v-for="i in cpList" :key="i.id">
      <div :style="{background:`url(${i.bg}) no-repeat 50% 50%`}" class="cover" />
      <div class="pt-3 pb-4 flex justify-between px-4 bg-white">
        <div class="">
          <div class="flex items-center">
            <div class="flex pr-2">
              <img class="w-6 h-6 rounded-full" src="https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png" alt="">
              <img class="w-6 h-6 rounded-full" src="https://image.fendy5.cn/s/A4G7hReJwFcxirEs.png" alt="">
            </div>
            <span>鹿晗&关晓彤</span>
          </div>
          <p>100w+个粉丝</p>
        </div>
        <fd-button>加入</fd-button>
      </div>
    </div>
  </div>
</template>

<script>
import FdButton from '@/components/FdButton'
export default {
  components: {
    FdButton
  },
  props: {
    cpList: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.cp-list {
  width: 274px;
  .cover {
    width: 100%;
    height: 200px;
  }
}
</style>
