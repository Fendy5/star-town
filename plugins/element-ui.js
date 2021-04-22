import Vue from 'vue'

import {
  Carousel,
  CarouselItem,
  MessageBox,
  Message
} from 'element-ui'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
