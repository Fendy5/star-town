<template>
  <div class="grid grid-cols-4 gap-4 pb-6">
    <div v-for="(i,index) in artList" :key="i.id" class="art relative">
      <div :style="{'background-image':`url(${i.cover})`}" class="cover bg-cover rounded-2xl px-4 pt-4" />
      <div class="flex justify-between w-full absolute top-4 px-4">
        <avatar :id="i.user.user_id" :avatar="i.user.avatar" :nickname="i.user.nickname" />
        <fd-button :followed="i.followed" @click="follow(i.user.user_id)">{{ i.followed?'已关注':'关  注' }}</fd-button>
      </div>
      <!--   卡片尾部-->
      <div class="flex justify-between pt-2 px-2">
        <!--   评论、喜欢-->
        <div class="flex">
          <!--   喜欢-->
          <div :class="{'red':i.has_like}" class="flex items-center pr-2 cursor-pointer" @click="like(i.id,index)">
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
import { addFollowApi } from '@/api/fans'

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
  },
  methods: {
    like (workId, index) {
      this.$emit('like', workId, index)
    },
    follow (id) {
      addFollowApi({ follow_id: id }).then(val => {
        if (val.code === 0) {
          this.$emit('changeFollow')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.art {
}
.cover {
  width: 274px;
  height: 234px;
  filter: brightness(0.5);
}
</style>
