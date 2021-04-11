<template>
  <div class="fd-container bg-white rounded">
    <div class="mt-16 text-center pt-8">
      <input class="w-72 py-3 px-5 border-2 border-purple-400 rounded" placeholder="请输入标题" type="text">
    </div>
    <div class="mt-8 text-center">
      <input class="w-1/2 py-3 px-5 border-2 border-purple-400 rounded" placeholder="请输入关键词(方便用户搜索)" type="text">
    </div>
    <div class="mt-8 mb-8 pb-16">
      <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
        <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
          Bold
        </button>
      </editor-menu-bar>
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { Bold } from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new Editor({
      content: '<p>This is just a boring paragraph</p>',
      extensions: [
        new Bold()
      ]
    })
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>

<style lang="scss" scoped>

</style>
