import Vue from 'vue'

import {
  Carousel,
  CarouselItem,
  MessageBox,
  Select,
  Option,
  OptionGroup,
  Input,
  Button,
  Link,
  Loading,
  Pagination,
  Popconfirm,
  Message
} from 'element-ui'
import '~/assets/css/_theme.scss'

Vue.use(Carousel)
Vue.use(Link)
Vue.use(Popconfirm)
Vue.use(Button)
Vue.use(Select)
Vue.use(Pagination)
Vue.use(Loading)
Vue.use(Input)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(CarouselItem)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$loading = Loading.service
