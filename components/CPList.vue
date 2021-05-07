<template>
  <div class="my-4 grid grid-cols-4 place-items-center">
    <div v-for="(i,index) in cpList" :key="i.id" class="cp-list-item relative">
      <div :style="{background:`url(${i.cover}) no-repeat 50% 50%`}" class="cover" />
      <div class="left-6 text-white absolute text-3xl top-4 px-4">No.{{ index+1 }}</div>
      <div class="pt-3 pb-4 flex justify-between px-4 bg-white rounded">
        <div class="">
          <div class="flex items-center">
            <div class="flex mr-2">
              <img class="w-6 h-6 rounded-full" :src="i.users[0].avatar" alt="">
              <img class="w-6 h-6 rounded-full ml-2" :src="i.users[1].avatar" alt="">
            </div>
            <NuxtLink :to="`/fans?cc_id=${i.id}`">{{ i.name }}</NuxtLink>
          </div>
          <!--          <p>100w+个粉丝</p>-->
        </div>
        <!--        <fd-button>加入</fd-button>-->
      </div>
    </div>
  </div>
</template>

<script>
// import FdButton from '@/components/FdButton'
export default {
  // components: {
  //   FdButton
  // },
  props: {
    cpList: {
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
.cp-list-item {
  width: 274px;
  .cover {
    width: 100%;
    height: 200px;
    filter: brightness(0.5);
  }
}
</style>
