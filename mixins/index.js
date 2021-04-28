const workType = new Map([
  ['1', '文字-文章'],
  ['2', '文字-小说'],
  ['3', '文字-时评'],
  ['4', '艺术-漫画'],
  ['5', '艺术-写真'],
  ['6', '艺术-手绘']
])

const workTypeMixin = {
  data () {
    return {
      workType
    }
  }
}

export { workTypeMixin }
