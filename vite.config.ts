import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
//import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
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
})
