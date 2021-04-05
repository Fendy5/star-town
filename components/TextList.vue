<template>
  <!--        文字星球列表-->
  <div class="divide-y divide-fuchsia-300">
    <div v-for="i in textList" :key="i.id" class="py-6">
      <div class="mb-4 flex justify-between">
        <div class="flex items-center">
          <img class="rounded-full w-8 h-8 mr-2" src="https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png" alt="">
          <div class="mx-2">{{ i.nickname }}</div>
          <fd-button size="small" @click="follow">关注</fd-button>
        </div>
        <div class="text-secondary">{{ i.create_time }}</div>
      </div>
      <div class="flex">
        <img src="https://image.fendy5.cn/s/0Spf8H63eqwZOOFg.png" alt="">
        <div class="pl-8">
          <div class="text-xl font-medium pb-4">{{ i.title }}</div>
          <p>{{ i.desc }}</p>
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
      default: () => [
        {
          id: 1,
          nickname: '',
          title: '',
          create_time: '',
          desc: ''
        }]
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

</style>
