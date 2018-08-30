import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VConsole from 'vconsole';
import { Toast, Loadmore, MessageBox, Popup } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.prototype.$toast = Toast;
Vue.prototype.$messagebox = MessageBox;
Vue.component(Loadmore.name, Loadmore)
Vue.component(Popup.name, Popup);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if(to.query.isDebug || from.query.isDebug){
    if(!window.isDebug){
      window.isDebug = true;
      new VConsole();
    }
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
