<template>
  <div>
    <div class="banner flex justify-center text-white items-center">
      <div class="text-center">
        <p class="text-3xl">Word planet</p>
        <p class="text-xl">文字星球</p>
      </div>
    </div>
    <div class="fd-container relative -top-12 bg-white rounded-2xl">
      <!--      按热度、时间排序的按钮-->
      <div class="flex justify-end pt-6 pr-6">
        <!--        <div class="flex">-->
        <!--          <fd-button plain>-->
        <!--            <span>按热度</span>-->
        <!--            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />-->
        <!--          </fd-button>-->
        <!--          <fd-button class="pl-2" plain>-->
        <!--            <span>按时间</span>-->
        <!--            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />-->
        <!--          </fd-button>-->
        <!--        </div>-->
      </div>
      <tab @changeTab="changeTab">
        <svg-icon v-if="loading" class="mx-auto" icon-class="loading" />
        <text-list v-else :text-list="textList" @changeFollow="getTextList" />
        <div class="py-8">
          <el-pagination
            class="text-center"
            layout="prev, pager, next"
            :total="total"
            @current-change="handleCurrentChange"
          />
        </div>
      </tab>
    </div>
  </div>
</template>

<script>
import FdButton from '@/components/FdButton'
import TextList from '@/components/TextList'
import Tab from '@/components/Tab'
import { getWorksApi } from '@/api/fans'
export default {
  components: {
    Tab,
    TextList,
    FdButton
  },
  data () {
    return {
      loading: true,
      tab: 1,
      total: 0,
      page: {
        pageNo: 1,
        pageSize: 5
      },
      textList: []
    }
  },
  created () {
    this.getTextList()
  },
  methods: {
    changeTab (val) {
      this.loading = true
      this.tab = val
      this.page.pageNo = 1
      this.getTextList()
    },
    handleCurrentChange (val) {
      this.loading = true
      this.page.pageNo = val
      this.getTextList()
    },
    getTextList () {
      getWorksApi({ type: this.tab, ...this.page }).then(val => {
        this.textList = val.data.works
        this.total = val.data.total
        this.loading = false
      })
    }
  },
  head: {
    title: '文字星球'
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 320px;
  background: url("https://image.fendy5.cn/s/lXo8HtTQ2dnOuBkh.png");
}
::v-deep .el-pager li {
  font-size: 18px;
}
</style>
