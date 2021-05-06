<template>
  <div>
    <div class="flex justify-between">
      <div class="text-3xl">
        {{ title }}
        <span v-if="count || count===0" class="text-secondary text-base ml-8">共{{ count }}条结果</span>
      </div>
      <fd-button v-if="showHot" plain>
        <span>按热度</span>
        <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
      </fd-button>
    </div>
    <div class="text-2xl w-1/2 flex justify-around mx-auto mb-7">
      <div v-for="(i,index) in tabs" :key="index" :class="{'tab-active':activeIndex===index}" class="cursor-pointer" @click="changeTab(index)">{{ i }}</div>
    </div>
    <slot />
  </div>
</template>

<script>
import FdButton from '~/components/FdButton'
export default {
  components: {
    FdButton
  },
  props: {
    count: {
      type: Number,
      default: null
    },
    showHot: {
      type: Boolean,
      default: false
    },
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
      this.$emit('changeTab', index + 1)
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
