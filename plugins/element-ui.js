import Vue from 'vue'

import {
  Carousel,
  CarouselItem,
  MessageBox,
  Select,
  Option,
  OptionGroup,
  Message
} from 'element-ui'

Vue.use(Carousel)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(CarouselItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
