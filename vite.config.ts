import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import Sitemap from 'vite-plugin-sitemap';
//import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://www.tasaed.top',
      dynamicRoutes: ['/downloads'],
      outDir: 'dist',
      readable: true,
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.8,
      generateRobotsTxt: true,
      robots: [{
        userAgent: '*',
        allow: '/',
      }],
      externalSitemaps: ["https://www.tasaed.top/blog/sitemap-0.xml"]
    })
    //visualizer({ open:true })
  ],
  server: {
    host: '0.0.0.0', // 监听所有地址
    port: 5173, // 指定启动端口
    open: true // 启动后自动打开浏览器
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    target: 'es2020',
    rolldownOptions: {
      output: {
        advancedChunks: {
          groups: [
            { name: 'vendor-icon',test: /\/vue-icons-plus?/ },
            { name: 'vendor-vue',test: /\/vue(?:-router)?/ }
          ]
        }
      },
      input: {
        main: 'index.html'
      }
    }
  }
});
