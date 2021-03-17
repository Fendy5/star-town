<template>
  <div>
    <st-header />
    <div class="pt-12" />
    <Nuxt />
    <st-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import header from '@/layouts/header.vue'
import footer from '@/layouts/footer.vue'

export default Vue.extend({
  components: {
    'st-header': header,
    'st-footer': footer
  }
})
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
