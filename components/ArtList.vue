<template>
  <div class="grid grid-cols-4 pb-6">
    <div v-for="i in artList" :key="i.id" class="art">
      <div :style="{'background':`url(${i.bg})`}" class="cover rounded-2xl px-4 pt-4">
        <div class="flex justify-between">
          <div class="flex items-center">
            <img class="rounded-full w-8 h-8" :src="i.avatar" alt="">
            <span class="text-white pl-2">{{ i.nickname }}</span>
          </div>
          <fd-button>关注</fd-button>
        </div>
      </div>
      <!--   卡片尾部-->
      <div class="flex justify-between pt-2 px-2">
        <!--   评论、喜欢-->
        <div class="flex">
          <!--   喜欢-->
          <div class="flex items-center pr-2 cursor-pointer">
            <svg-icon icon-class="like" class="w-4 h-4 mr-1" />
            <div class="">100+</div>
          </div>
          <!--  评论-->
          <div class="flex items-center cursor-pointer">
            <svg-icon icon-class="comment" class="w-4 h-4 mr-1" />
            <div class="">100+</div>
          </div>
        </div>
        <!--   时间-->
        <div class="text-secondary pr-4">21-03-16 22:23</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artList: {
      type: Array,
      default: () => [
        {
          id: 1,
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          bg: 'https://image.fendy5.cn/s/7UniAOwgZLMdY0kj.png'
        }
      ]
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.art {
}
.cover {
  width: 274px;
  height: 234px;
}
</style>
