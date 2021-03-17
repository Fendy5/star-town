<template>
  <div class="index">
    <div class="w-full bg-primary">
      <el-carousel arrow="always" :interval="4000" type="card" class="overflow-hidden" height="480px">
        <el-carousel-item v-for="item in 3" :key="item">
          <img class="w-full h-full rounded-xl" :src="images[0]" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="fd-container">
      <!--      今天推荐的Tab-->
      <div class="flex justify-around mt-6 mb-10">
        <div :class="{'active':tab===0}" class="fd-button" @click="changeTab(0)">首页推荐</div>
        <div :class="{'active':tab===1}" class="fd-button" @click="changeTab(1)">个性推荐</div>
        <div :class="{'active':tab===2}" class="fd-button" @click="changeTab(2)">最新发布</div>
      </div>
      <!--    推荐内容-->
      <div class="rounded-xl star-recommended flex justify-between flex-wrap">
        <div v-for="item in 8" :key="item" class="rounded-2xl item mb-6">
          <div :style="{ 'background-image': 'url(' + images[0] + ')' }" class="img-bg">
            <div class="flex justify-between pt-4">
              <div class="flex ml-4">
                <img class="w-7 h-7 rounded-full" src="https://image.fendy5.cn/s/EJ34YcPTIMsg7RwX.png" alt="">
                <div class="text-white pl-2">昵称</div>
              </div>
              <button class="bg-primary text-white rounded-2xl w-16 h-8 mr-4">关注</button>
            </div>
          </div>
          <div class="pl-4 pb-2 bg-white rounded-xl">
            <div class="py-2 text-black">主题主题主题主题主题主题...</div>
            <!--   文字文章-->
            <p class="text-secondary pb-2">文字-文章</p>
            <!--   页眉-->
            <div class="flex justify-between">
              <!--   评论、喜欢-->
              <div class="flex">
                <!--   喜欢-->
                <div class="flex items-center pr-2">
                  <svg-icon icon-class="like" class="w-4 h-4 mr-1" />
                  <div class="">100+</div>
                </div>
                <!--  评论-->
                <div class="flex items-center">
                  <svg-icon icon-class="comment" class="w-4 h-4 mr-1" />
                  <div class="">100+</div>
                </div>
              </div>
              <!--   时间-->
              <div class="text-secondary pr-4">21-03-16 22:23</div>
            </div>
          </div>
        </div>
      </div>
      <!--      排行榜文字标签-->
      <div class="mt-24 text-2xl border-b-4 border-black pb-4 inline-block mb-8">排行榜</div>
      <!--      排行榜的Tab-->
      <div class="flex justify-around">
        <div :class="{'active':rankTab===0}" class="fd-button" @click="changeRankTab(0)">视频榜</div>
        <div :class="{'active':rankTab===1}" class="fd-button" @click="changeRankTab(1)">文字榜</div>
        <div :class="{'active':rankTab===2}" class="fd-button" @click="changeRankTab(2)">艺术榜</div>
        <div :class="{'active':rankTab===3}" class="fd-button" @click="changeRankTab(3)">好物榜</div>
      </div>
      <!--      排行榜的内容-->
      <div class="mt-12 flex justify-between flex-wrap">
        <!--        图片部分内容-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      tab: 0, // 10-首页推荐，11-个性推荐，12-最新发布
      rankTab: 0,
      images: [
        'https://image.fendy5.cn/s/PyFHOprAVGQJOD06.png',
        'https://image.fendy5.cn/s/u7CG5B8qQUIoY2Wf.png'
      ]
    }
  },
  methods: {
    // 切换排行榜
    changeRankTab (index: number) {
      this.rankTab = index
    },
    // 切换推荐
    changeTab (index: number) {
      this.tab = index
    }
  }
})
</script>

<style lang="scss">
.star-recommended {
  .item {
    .img-bg {
      width: 274px;
      height: 194px;
    }
  }
}

.carousel {
  background: linear-gradient(90deg, #833AB4 0%, #E94057 50.52%, #F27121 100%);
}
.fd-button {
  @apply pt-4 pb-4 pl-8 pr-8 rounded-12xl cursor-pointer
}

.el-carousel__item {
  height: 333px;
}
.el-carousel__container {
  top: 80px;
}

</style>
