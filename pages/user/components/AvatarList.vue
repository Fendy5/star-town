<template>
  <div class="grid grid-cols-6">
    <div v-for="i in list" :key="i.id" class="justify-center">
      <img :src="i.avatar" class="w-20 h-20 rounded-full" alt="">
      <div class="pl-4 pt-4">{{ i.nickname }}</div>
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
