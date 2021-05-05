<template>
  <div>
    <button v-if="followed" class="py-1 px-3 bg-secondary flex items-center" @click="handleClick">
      <slot />
    </button>
    <button v-else-if="size==='small'" :disabled="disabled" :class="{'bt-primary':!plain && !none,'plain':plain}" class="fd-button py-1 px-4 flex items-center" @click="handleClick">
      <slot />
    </button>
    <button v-else-if="size==='medium'" :disabled="disabled" :class="{'bt-primary':!plain && !none,'plain':plain}" class="fd-button px-12 py-3" @click="handleClick">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String, // medium / small / mini
      default: 'small'
    },
    none: {
      type: Boolean,
      default: false
    },
    followed: {
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
  @apply border border-purple-500 text-purple-400
}
.bt-primary {
  @apply bg-primary text-white
}
.fd-button {
  @apply rounded-2xl focus:outline-none
}
.bg-secondary {
  background: #f3f4f6;
  color: black;
  @extend .fd-button
}
</style>
