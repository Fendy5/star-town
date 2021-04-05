<template>
  <div>
    <div class="text-3xl">{{ title }}</div>
    <div class="text-2xl w-1/2 flex justify-around mx-auto mb-7">
      <div v-for="(i,index) in tabs" :key="index" :class="{'tab-active':activeIndex===index}" class="cursor-pointer" @click="changeTab(index)">{{ i }}</div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    tabs: {
      type: Array,
      default: () => ['文章', '小说', '评说']
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    changeTab (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-active {
  color: #833AB4;
  @apply border-purple-500 border-b-2 pb-4
}
</style>
