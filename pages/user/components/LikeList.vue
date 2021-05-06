<template>
  <div>
    <div class="grid grid-cols-3 pb-6 gap-y-6">
      <div v-for="item in list" :key="item.id" class="rounded-xl item overflow-hidden">
        <div :style="{ 'background-image': 'url(' + item.cover + ')' }" class="img-bg bg-cover">
          <div class="flex justify-between pt-4 px-4">
            <avatar :id="item.user.user_id" :avatar="item.user.avatar" :nickname="item.user.nickname" />
            <fd-button :followed="item.followed" @click="follow(item.user.user_id)">{{ item.followed?'已关注':'关  注' }}</fd-button>
          </div>
        </div>
        <div class="px-4 pb-2 bg-white">
          <router-link :to="`/work/${item.id}`" class="py-2 h-30 inline-block text-black ellipsis-1">{{ item.title }}</router-link>
          <!--   文字文章-->
          <p class="text-secondary pb-2">{{ workType.get(item.type) }}</p>
          <!--   页眉-->
          <div class="flex justify-between">
            <!--   评论、喜欢-->
            <div class="flex">
              <!--   喜欢-->
              <div class="flex items-center pr-2 cursor-pointer" @click="like(item.id)">
                <svg-icon icon-class="like" class="w-4 h-4 mr-1" />
                <div class="">{{ item.likes }}</div>
              </div>
              <!--  评论-->
              <div class="flex items-center cursor-pointer">
                <svg-icon icon-class="comment" class="w-4 h-4 mr-1" />
                <div class="">{{ item.comments }}</div>
              </div>
            </div>
            <!--   时间-->
            <div class="text-secondary pr-4">{{ item.create_time }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!list.length">
      <svg-icon class="text-primary mx-auto" icon-class="empty" />
      <p class="text-center text-2xl">空空如也</p>
    </div>
  </div>
</template>

<script>
import { workTypeMixin } from '@/mixins'
import { addFollowApi } from '@/api/fans'

export default {
  name: 'LikeList',
  mixins: [workTypeMixin],
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {
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
.cover {
  width: 265px;
  height: 194px;
}
</style>
