import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: '0.0.0.0', // 监听所有地址
		port: 5173, // 指定启动端口
		open: true // 启动后自动打开浏览器
	}
});
