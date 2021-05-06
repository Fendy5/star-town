<template>
  <div :style="{background:`url(${bg}) no-repeat 50% 50%`}" class="bg-banner w-full min-w-1280">
    <div class="h-80 flex justify-center items-center relative">
      <!--    标题-->
      <div class="relative title text-3xl">
        <p>{{ title.en }}</p>
        <p>{{ title.zh }}</p>
      </div>
      <input v-model="keywords" class="search rounded-full px-7  focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="赵丽颖和黄晓明" type="text">
      <svg-icon icon-class="search" class="search-icon relative right-12 cursor-pointer" @click="search" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Object,
      default: () => {}
    },
    bg: {
      type: String,
      default: 'https://image.fendy5.cn/s/JX91PlaYBu2HLjkh.png'
    }
  },
  data () {
    return {
      keywords: null
    }
  },
  methods: {
    search () {
      this.$emit('search', this.keywords)
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-banner {
  .search {
    width: 687px;
    height: 52px;
  }
  .search-icon {
    width: 24px;
    height: 20px;
  }
  .title {
    right: 200px;
  }
}
</style>
