<template>
  <!--        文字星球列表-->
  <div class="divide-y divide-fuchsia-300">
    <div v-for="i in textList" :key="i.id" class="py-6">
      <div class="mb-4 flex justify-between">
        <div class="flex w-210 items-center justify-between">
          <div class="fx-center">
            <img class="rounded-full w-8 h-8 mr-2" :src=" i.user.avatar" alt="">
            <div class="mx-2">{{ i.user.nickname }}</div>
          </div>
          <fd-button size="small" @click="follow">关注</fd-button>
        </div>
        <div class="text-secondary">{{ i.create_time }}</div>
      </div>
      <div class="flex">
        <img src="https://image.fendy5.cn/s/0Spf8H63eqwZOOFg.png" alt="">
        <div class="pl-8 w-full flex flex-col justify-between">
          <div>
            <router-link :to="`/work/${i.id}`" class="text-xl font-medium pb-4">{{ i.title }}</router-link>
            <p>{{ i.desc }}</p>
          </div>
          <div class="flex justify-end">
            <!--   喜欢-->
            <div class="flex items-center pr-2 cursor-pointer">
              <svg-icon icon-class="like" class="w-4 h-4 mr-1" />
              <div class="">{{ i.likes }}</div>
            </div>
            <!--  评论-->
            <div class="flex items-center cursor-pointer">
              <svg-icon icon-class="comment" class="w-4 h-4 mr-1" />
              <div class="">{{ i.comments }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {
    follow () {
      console.log(1233)
    }
  }
}
</script>

<style lang="scss" scoped>
.w-210 {
  width: 210px;
}
</style>
