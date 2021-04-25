<template>
  <div class="fd-container bg-white rounded">
    <div class="editor-container">
      <div class="mt-16 text-center pt-8">
        <input v-model="form.title" class="w-1/2 py-3 px-5 border-2 border-purple-400 rounded" placeholder="请输入标题" type="text">
      </div>
      <div class="pt-8 flex w-1/2 justify-between mx-auto">
        <el-radio v-model="form.type" fill="red" label="1" border>文字星球</el-radio>
        <el-radio v-model="form.type" fill="red" label="2" border>艺术星球</el-radio>
      </div>
      <div class="mt-8 text-center">
        <input v-model="form.desc" class="w-full py-3 px-5 border-2 border-purple-400 rounded" placeholder="简介" type="text">
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
      form: {
        title: '',
        desc: '',
        content: '',
        type: ''
      },
      editor: null
    }
  },
  mounted () {
    this.editor = new Editor({
      content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
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
        command({ src })
      }
    }
  }
}
</script>

<style lang="scss" src="../../assets/css/editor/index.scss"></style>
<style lang="scss" scoped>
.editor {
  border: 2px solid #a68bfa;
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
