import { createApp, defineComponent, h } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus, { ElIcon } from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './reset.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as utils from './utils'

const app = createApp(App)

// 封装图标组件, el-aim 的形式调用 (el-icon 外层包裹)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  const componentName = 'el-icon' + utils.toKebabCase(key)

  app.component(
    componentName,
    defineComponent({
      render() {
        return h(ElIcon, () => h(component))
      },
    })
  )
}

app.use(router).use(ElementPlus)

app.mount('#app')
