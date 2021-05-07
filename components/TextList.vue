<template>
  <!--        文字星球列表-->
  <div class="divide-y divide-fuchsia-300">
    <div v-for="i in textList" :key="i.id" class="py-6">
      <div class="mb-4 flex justify-between">
        <div class="flex w-210 items-center justify-between">
          <avatar :id="i.user.user_id" color="black" :avatar="i.user.avatar" :nickname="i.user.nickname" />
          <fd-button :followed="i.followed" @click="follow(i.user.user_id)">{{ i.followed?'已关注':'关  注' }}</fd-button>
        </div>
        <div class="text-secondary">{{ i.create_time }}</div>
      </div>
      <div class="flex">
        <img class="w-52 h-32 object-cover rounded-2xl" :src="i.cover" alt="">
        <div class="pl-8 w-full flex flex-col justify-between">
          <div>
            <router-link :to="`/work/${i.id}`" class="text-xl font-medium pb-4">{{ i.title }}</router-link>
            <p>{{ i.desc }}</p>
          </div>
          <div class="flex justify-end">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import { addFollowApi } from '@/api/fans'
export default {
  components: { Avatar },
  props: {
    textList: {
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
.w-210 {
  width: 210px;
}
</style>
