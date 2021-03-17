<template>
  <footer>
    <!--    网站相关、传送门-->
    <div class="fd-container grid grid-cols-4">
      <!--      网站相关-->
      <div>
        <h3 class="text-3xl">网站相关</h3>
      </div>
      <!--      传送门-->
      <div>footer2</div>
      <!--      星球镇logo-->
      <div class="col-span-2">
        <svg-icon class="w-24 h-12 cursor-pointer" icon-class="logo" />
      </div>
    </div>
    <!--    联系方式、版权-->
    <div class="flex justify-around">
      <p>联系我们：0754-81231234</p>
      <p>Copyright ©2021 Star Town All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
footer {
  height: 460px;
}
</style>
