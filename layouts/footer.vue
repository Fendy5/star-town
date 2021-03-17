<template>
  <footer>
    <!--    网站相关、传送门-->
    <div class="fd-container grid grid-cols-4">
      <!--      网站相关-->
      <div>
        <h3 class="text-3xl">网站相关</h3>
        <div class="mt-11 inline-grid">
          <router-link class="mb-8 ml-8" to="about-us">关于我们</router-link>
          <router-link class="mb-8 ml-8" to="about-us">用户协议</router-link>
          <router-link class="mb-8 ml-8" to="about-us">隐私政策</router-link>
          <router-link class="mb-8 ml-8" to="about-us">合作洽谈</router-link>
        </div>
      </div>
      <!--      传送门-->
      <div>
        <h3 class="text-3xl">传送门</h3>
        <div class="flex mt-11">
          <div class="inline-grid ml-4">
            <router-link class="mb-8" to="about-us">视频星球</router-link>
            <router-link class="mb-8" to="about-us">文字星球</router-link>
            <router-link class="mb-8" to="about-us">艺术星球</router-link>
            <router-link class="mb-8" to="about-us">好物星球</router-link>
          </div>
          <div class="inline-grid pl-24">
            <router-link class="mb-8" to="about-us">粉丝社区</router-link>
            <router-link class="mb-8" to="about-us">情侣社区</router-link>
            <router-link class="mb-8" to="about-us">创作中心</router-link>
            <router-link class="mb-8" to="about-us">个人主页</router-link>
          </div>
        </div>
      </div>
      <!--      星球镇logo-->
      <div class="col-span-2 flex items-center justify-center">
        <svg-icon class="w-40 h-24 cursor-pointer" icon-class="logo" />
      </div>
    </div>
    <!--    联系方式、版权-->
    <div class="flex justify-around mb-8">
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

</style>
