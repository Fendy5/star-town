<template>
  <div class="fd-container bg-white rounded">
    <div class="editor-container">
      <div class="mt-16 text-center pt-8">
        <input v-model="form.title" class="w-1/2 py-3 px-5 border-1 border-purple-400 rounded border" placeholder="请输入标题" type="text">
      </div>
      <div class="pt-8 text-center">
        <el-select v-model="form.type" class="w-1/2 border-1 border-purple-400 rounded border" placeholder="请选择发布的类型">
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-option-group>
        </el-select>
      </div>
      <div class="mt-8 text-center">
        <input v-model="form.desc" class="w-full py-3 px-5 border-1 border-purple-400 rounded border" placeholder="简介" type="text">
      </div>
      <div class="mt-8 mb-8 pb-16">
        <div class="editor">
          <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
            <div class="menubar">
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.bold() }"
                @click="commands.bold"
              >
                <svg-icon icon-class="bold" />
              </button>
              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.italic() }"
                @click="commands.italic"
              >
                <svg-icon icon-class="italic" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.strike() }"
                @click="commands.strike"
              >
                <svg-icon icon-class="strike" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.underline() }"
                @click="commands.underline"
              >
                <svg-icon icon-class="underline" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.code() }"
                @click="commands.code"
              >
                <svg-icon icon-class="code" />
              </button>

              <button
                class="menubar__button"
                @click="showImagePrompt(commands.image)"
              >
                <svg-icon icon-class="image" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.paragraph() }"
                @click="commands.paragraph"
              >
                <svg-icon icon-class="paragraph" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                @click="commands.heading({ level: 1 })"
              >
                H1
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                @click="commands.heading({ level: 2 })"
              >
                H2
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                @click="commands.heading({ level: 3 })"
              >
                H3
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.bullet_list() }"
                @click="commands.bullet_list"
              >
                <svg-icon icon-class="ul" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.ordered_list() }"
                @click="commands.ordered_list"
              >
                <svg-icon icon-class="ol" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.blockquote() }"
                @click="commands.blockquote"
              >
                <svg-icon icon-class="quote" />
              </button>

              <button
                class="menubar__button"
                :class="{ 'is-active': isActive.code_block() }"
                @click="commands.code_block"
              >
                <svg-icon icon-class="code" />
              </button>

              <button
                class="menubar__button"
                @click="commands.horizontal_rule"
              >
                <svg-icon icon-class="hr" />
              </button>

              <button
                class="menubar__button"
                @click="commands.undo"
              >
                <svg-icon icon-class="undo" />
              </button>

              <button
                class="menubar__button"
                @click="commands.redo"
              >
                <svg-icon icon-class="redo" />
              </button>
            </div>
          </editor-menu-bar>

          <editor-content class="editor__content" :editor="editor" />
        </div>
        <div class="text-center">
          <fd-button plain size="medium" @click="saveStar">发 布</fd-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Image,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'
import { addWorkApi } from '@/api/work'
export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data () {
    return {
      options: [
        {
          label: '文字星球',
          options: [
            {
              value: '1',
              label: '文章'
            },
            {
              value: '2',
              label: '小说'
            },
            {
              value: '3',
              label: '评说'
            }]
        },
        {
          label: '艺术星球',
          options: [
            {
              value: '4',
              label: '漫画'
            }, {
              value: '5',
              label: '写真'
            }, {
              value: '6',
              label: '手绘'
            }]
        }],
      form: {
        title: '',
        desc: '',
        content: '',
        cover: '',
        type: ''
      },
      editor: null
    }
  },
  mounted () {
    this.editor = new Editor({
      content: `
          <p>写点什么叭~</p>
        `,
      onUpdate: ({ getHTML }) => {
        // get new content on update
        this.form.content = getHTML()
      },
      extensions: [
        new Image(),
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Link(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History()
      ]
    })
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    saveStar () {
      addWorkApi(this.form).then(val => {
        console.log(val)
      })
    },
    showImagePrompt (command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        if (!this.form.cover) {
          this.form.cover = src
        }
        command({ src })
      }
    }
  }
}
</script>

<style lang="scss" src="../../assets/css/editor/index.scss"></style>
<style lang="scss" scoped>
.editor {
  border: 1px solid #a68bfa;
  padding: 24px;
}
.editor-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 45rem;
}
.svg-icon {
  width: .8rem;
  height: .8rem;
}
.menubar {
  border-bottom: 1px solid #a68bfa;
}
.el-radio.is-bordered.is-checked {
  border: 2px solid #a68bfa
}
::v-deep .el-radio__input.is-checked+.el-radio__label {
  color: #a68bfa;
}
::v-deep .el-radio__input.is-checked .el-radio__inner {
  color: #a68bfa;
  background: #a68bfa;
}
</style>
