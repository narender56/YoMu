import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

// Load prefills
import './setup'
import router from './router'
import store from './store'
import components from './components'

//Styles
import './styles/main.scss'
import 'element-plus/dist/index.css'

// Plugins
import GlobalConfigPlugin from './plugins/config'

// Directives
import ClickOutside from './directives/click-outside'

const Root = createApp(App)

Root.directive('click-outside', ClickOutside)

for (const key in components) {
  if (components.hasOwnProperty(key)) {
    Root.component(components[key].name, components[key])
  }
}

Root
  .use(store)
  .use(router)
  .use(GlobalConfigPlugin)
  .use(ElementPlus, { zIndex: 999, size: 'small' })
  .mount('#app')
