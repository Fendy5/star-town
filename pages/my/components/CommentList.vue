<template>
  <div>
    <div v-for="i in commentList" :key="i.id" class="bg py-4 px-5 rounded mb-4">
      <div class="divide-y divide-gray-300">
        <!--    卡片头部-->
        <div class="fx-content-between">
          <div class="fx-items-center py-4">
            <div class="text-sm">文字-文章</div>
            <div class="text-lg pl-8">{{ i.title }}</div>
          </div>
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
        </div>
        <div class="grid comment-content py-6">
          <div class="fx-items-center">
            <img class="rounded-full w-8 h-8 mr-2" :src="i.avatar" alt="">
            <div class="mx-2">{{ i.nickname }}</div>
          </div>
          <div class="fx-items-center ellipsis"> {{ i.content }}</div>
          <div class="flex justify-end items-center text-secondary">{{ i.create_time }}</div>
        </div>
      </div>
      <div class="text-secondary text-center">查看完整回复...</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background: #F3F4F6;
}
.comment-content {
  grid-template-columns: 100px auto 150px;
}
</style>
