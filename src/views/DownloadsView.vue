<script setup lang="ts">
import { ref } from 'vue';
import downloadGroups from '@/data/downloadGroups.json';
import { FiDownload, FiCalendar, FiFile } from 'vue-icons-plus/fi';
import { scrollTo } from "@/main.ts";
import IconImg from "@/components/IconImg.vue";

interface DownloadItem {
  id: string
  title: string
  description: string
  thumbnail: string
  href: string
  time: string
  size?: string
}

interface DownloadGroup {
  id: string
  title: string
  items: DownloadItem[]
}

const groups = ref<DownloadGroup[]>(downloadGroups.groups);

const formatSize = (size?: string) => {
  return size || ''
};

const formatTime = (time: string) => {
  if (time === '开发中' || time === '已归档') {
    return time
  }
  return time;
};
</script>

<template>
  <!-- 背景 -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
  </div>

  <div class="min-h-screen pt-24 pb-16 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
          下载中心
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p class="text-gray-400 mt-6 text-lg">
          获取我们的项目和工具
        </p>
      </div>

      <!-- 下载项 -->
      <div class="space-y-12">
        <div
          v-for="group in groups"
          :key="group.id"
          :id="group.title"
          class="group-section"
        >
          <!-- 项标题 -->
          <a :href="'#' + group.title" @click.prevent="scrollTo(group.title)">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              {{ group.title }}
            </h2>
          </a>

          <!-- 项内容 -->
          <div class="space-y-4">
            <div
              v-for="item in group.items"
              :key="item.id"
              class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 overflow-hidden group/item"
            >
              <div class="p-6 flex flex-col md:flex-row md:items-center gap-6 ">
                <div class="flex-1 flex items-start gap-4">
                  <!-- 图标 -->
                  <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center text-3xl group-hover/item:scale-110 transition-transform duration-300">
                    <IconImg :thumbnail="item.thumbnail" />
                  </div>

                  <!-- 标题和内容 -->
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg md:text-xl font-semibold text-white mb-2 group-hover/item:text-purple-400 transition-colors">
                      {{ item.title }}
                    </h3>
                    <p class="text-gray-400 text-sm md:text-base">
                      {{ item.description }}
                    </p>
                  </div>
                </div>

                <div class="flex flex-col items-end gap-3 flex-shrink-0">
                  <!-- 下载按钮 -->
                  <a
                    :href="item.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex items-center gap-2"
                  >
                    <FiDownload size="20" />
                    下载
                  </a>

                  <!-- 元数据 -->
                  <div class="flex flex-col items-end gap-1 text-sm">
                    <div v-if="item.size" class="text-gray-400 flex items-center gap-1">
                      <FiFile size="15" />
                      {{ formatSize(item.size) }}
                    </div>
                    <div class="text-gray-400 flex items-center gap-1">
                      <FiCalendar size="15" />
                      {{ formatTime(item.time) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group-section:not(:last-child) {
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(100, 116, 139, 0.2);
}

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
