import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
//import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
        //visualizer({ open: true })
    ],
    server: {
        host: '0.0.0.0', // 监听所有地址
        port: 5173, // 指定启动端口
        open: true // 启动后自动打开浏览器
    },
    build: {
        rolldownOptions: {
            output: {
                advancedChunks: {
                    groups: [
                        { name: 'vendor-react',test: /\/react(?:-dom)?/ },
                        { name: 'vendor-framer-motion',test: /\/framer-motion?/ }
                    ]
                }
            },
            input: {
                main: 'index.html',
                downloads: 'downloads/index.html'
            }
        }
    }
})
