<template>
  <div>
    <div class="banner flex justify-center text-white items-center">
      <div class="text-center">
        <p class="text-3xl">Art planet</p>
        <p class="text-xl">艺术星球</p>
      </div>
    </div>
    <div class="fd-container relative -top-12 bg-white rounded-2xl">
      <!--      按热度、时间排序的按钮-->
      <div class="flex justify-end pt-6 pr-6">
        <div class="flex">
          <fd-button plain>
            <span>按热度</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
          <fd-button class="pl-2" plain>
            <span>按时间</span>
            <svg-icon icon-class="transfer" class="w-4 h-4 mr-1" />
          </fd-button>
        </div>
      </div>
      <tab :tabs="artTabs" @changeTab="changeTab">
        <svg-icon v-if="loading" class="mx-auto" icon-class="loading" />
        <art-list v-else :art-list="artList" />
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
import ArtList from '@/components/ArtList'
import { getWorksApi } from '@/api/fans'
export default {
  components: {
    ArtList
  },
  data () {
    return {
      loading: true,
      tab: 1,
      total: 0,
      page: {
        pageNo: 1,
        pageSize: 8
      },
      artTabs: ['漫画', '写真', '手绘'],
      artList: []
    }
  },
  created () {
    this.getArtList()
  },
  methods: {
    changeTab (val) {
      this.loading = true
      this.tab = val
      this.page.pageNo = 1
      this.getArtList()
    },
    handleCurrentChange (val) {
      this.loading = true
      this.page.pageNo = val
      this.getArtList()
    },
    getArtList () {
      getWorksApi({ type: this.tab, ...this.page }).then(val => {
        this.artList = val.data.works
        this.total = val.data.total
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: 320px;
  background: url("https://image.fendy5.cn/s/lXo8HtTQ2dnOuBkh.png");
}
</style>
