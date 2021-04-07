<template>
  <div :style="{background:`url(${bg}) no-repeat 50% 50%`}" class="bg-banner">
    <div class="h-80 w-full flex justify-center items-center relative">
      <!--    标题-->
      <div class="relative title text-3xl">
        <p>{{ title.en }}</p>
        <p>{{ title.zh }}</p>
      </div>
      <input class="search rounded-full px-7  focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="迪迦和哥尔赞合集" type="text">
      <svg-icon icon-class="search" class="search-icon relative right-12 cursor-pointer" />
    </div>
  </div>
</template>

<script lang="ts">
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
    return {}
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
