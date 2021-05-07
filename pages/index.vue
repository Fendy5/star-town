<template>
  <div class="index">
    <div class="w-full min-w-1280 bg-primary">
      <el-carousel arrow="always" :interval="4000" type="card" class="overflow-hidden" height="480px">
        <el-carousel-item v-for="item in bannerImages" :key="item">
          <img class="w-full h-full rounded-xl" :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="fd-container">
      <!--      今天推荐的Tab-->
      <div class="flex justify-around mt-6 mb-10">
        <fd-button none size="medium" :class="{'bg-primary':tab===0}" class="rounded-full" @click="changeTab(0)">首页推荐</fd-button>
        <!--        <fd-button none size="medium" :class="{'bg-primary':tab===1}" class="rounded-full" @click="changeTab(1)">个性推荐</fd-button>-->
        <fd-button none size="medium" :class="{'bg-primary':tab===2}" class="rounded-full" @click="changeTab(2)">最新发布</fd-button>
      </div>
      <!--    推荐内容-->
      <div v-if="loading.recommend" class="flex justify-center">
        <svg-icon icon-class="loading" />
      </div>
      <div v-else-if="homeRecommend.length===0">
        <svg-icon class="text-primary mx-auto" icon-class="empty" />
        <p class="text-center text-2xl">空空如也</p>
      </div>
      <div v-else class="rounded-xl star-recommended grid grid-cols-4 gap-6 place-items-end mb-8">
        <div v-for="(item,index) in homeRecommend" :key="item.id" class="rounded-xl relative item overflow-hidden">
          <div :style="{ 'background-image': 'url(' + item.cover + ')' }" class="img-bg bg-cover" />
          <div class="flex absolute top-4 justify-between px-4 w-full">
            <avatar :id="item.user.user_id" :avatar="item.user.avatar" :nickname="item.user.nickname" />
            <fd-button :followed="item.followed" @click="follow(item.user.user_id)">{{ item.followed?'已关注':'关  注' }}</fd-button>
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
                <div :class="{'red':item.has_like}" class="flex items-center pr-2 cursor-pointer" @click="recommendRank(item.id,index)">
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

      <!--      排行榜-->
      <tab :tabs="ranks" title="排行榜" @changeTab="changeRankTab">
        <div v-if="loading.rank" class="flex justify-center">
          <svg-icon icon-class="loading" />
        </div>
        <div v-else-if="rankList.length===0" class="py-8">
          <svg-icon class="text-primary mx-auto" icon-class="empty" />
          <p class="text-center text-2xl">空空如也</p>
        </div>
        <div v-else class="mt-12 pb-16 rounded-xl star-recommended flex justify-between flex-wrap">
          <div v-for="(i,index) in rankList" :key="i.id" class="rounded-xl overflow-hidden item rank mb-6 relative">
            <div :style="{ 'background-image': 'url(' + i.cover + ')' }" class="img-bg2 bg-cover" />
            <div class="flex justify-between pt-4 px-4 absolute top-4 w-full">
              <avatar :id="i.user.user_id" class="ml-4" :avatar="i.user.avatar" :nickname="i.user.nickname" />
              <fd-button :followed="i.followed" @click="follow(i.user.user_id)">{{ i.followed?'已关注':'关  注' }}</fd-button>
            </div>
            <div class="pl-4 pb-2 bg-white rounded-xl">
              <div class="py-2 text-black cursor-pointer">{{ i.title }}</div>
              <!--   文字文章-->
              <p class="text-secondary pb-2">{{ workType.get(i.type) }}</p>
              <!--   页眉-->
              <div class="flex justify-between">
                <!--   评论、喜欢-->
                <div class="flex">
                  <!--   喜欢-->
                  <div :class="{'red':i.has_like}" class="flex items-center pr-2 cursor-pointer" @click="likeRank(i.id,index)">
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
                <div class="text-secondary pr-4">{{ i.create_time }}</div>
              </div>
            </div>
          </div>
        </div>
      </tab>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import fdButton from '@/components/FdButton.vue'
import Avatar from '@/components/Avatar.vue'
import { getArtListApi, getIndexApi, getRecommendApi } from '~/api'
import { workTypeMixin } from '~/mixins'
import { likeApi } from '~/api/like'
import { addFollowApi, getWorksApi } from '~/api/fans'

export default Vue.extend({
  components: {
    fdButton,
    Avatar
  },
  mixins: [workTypeMixin],
  data () {
    return {
      loading: {
        recommend: true,
        rank: true
      },
      bannerImages: [
        'https://image.fendy5.cn/s/syUVpgo4u29WlwxG.png',
        'https://image.fendy5.cn/s/S4g5wln8BFVykxND.png',
        'https://image.fendy5.cn/s/xKvyoPEMjw8WCXNh.png'
      ],
      homeRecommend: [],
      tab: 0, // 10-首页推荐，11-个性推荐，12-最新发布
      rankTab: 0,
      rankList: [],
      ranks: ['文字榜单', '艺术榜单']
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
    initPage () {
      getIndexApi().then(val => {
        this.homeRecommend = val.data.home_recommend
        this.rankList = val.data.ranks
        this.loading.rank = false
        this.loading.recommend = false
      })
    },
    follow (id) {
      addFollowApi({ follow_id: id }).then((val) => {
        if (val.code === 0) {
          this.getArtList()
          this.tab === 0 ? this.getRecommend() : this.getNewestWorks()
        }
      })
    },
    // 点赞（推荐榜）
    recommendRank (workId, index) {
      likeApi({ work_id: workId }).then(_ => {
        const hasLike = this.homeRecommend[index].has_like
        if (hasLike) {
          this.homeRecommend[index].has_like = false
          this.homeRecommend[index].likes -= 1
        } else {
          this.homeRecommend[index].has_like = true
          this.homeRecommend[index].likes += 1
        }
      })
    },
    // 点赞（排行榜）
    likeRank (workId, index) {
      likeApi({ work_id: workId }).then(_ => {
        const hasLike = this.rankList[index].has_like
        if (hasLike) {
          this.rankList[index].has_like = false
          this.rankList[index].likes -= 1
        } else {
          this.rankList[index].has_like = true
          this.rankList[index].likes += 1
        }
      })
    },
    // 切换排行榜
    changeRankTab (index) {
      this.rankTab = index
      this.loading.rank = true
      this.getArtList()
    },
    getArtList () {
      getArtListApi({ type: this.rankTab }).then(val => {
        this.rankList = val.data.arts
        this.loading.rank = false
      })
    },
    // 切换推荐
    changeTab (index) {
      this.tab = index
      this.loading.recommend = true
      index === 0 ? this.getRecommend() : this.getNewestWorks()
    },
    getRecommend () {
      getRecommendApi().then(val => {
        this.homeRecommend = val.data.works
        this.loading.recommend = false
      })
    },
    getNewestWorks () {
      getWorksApi({ type: 0, pageSize: 8, pageNo: 1 }).then(val => {
        this.homeRecommend = val.data.works
        this.loading.recommend = false
      })
    }
  }
})
</script>

<style lang="scss">
.item {
  width: 274px;
  .img-bg {
    width: 100%;
    height: 194px;
    filter: brightness(0.5);
  }
  .img-bg2 {
    filter: brightness(0.5);
    width: 353px;
    height: 337px;
  }
}
.rank {
  width: 353px;
}

.carousel {
  background: linear-gradient(90deg, #833AB4 0%, #E94057 50.52%, #F27121 100%);
}

.el-carousel__item {
  height: 333px;
}
.el-carousel__container {
  top: 80px;
}

</style>
