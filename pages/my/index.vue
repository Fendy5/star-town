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
        <div v-if="tab===0" class="fx-content-between pb-6">
          <div class="text-xl">我点赞的</div>
          <fd-button plain>
            <span>按热度</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
        </div>
        <div v-else-if="tab===1" class="fx-content-between pb-6">
          <div class="text-xl">我评论的</div>
          <fd-button plain>
            <span>按热度</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
        </div>
        <div v-else class="fx-content-between pb-6">
          <div class="fx-items-center">
            <div class="text-xl">我创作的</div>
            <div class="pl-8 flex">
              <div class="flex divide-x divide-gray-200 pr-4">
                <div class="pr-1">投稿</div>
                <div class="pl-1">16</div>
              </div>
              <div class="flex divide-x divide-gray-200 pr-4">
                <div class="pr-1">获赞</div>
                <div class="pl-1">1000</div>
              </div>
              <div class="flex divide-x divide-gray-200 pr-4">
                <div class="pr-1">被评论</div>
                <div class="pl-1">1000</div>
              </div>
              <div class="flex divide-x divide-gray-200 pr-4">
                <div class="pr-1">被收藏</div>
                <div class="pl-1">1000</div>
              </div>
            </div>
          </div>
          <fd-button plain>
            <span>按热度</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
        </div>
        <like-list v-if="tab===0" :like-list="likeList" />
        <comment-list v-else-if="tab===1" :comment-list="commentList" />
        <my-create v-else :like-list="likeList" />
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
      commentList: [
        {
          id: 1,
          title: 'I love you',
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          create_time: '2021-03-12 09:11:09',
          content: '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容'
        },
        {
          id: 2,
          title: 'I',
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          create_time: '2021-03-12 09:11:09',
          content: '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容'
        },
        {
          id: 3,
          title: 'You',
          nickname: '昵称',
          avatar: 'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png',
          create_time: '2021-03-12 09:11:09',
          content: '评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容'
        }
      ],
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
