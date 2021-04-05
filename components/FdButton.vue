<template>
  <div>
    <button v-if="size==='small'" :class="{'bt-primary':!plain && !none}" class="fd-button py-1 px-4" @click="handleClick">
      <slot />
    </button>
    <button v-else-if="size==='medium'" :class="{'bt-primary':!plain && !none,'plain':plain}" class="fd-button px-12 py-4" @click="handleClick">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String, // medium / small / mini
      default: 'small'
    },
    none: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.plain {
  @apply border-2 border-purple-500 text-purple-400
}
.bt-primary {
  @apply bg-primary text-white
}
.fd-button {
  @apply rounded-2xl focus:outline-none
}
</style>
