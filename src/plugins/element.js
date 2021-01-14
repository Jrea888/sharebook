import Vue from 'vue'

// 按需导入组件
import {
  Upload,
  Message,
  MessageBox,
  Form,
  FormItem,
  Input,
  Button,
} from 'element-ui'

import Timeline from './timeline/index.js'
import TimelineItem from './timeline-item/index.js'

// 注册为全局组件
Vue.use(Upload)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Timeline)
Vue.use(TimelineItem)

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
