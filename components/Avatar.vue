<template>
  <NuxtLink :to="`/user?id=${id}`" class="fx-center">
    <img class="rounded-full w-8 h-8 mr-2" :src="avatar" alt="">
    <div class="mx-2">{{ nickname }}</div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null
    },
    nickname: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
