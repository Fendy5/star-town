<template>
  <div class="grid grid-cols-4 pb-6">
    <div v-for="i in artList" :key="i.id" class="art">
      <div :style="{'background-image':`url(${i.cover})`}" class="cover bg-cover rounded-2xl px-4 pt-4">
        <div class="flex justify-between">
          <avatar :id="i.user.user_id" :avatar="i.user.avatar" :nickname="i.user.nickname" />
          <fd-button>关注</fd-button>
        </div>
      </div>
      <!--   卡片尾部-->
      <div class="flex justify-between pt-2 px-2">
        <!--   评论、喜欢-->
        <div class="flex">
          <!--   喜欢-->
          <div class="flex items-center pr-2 cursor-pointer">
            <svg-icon icon-class="like" class="w-4 h-4 mr-1" />
            <div class="">{{ i.likes }}</div>
          </div>
          <!--  评论-->
          <div class="flex items-center cursor-pointer">
            <svg-icon icon-class="comment" class="w-4 h-4 mr-1" />
            <div class="">{{ i.comments }}</div>
          </div>
        </div>
        <!--   时间-->
        <div class="text-secondary pr-4">21-03-16 22:23</div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
  components: { Avatar },
  props: {
    artList: {
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
.art {
}
.cover {
  width: 274px;
  height: 234px;
}
</style>
