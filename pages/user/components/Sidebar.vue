<template>
  <div class="sidebar bg-white rounded">
    <div v-if="!userId" class="text-xl text-center pt-6 pb-5">我的星球足迹</div>
    <div v-else class="text-xl text-center pt-6 pb-5">Ta的星球足迹</div>
    <div :class="{'bg-primary':tab===0}" class="py-5 pl-6 pr-7 cursor-pointer fx-between" @click="changeTab(0)">
      <div class="flex items-center justify-between">
        <svg-icon class="w-3 h-4 mr-3" icon-class="folder" />
        <span v-if="!userId">我点赞的</span>
        <span v-else>Ta点赞的</span>
      </div>
      <div class="">{{ count.likes }}</div>
    </div>
    <div :class="{'bg-primary':tab===1}" class="py-5 pl-6 pr-7 cursor-pointer fx-between" @click="changeTab(1)">
      <div class="flex items-center justify-between">
        <svg-icon class="w-3 h-4 mr-3" icon-class="folder" />
        <span v-if="!userId">我评论的</span>
        <span v-else>Ta评论的</span>
      </div>
      <div class="">{{ count.comments }}</div>
    </div>
    <div :class="{'bg-primary':tab===2}" class="py-5 pl-6 pr-7 cursor-pointer fx-between" @click="changeTab(2)">
      <div class="flex items-center justify-between">
        <svg-icon class="w-3 h-4 mr-3" icon-class="folder" />
        <span v-if="!userId">我创作的</span>
        <span v-else>Ta创作的</span>
      </div>
      <div class="">{{ count.create }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Object,
      default: () => {
        return {
          likes: 0,
          comments: 0,
          create: 0
        }
      }
    }
  },
  data () {
    return {
      userId: this.$route.query.id,
      tab: 0
    }
  },
  methods: {
    changeTab (index) {
      this.tab = index
      this.$emit('changeTab', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 273px;
  height: 274px;
}
</style>
