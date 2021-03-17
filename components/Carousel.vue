<template>
  <div class="carousel" :style="{height:height+'px',background}">
    <img :src="images[0]" alt="">
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default () {
        return []
      }
    },
    background: {
      type: String,
      default: 'linear-gradient(90deg, #833AB4 0%, #E94057 50.52%, #F27121 100%)'
    },
    height: {
      type: Number,
      default: 480
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
