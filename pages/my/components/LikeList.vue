<template>
  <div class="grid grid-cols-3 pb-6 gap-y-6">
    <div v-for="item in list" :key="item.id" class="rounded-xl item overflow-hidden">
      <div :style="{ 'background-image': 'url(' + item.cover + ')' }" class="img-bg bg-cover">
        <div class="flex justify-between pt-4">
          <div class="flex ml-4">
            <img class="w-7 h-7 rounded-full" :src="item.user.avatar" alt="">
            <div class="text-white pl-2">{{ item.user.nickname }}</div>
          </div>
          <button class="bg-primary text-white rounded-2xl w-16 h-8 mr-4 focus:outline-none">关注</button>
        </div>
      </div>
      <div class="px-4 pb-2 bg-white">
        <router-link :to="`/work/${item.id}`" class="py-2 h-30 inline-block text-black ellipsis-1">{{ item.title }}</router-link>
        <!--   文字文章-->
        <p class="text-secondary pb-2">{{ workType.get(item.type) }}</p>
        <!--   页眉-->
        <div class="flex justify-between">
          <!--   评论、喜欢-->
          <div class="flex">
            <!--   喜欢-->
            <div class="flex items-center pr-2 cursor-pointer" @click="like(item.id)">
              <svg-icon icon-class="like" class="w-4 h-4 mr-1" />
              <div class="">{{ item.likes }}</div>
            </div>
            <!--  评论-->
            <div class="flex items-center cursor-pointer">
              <svg-icon icon-class="comment" class="w-4 h-4 mr-1" />
              <div class="">{{ item.comments }}</div>
            </div>
          </div>
          <!--   时间-->
          <div class="text-secondary pr-4">{{ item.create_time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { workTypeMixin } from '@/mixins'

export default {
  name: 'LikeList',
  mixins: [workTypeMixin],
  props: {
    list: {
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
.cover {
  width: 265px;
  height: 194px;
}
</style>
