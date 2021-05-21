<template>
  <div
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    class="bg-white"
  >
    <div class="pt-32">
      <div class="fd-container">
        <!--        头像昵称标题-->
        <div class="text-center relative">
          <!--          头像昵称-->
          <div class="absolute left-0 flex">
            <div class="fx-items-center ml-4 mr-4">
              <img class="w-7 h-7 rounded-full" :src="work.avatar" alt="">
              <div class="pl-2">{{ work.nickname }}</div>
            </div>
            <fd-button :followed="work.followed" @click="follow(work.user_id)">{{ work.followed?'已关注':'关  注' }}</fd-button>
          </div>
          <!--          标题-->
          <h3 class="text-2xl font-medium">{{ work.title }}</h3>
          <div class="pt-4 text-secondary">{{ work.create_time }}</div>
        </div>
        <div class="pt-20 article" v-html="work.content" />
        <div class="py-8 article">
          <div class="float-right flex">
            <!--   喜欢-->
            <div class="flex items-center pr-2 cursor-pointer">
              <svg-icon icon-class="like" class="w-4 h-4 mr-1" />
              <div class="">{{ likes }}</div>
            </div>
            <!--  评论-->
            <div class="flex items-center cursor-pointer">
              <svg-icon icon-class="comment" class="w-4 h-4 mr-1" />
              <div class="">{{ commentCount }}</div>
            </div>
          </div>
        </div>
        <el-input
          v-model="comment"
          type="textarea"
          :rows="4"
          resize="none"
          placeholder="请输入评论内容"
        />
        <div class="flex justify-end py-4 article">
          <fd-button plain size="medium" @click="handleComment">确定</fd-button>
        </div>
        <div class="pt-7 divide-y divide-gray-400 divide-opacity-25 article">
          <div v-for="i in comments" :key="i.id">
            <div class="flex justify-between pt-8">
              <div class="flex">
                <div class="flex ml-4 mr-4 w-32">
                  <img class="w-7 h-7 rounded-full" :src="i.avatar" alt="">
                  <div class="pl-2">{{ i.nickname }}</div>
                </div>
                <div class="relative">
                  <div>{{ i.content }}</div>
                  <div class="flex">
                    <el-popconfirm v-if="user.id===i.user_id" title="确定删除吗？" @confirm="deleteComment(i.id)">
                      <span slot="reference"> <el-link type="danger">删除 </el-link></span>
                    </el-popconfirm>
                    <el-link v-else type="primary" @click="reply(i.id,i.user_id)">回复</el-link>
                  </div>
                </div>
              </div>
              <div class="text-secondary whitespace-nowrap pl-5">{{ i.create_time }}</div>
            </div>
            <!--            回复评论区域-->
            <div class="pl-40">
              <div v-for="item in i.sub_comments" :key="item.id" class="py-4">
                <div class="flex">
                  <div class="flex">
                    <img class="w-7 h-7 rounded-full" :src="item.avatar" alt="">
                    <div class="pl-2">{{ item.nickname }}</div>
                  </div>
                  <span class="text-secondary px-4">回复</span>
                  <div class="flex">
                    <img class="w-7 h-7 rounded-full" :src="item.to_user.avatar" alt="">
                    <div class="pl-2">{{ item.to_user.nickname }}</div>
                  </div>
                </div>
                <div class="py-2">{{ item.content }}</div>
                <div class="flex">
                  <el-popconfirm v-if="user.id===item.user_id" title="确定删除吗？" @confirm="deleteComment(item.id)">
                    <span slot="reference"> <el-link type="danger">删除 </el-link></span>
                    <!--                    <el-button slot="reference">删除</el-button>-->
                  </el-popconfirm>
                  <el-link v-else type="primary" @click="reply(i.id,item.user_id)">回复</el-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWorkApi } from '@/api/work'
import { commentApi, deleteCommentApi, getCommentsApi } from '@/api/comment'
import { mapState } from 'vuex'
import { addFollowApi } from '@/api/fans'

export default {
  data () {
    return {
      loading: true,
      comments: [],
      comment: '',
      commentCount: 0,
      likes: 0,
      work: {}
    }
  },
  computed: mapState({
    user: state => state.userinfo
  }),
  mounted () {
    getWorkApi(this.$route.params.id).then(value => {
      this.work = value.data.work
      this.likes = value.data.likes
      this.commentCount = value.data.comments_count
      this.loading = false
    })
    this.getComments()
  },
  methods: {
    follow (id) {
      addFollowApi({ follow_id: id }).then(val => {
        if (val.code === 0) {
          getWorkApi(this.$route.params.id).then(value => {
            this.work = value.data.work
            this.likes = value.data.likes
            this.commentCount = value.data.comments_count
          })
        }
      })
    },
    deleteComment (id) {
      deleteCommentApi(id).then(_ => {
        this.getComments()
      })
    },
    reply (commentId, userId) {
      this.$prompt('请输入回复内容', '回复', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        commentApi({ work_id: this.$route.params.id, comment: value, comment_id: commentId, to_id: userId }).then(_ => {
          this.getComments()
        })
      })
    },
    getComments () {
      getCommentsApi({ work_id: this.$route.params.id }).then(value => {
        this.comments = value.data.comments
      })
    },
    handleComment () {
      commentApi({ work_id: this.$route.params.id, comment: this.comment }).then(_ => {
        this.comment = ''
        this.getComments()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  max-width: 680px;
  margin: 0 auto;
}
::v-deep .el-textarea__inner{
  @extend .article;
  display: block;
}
</style>
