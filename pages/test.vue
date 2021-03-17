<template>
  <div>
    <canvas ref="canvas" width="500" height="500">浏览器不支持Canvas</canvas>
    <button @click="drawCanvas">确定</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawRect: '',
      title: '1234-Test',
      points: [],
      drawPanel: '',
      canvas: ''
    }
  },
  mounted () {
    this.canvas = this.$refs.canvas
    this.canvas.addEventListener('mousedown', this.mousedownHandler, false)
    this.drawPanel = this.canvas.getContext('2d')
    this.drawRect = this.canvas.getBoundingClientRect()
  },
  methods: {
    mousedownHandler (event) {
      this.points.push([event.pageX - this.drawRect.x, event.pageY - this.drawRect.y])
      this.canvas.addEventListener('mousemove', this.mouseMove, false)
    },
    mouseMove (event) {
      this.drawLine(this.points.concat([[event.pageX - this.drawRect.x, event.pageY - this.drawRect.y]]))
    },
    drawLine (points) {
      this.drawPanel.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.drawPanel.beginPath()
      this.drawPanel.moveTo(points[0][0], points[0][1])
      for (let i = 1; i < points.length; i++) {
        this.drawPanel.lineTo(points[i][0], points[i][1])
      }
      this.drawPanel.lineJoin = 'round'
      this.drawPanel.closePath()
      this.drawPanel.stroke()
    },
    drawCanvas () {
      const canvas = this.$refs.canvas
      const ctx = canvas.getContext('2d')
      // 二次贝塞尔曲线
      ctx.beginPath()
      ctx.moveTo(75, 40)
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25)
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120)
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40)
      ctx.stroke()
    }
  },
  // 独立设置head信息
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'news',
          content: 'This is news page'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
canvas {
  border: 1px solid purple;
}
</style>
