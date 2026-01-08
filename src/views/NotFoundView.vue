<script setup lang="ts">
import { FiHome, FiArrowLeft } from 'vue-icons-plus/fi';

const props = defineProps<{
  path: string[],
}>();

const goBack = () => {
  window.history.back()
};

const goHome = () => {
  window.location.href = '/'
};
</script>

<template>
  <main class="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
    <!-- 背景 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    </div>

    <div class="max-w-4xl mx-auto text-center relative z-10">
      <!-- 404 -->
      <div class="mb-8">
        <h1 class="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent leading-none">
          404
        </h1>
      </div>

      <!-- 信息 -->
      <div class="mb-12">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
          页面未找到
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
        <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          抱歉，您访问的页面<code class="items-center bg-gray-800 text-white rounded-lg p-1.5 m-1" v-if="props.path">/{{ props.path.join("/") }}</code>似乎不存在或已被移除。
        </p>
      </div>

      <!-- 操作 -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button
          @click="goHome"
          class="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
        >
          <FiHome :size="20" />
          返回首页
        </button>
        <button
          @click="goBack"
          class="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
        >
          <FiArrowLeft :size="20" />
          返回上一页
        </button>
      </div>

      <!-- 诊断信息 -->
      <p class="text-gray-500 mt-8 text-sm">
        错误代码: 404 | 如果您认为这是一个错误，请
        <a href="/#contact" class="text-purple-400 hover:text-purple-300 transition-colors">联系我们</a>
      </p>
    </div>
  </main>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
