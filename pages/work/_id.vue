<template>
  <div class="bg-white">
    <div class="pt-32">
      <div class="fd-container">
        <!--        头像昵称标题-->
        <div class="text-center relative">
          <!--          头像昵称-->
          <div class="absolute left-0 flex">
            <div class="fx-items-center ml-4 mr-4">
              <img class="w-7 h-7 rounded-full" :src="work.avatar" alt="">
              <div class="pl-2">{{ work.nickname }}</div>
            </div>
            <fd-button size="small">关注</fd-button>
          </div>
          <!--          标题-->
          <h3 class="text-2xl font-medium">{{ work.title }}</h3>
          <div class="pt-4 text-secondary">{{ work.create_time }}</div>
        </div>
        <div class="pt-20" v-html="work.content" />
        <div class="py-8">
          <div class="float-right flex">
            <!--   喜欢-->
            <div class="flex items-center pr-2 cursor-pointer">
              <svg-icon icon-class="like" class="w-4 h-4 mr-1" />
              <div class="">500</div>
            </div>
            <!--  评论-->
            <div class="flex items-center cursor-pointer">
              <svg-icon icon-class="comment" class="w-4 h-4 mr-1" />
              <div class="">300</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWorkApi } from '@/api/work'

export default {
  data () {
    return {
      work: {}
    }
  },
  mounted () {
    getWorkApi(this.$route.params.id).then(value => {
      this.work = value.data.work
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
