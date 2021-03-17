import Vue from 'vue'

import {
  Carousel,
  CarouselItem,
  Message
} from 'element-ui'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$message = Message
