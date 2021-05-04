<template>
  <div>
    <div class="banner">
      <img class="avatar rounded-full relative" :src="user.avatar" alt="">
    </div>
    <!--    头像昵称-->
    <div class="relative text-center pt-24">
      <p>
        {{ user.nickname }}
        <span class="pl-6">
          <el-link v-if="!user.circle" type="primary" @click="showDialog">申请入驻</el-link>
          <NuxtLink v-else :to="`/fans?cc_id=${user.circle.id}`" type="info">{{ user.circle.name }}</NuxtLink>
        </span>
      </p>
      <div class="flex pt-4 justify-center">
        <div class="flex divide-x divide-gray-300">
          <p class="pr-2">关注</p>
          <p class="pl-2 cursor-pointer" @click="changeTab(3)">{{ user.follows_count }}</p>
        </div>
        <div class="flex divide-x divide-gray-300 pl-6">
          <p class="pr-2">粉丝</p>
          <p class="pl-2 cursor-pointer" @click="changeTab(4)">{{ user.fans_count }}</p>
        </div>
      </div>
    </div>
    <div class="fd-container fx-content-between mt-6 mb-40">
      <sidebar :count="count" @changeTab="changeTab" />
      <!--      右边-->
      <div class="my-contents bg-white rounded px-8 py-6">
        <div v-if="tab===0" class="fx-content-between pb-6">
          <div v-if="!userId" class="text-xl">我点赞的</div>
          <div v-else class="text-xl">Ta点赞的</div>
          <fd-button plain>
            <span>按热度</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
        </div>
        <div v-else-if="tab===1" class="fx-content-between pb-6">
          <div v-if="!userId" class="text-xl">我评论的</div>
          <div v-else class="text-xl">Ta评论的</div>
          <fd-button plain>
            <span>按热度</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
        </div>
        <div v-else-if="tab===2" class="fx-content-between pb-6">
          <div class="fx-items-center">
            <div v-if="!userId" class="text-xl">我创作的</div>
            <div v-else class="text-xl">Ta创作的</div>
            <div class="pl-8 flex">
              <div class="flex divide-x divide-gray-200 pr-4">
                <div class="pr-1">获赞</div>
                <div class="pl-1">{{ myCreate.likes_count }}</div>
              </div>
              <div class="flex divide-x divide-gray-200 pr-4">
                <div class="pr-1">被评论</div>
                <div class="pl-1">{{ myCreate.comments_count }}</div>
              </div>
            </div>
          </div>
          <fd-button plain>
            <span>按热度</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
        </div>
        <div v-else-if="tab===3" class="fx-content-between pb-6">
          <div v-if="!userId" class="text-xl">我关注的</div>
          <div v-else class="text-xl">Ta关注的</div>
        </div>
        <div v-else-if="tab===4" class="fx-content-between pb-6">
          <div v-if="!userId" class="text-xl">我的粉丝</div>
          <div v-else class="text-xl">Ta的粉丝</div>
        </div>

        <svg-icon v-if="loading" class="mx-auto" icon-class="loading" />
        <like-list v-if="tab===0 && !loading" :list="likeList" />
        <comment-list v-else-if="tab===1 && !loading" :comment-list="commentList" />
        <avatar-list v-else-if="tab===3 && !loading" :list="follows" />
        <avatar-list v-else-if="tab===4 && !loading" :list="fans" />
        <like-list v-else-if="!loading" :list="createList" />
      </div>
    </div>
    <div :style="{display:dialog}" class="login rounded-2xl px-11 pb-14">
      <!--      登录注册切换的Tab-->
      <div class="mt-8 text-2xl text-center">CP入驻</div>
      <div class="mt-9">
        <input v-model="form.phone" type="text" class="fd-input" placeholder="Ta的手机号码">
      </div>
      <div class="mt-9">
        <input v-model="form.cp_name" type="text" class="fd-input" placeholder="CP名称">
      </div>
      <button class="bg-primary text-white rounded-full h-16 text-xl mt-12 w-full focus:outline-none" @click="bind">立即入驻</button>
    </div>
    <div class="mask" :style="{display:dialog}" @click="closeDialog" />
  </div>
</template>

<script>
import Sidebar from '@/pages/user/components/Sidebar'
import LikeList from '@/pages/user/components/LikeList'
import CommentList from '@/pages/user/components/CommentList'
import AvatarList from '@/pages/user/components/AvatarList'
import { addCircle } from '@/api/circle'
import { getMyCommentApi, getMyCreate, getMyFansApi, getMyFollowApi, getMyLikeApi, getUserCenterApi } from '@/api/user'
export default {
  middleware: 'auth',
  components: {
    LikeList,
    AvatarList,
    CommentList,
    Sidebar
  },
  data () {
    return {
      loading: true,
      form: {
        cp_name: '',
        phone: ''
      },
      dialog: false,
      tab: 0,
      count: {},
      createList: [],
      commentList: [],
      user: {},
      userId: this.$route.query.id,
      myCreate: {
        likes_count: 0,
        comments_count: 0
      },
      follows: [],
      fans: [],
      likeList: []
    }
  },
  watch: {
    $route (to) {
      this.userId = to.query.id
      this.initPage()
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
    initPage () {
      getUserCenterApi({ id: this.userId }).then(value => {
        this.user = value.data.user
        this.count = {
          likes: this.user.likes_count,
          comments: this.user.comments_count,
          create: this.user.works_count
        }
      })
      this.getMyLike()
    },
    getMyCreate () {
      getMyCreate({ id: this.userId }).then(val => {
        this.createList = val.data.works
        this.myCreate.likes_count = val.data.likes_count
        this.myCreate.comments_count = val.data.comments_count
        this.loading = false
      })
    },
    getMyComment () {
      getMyCommentApi({ id: this.userId }).then(val => {
        this.commentList = val.data.comments
        this.loading = false
      })
    },
    getMyLike () {
      getMyLikeApi({ id: this.userId }).then(val => {
        this.likeList = val.data.works
        this.loading = false
      })
    },
    getMyFollow () {
      getMyFollowApi({ id: this.userId }).then(val => {
        this.follows = val.data.users
        this.loading = false
      })
    },
    getMyFans () {
      getMyFansApi({ id: this.userId }).then(val => {
        this.fans = val.data.fans
        this.loading = false
      })
    },
    showDialog () {
      this.dialog = 'block'
    },
    closeDialog () {
      this.dialog = 'none'
    },
    bind () {
      addCircle(this.form).then(val => {
        if (val.code === 0) { this.dialog = 'none' }
      })
    },
    changeTab (val) {
      this.loading = true
      switch (val) {
        case 0:
          this.getMyLike()
          break
        case 1:
          this.getMyComment()
          break
        case 2:
          this.getMyCreate()
          break
        case 3:
          this.getMyFollow()
          break
        case 4:
          this.getMyFans()
          break
      }
      this.tab = val
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
