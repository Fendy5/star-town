<template>
  <div>
    <div class="bg-banner h-64 w-full flex justify-center items-center">
      <input class="search rounded-full px-7  focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="迪迦和哥尔赞合集" type="text">
      <svg-icon icon-class="search" class="search-icon relative right-12 cursor-pointer" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.bg-banner {
  background: url('https://image.fendy5.cn/s/ObrG13kHn8RBIFjd.png') 50% 50%;
  .search {
    width: 687px;
    height: 52px;
  }
  .search-icon {
    width: 24px;
    height: 20px;
  }
}
</style>
