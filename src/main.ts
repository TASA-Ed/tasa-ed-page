import './assets/main.css'

import { type App, createApp } from 'vue'
import appPage from './App.vue'
import router from './router'

export const scrollTo = (id:string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth', // 平滑滚动
      block: 'start'      // 滚动到元素顶部
    });
  }
};

let app: App<Element>;

function mountApp() {
  if (app) {
    app.unmount()
  }
  app = createApp(appPage)
  app.use(router)
  app.mount('#app')
}

mountApp();
