<template>
  <header class="h-12 fixed w-full shadow-md bg-white z-10">
    <div class="h-full fd-container relative">
      <!--    logo-->
      <router-link class="float-left" to="/">
        <svg-icon class="w-24 h-12 cursor-pointer" icon-class="logo" />
      </router-link>
      <!--    导航栏-->
      <div class="flex items-center ab-center">
        <router-link to="fans" class="px-10">粉丝社区</router-link>
        <router-link to="cp" class="px-10">情侣社区</router-link>
        <router-link to="create" class="px-10">我要创作</router-link>
      </div>
      <!--    个人信息-->
      <div class="flex justify-between items-center float-right relative top-3">
        <router-link to="my">
          <svg-icon class="w-6 h-6" icon-class="avatar" />
        </router-link>
        <div class="flex pl-4 items-center">
          <router-link class="px-2 text-sm" to="login">登录</router-link>
          <div class="fd-w-2 h-3 bg-gray-600" />
          <router-link class="px-2 text-sm" to="register">注册</router-link>
        </div>
      </div>
    </div>
  </header>
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
