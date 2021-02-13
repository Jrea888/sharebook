import Vue from 'vue'

// 按需导入组件
import {
  Upload,
  Message,
  Select,
  Option,
  DatePicker,
  Switch,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  MessageBox,
  Form,
  FormItem,
  Input,
  Button,
  Col,
  TimePicker,
  Dialog,
  Table,
  TableColumn,
  Pagination,
} from 'element-ui'

import Timeline from './timeline/index.js'
import TimelineItem from './timeline-item/index.js'

// 注册为全局组件
Vue.use(Upload)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Switch)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Button)
Vue.use(Col)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(TimePicker)
Vue.use(Timeline)
Vue.use(TimelineItem)

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
