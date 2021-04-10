<template>
  <div>
    <div class="fd-container">
      <div class="mt-16 text-center">
        <input class="w-72 py-3 px-5 border-2 border-purple-400 rounded" placeholder="请输入标题" type="text">
      </div>
      <div class="mt-8 text-center">
        <input class="w-1/2 py-3 px-5 border-2 border-purple-400 rounded" placeholder="请输入关键词(方便用户搜索)" type="text">
      </div>
      <div class="mt-8">
        <div ref="editor" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editor: null,
      options: {
        debug: 'info',
        modules: { toolbar: true },
        placeholder: 'Compose an epic...',
        theme: 'snow'
      }
    }
  },
  mounted () {
    const Quill = require('quill')
    this.editor = new Quill(this.$refs.editor, this.options)
  }
}
</script>

<style lang="scss" scoped>

</style>
