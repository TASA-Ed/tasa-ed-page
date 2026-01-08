import '@/assets/main.css';

import { type App, createApp } from 'vue';
import appPage from '@/App.vue';
import router from '@/router';
import type { IconType } from "vue-icons-plus";
import { FiArchive, FiDisc, FiGithub } from "vue-icons-plus/fi";
import { GoFile, GoFileBinary, GoFileZip, GoTrophy } from "vue-icons-plus/go";

export function scrollTo (id:string):void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth', // 平滑滚动
      block: 'start'      // 滚动到元素顶部
    });
  }
}

export function getThumbnailIcon(thumbnail: string): IconType | string {
  const icons: Record<string, IconType> = {
    github: FiGithub,
    archive: FiArchive,
    zip: GoFileZip,
    iso: FiDisc,
    trophy: GoTrophy,
    '01': GoFileBinary
  };

  // 图标组件
  if (icons[thumbnail]) {
    return icons[thumbnail]
  }

  // 图片文件名
  if (thumbnail.endsWith('.png') || thumbnail.endsWith('.jpg') || thumbnail.endsWith('.svg')) {
    return `/assets/${thumbnail}`;
  }

  // 无
  return GoFile;
}

let app: App<Element>;

function mountApp() {
  if (app) {
    app.unmount();
  }
  app = createApp(appPage);
  app.use(router);
  app.mount('#app');
}

mountApp();
