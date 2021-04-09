<template>
  <div>
    <div class="banner">
      <img class="avatar rounded-full relative" src="https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png" alt="">
    </div>
    <!--    头像昵称-->
    <div class="relative text-center pt-24">
      <p>你可爱的迪迦奥特曼 <router-link to="" class="pl-6 text-purple-500">申请入驻</router-link> </p>
      <div class="flex pt-4 justify-center">
        <div class="flex divide-x divide-gray-300">
          <p class="pr-2">关注</p>
          <p class="pl-2">30</p>
        </div>
        <div class="flex divide-x divide-gray-300 pl-6">
          <p class="pr-2">粉丝</p>
          <p class="pl-2">30</p>
        </div>
      </div>
    </div>
    <div class="fd-container fx-content-between mt-6 mb-40">
      <sidebar @changeTab="changeTab" />
      <!--      右边-->
      <div class="my-contents bg-white rounded px-8 py-6">
        <div class="fx-content-between pb-6">
          <div class="text-xl">我点赞的</div>
          <fd-button plain>
            <span>按热度</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
        </div>
        <like-list v-if="tab===0" :like-list="likeList" />
        <comment-list v-else-if="tab===1" />
        <my-create v-else />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/pages/my/components/Sidebar'
import LikeList from '@/pages/my/components/LikeList'
import CommentList from '@/pages/my/components/CommentList'
import MyCreate from '@/pages/my/components/MyCreate'
export default {
  components: {
    LikeList,
    MyCreate,
    CommentList,
    Sidebar
  },
  data () {
    return {
      tab: 0,
      likeList: [
        {
          id: 1,
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          bg: 'https://image.fendy5.cn/s/7UniAOwgZLMdY0kj.png'
        },
        {
          id: 2,
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          bg: 'https://image.fendy5.cn/s/7UniAOwgZLMdY0kj.png'
        },
        {
          id: 3,
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          bg: 'https://image.fendy5.cn/s/7UniAOwgZLMdY0kj.png'
        },
        {
          id: 4,
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          bg: 'https://image.fendy5.cn/s/7UniAOwgZLMdY0kj.png'
        }
      ]
    }
  },
  methods: {
    changeTab (val) {
      console.log(val)
      this.tab = val
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 200px;
  background: linear-gradient(90deg, #833AB4 0%, #E94057 50.52%, #F27121 100%);
  .avatar {
    margin: 0 auto;
    top: 140px;
    width: 146px;
    height: 146px;
  }
}
.my-contents {
  width: 900px;
  min-height: 350px;
}
</style>
