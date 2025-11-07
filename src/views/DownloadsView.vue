<script setup lang="ts">
import { ref } from 'vue'
import downloadGroups from '../data/downloadGroups.json'
import { FiDownload, FiCalendar, FiArchive, FiGithub, FiFile, FiDisc } from 'vue-icons-plus/fi'
import { GoFileZip, GoFileBinary, GoFile } from 'vue-icons-plus/go'
import type {IconType} from "vue-icons-plus";

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

const groups = ref<DownloadGroup[]>(downloadGroups.groups)

const getThumbnailIcon = (thumbnail: string) => {
  const icons: Record<string, IconType> = {
    github: FiGithub,
    archive: FiArchive,
    zip: GoFileZip,
    iso: FiDisc,
    '01': GoFileBinary
  }
  return icons[thumbnail] || GoFile;
}

const formatSize = (size?: string) => {
  return size || ''
}

const formatTime = (time: string) => {
  if (time === '开发中' || time === '已归档') {
    return time
  }
  return time
}
</script>

<template>
  <div class="min-h-screen pt-24 pb-16 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
          下载中心
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p class="text-gray-400 mt-6 text-lg">
          获取我们的项目和工具
        </p>
      </div>

      <!-- Download Groups -->
      <div class="space-y-12">
        <div
          v-for="group in groups"
          :key="group.id"
          class="group-section"
        >
          <!-- Group Title -->
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            {{ group.title }}
          </h2>

          <!-- Download Items -->
          <div class="space-y-4">
            <div
              v-for="item in group.items"
              :key="item.id"
              class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 overflow-hidden group/item"
            >
              <div class="p-6 flex flex-col md:flex-row md:items-center gap-6 ">
                <!-- Left Side: Icon, Title, Description -->
                <div class="flex-1 flex items-start gap-4">
                  <!-- Icon -->
                  <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center text-3xl group-hover/item:scale-110 transition-transform duration-300">
                    <component :is="getThumbnailIcon(item.thumbnail)" size="40" color="#f8fafc" />
                  </div>

                  <!-- Title and Description -->
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg md:text-xl font-semibold text-white mb-2 group-hover/item:text-purple-400 transition-colors">
                      {{ item.title }}
                    </h3>
                    <p class="text-gray-400 text-sm md:text-base">
                      {{ item.description }}
                    </p>
                  </div>
                </div>

                <!-- Right Side: Download Button, Date, Size -->
                <div class="flex flex-col items-end gap-3 flex-shrink-0">
                  <!-- Download Button -->
                  <a
                    :href="item.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap flex items-center gap-2"
                  >
                    <FiDownload size="20" />
                    下载
                  </a>

                  <!-- Meta Info -->
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
</style>
