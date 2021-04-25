import Vue from 'vue'

import {
  Carousel,
  CarouselItem,
  MessageBox,
  Radio,
  Message
} from 'element-ui'

Vue.use(Carousel)
Vue.use(Radio)
Vue.use(CarouselItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
