<template>
  <div>
    <div class="grid grid-cols-6">
      <div v-for="i in list" :key="i.id" class="justify-center">
        <img :src="i.avatar" class="w-20 h-20 rounded-full" alt="">
        <NuxtLink :to="`/user?id=${i.id}`" class="pl-6 pt-4">{{ i.nickname }}</NuxtLink>
      </div>
    </div>
    <div v-if="!list.length">
      <svg-icon class="text-primary mx-auto" icon-class="empty" />
      <p class="text-center text-2xl">空空如也</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
