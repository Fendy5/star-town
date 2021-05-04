<template>
  <div>
    <div v-for="i in commentList" :key="i.id" class="bg py-4 px-5 rounded mb-4">
      <div class="divide-y divide-gray-300">
        <!--    卡片头部-->
        <div class="fx-content-between">
          <div class="fx-items-center py-4">
            <div class="text-sm">{{ i.work?workType.get(i.work.type):'--' }}</div>
            <div class="text-lg pl-8">{{ i.work?i.work.title:'--' }}</div>
          </div>
          <!--   评论、喜欢-->
          <div class="flex">
            <!--   喜欢-->
            <div class="flex items-center pr-2 cursor-pointer">
              <svg-icon icon-class="like" class="w-4 h-4 mr-1" />
              <div class="">{{ i.likes_count }}</div>
            </div>
            <!--  评论-->
            <div class="flex items-center cursor-pointer">
              <svg-icon icon-class="comment" class="w-4 h-4 mr-1" />
              <div class="">{{ i.comments_count }}</div>
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
      <div class="text-secondary text-center">
        <NuxtLink :to="`/work/${i.work?i.work.work_id:''}`">查看完整回复...</NuxtLink>
      </div>
    </div>
    <div v-if="!commentList.length">
      <svg-icon class="text-primary mx-auto" icon-class="empty" />
      <p class="text-center text-2xl">空空如也</p>
    </div>
  </div>
</template>

<script>
import { workTypeMixin } from '@/mixins'

export default {
  mixins: [workTypeMixin],
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
