<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { FiChevronLeft, FiMenu } from 'vue-icons-plus/fi'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  >
    <div class="mt-2 w-[92%] max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 rounded-2xl backdrop-blur-md border border-zinc-900 bg-slate-900/70 shadow-lg">
      <div class="flex items-center justify-between h-16">
        <!-- Logo / Studio Name -->
        <button
          @click="scrollToTop"
          class="px-1.5 py-1.5 text-xl font-bold rounded-xl hover:bg-purple-400/10 text-white hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
        >
          <img width="35px" height="35px" src="/assets/tasaed.svg" alt="Logo"/>
          <span class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            TASA-Ed 工作室
          </span>
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
          <a
            class="header-a"
            href="/"
          >
            首页
          </a>
          <a
            class="header-a"
            href="/downloads"
          >
            下载
          </a>
          <a
            class="header-a"
            target="_blank"
            href="https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/"
          >
            Q群
          </a>
          <a class="header-a"
             target="_blank"
             href="https://wiki.tasaed.top/wiki/api.html"
          >
            PHP-API
          </a>
          <a class="header-a"
             target="_blank"
             href="https://wiki.tasaed.top/wiki/ourwebsite.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98"
          >
            常见问题
          </a>
          <a class="header-a"
             target="_blank"
             href="https://wiki.tasaed.top/wiki/tasaed.html"
          >
            关于我们
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-white p-2 rounded-md hover:bg-purple-400/10 duration-300"
        >
          <FiMenu
            v-if="!isMobileMenuOpen"
            size="24"
          />
          <FiChevronLeft
            v-else
            size="24"
          />
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden mt-2 w-[92%] max-w-6xl mx-auto py-4 px-2 rounded-lg backdrop-blur-md bg-slate-900/90 border border-zinc-900"
      >
        <a
          class="header-a-mobile"
          href="/"
        >
          首页
        </a>
        <a
          class="header-a-mobile"
          href="/downloads"
        >
          下载
        </a>
        <a
          class="header-a-mobile"
          target="_blank"
          href="https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/"
        >
          Q群
        </a>
        <a class="header-a-mobile"
           target="_blank"
           href="https://wiki.tasaed.top/wiki/api.html"
        >
          PHP-API
        </a>
        <a class="header-a-mobile"
           target="_blank"
           href="https://wiki.tasaed.top/wiki/ourwebsite.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98"
        >
          常见问题
        </a>
        <a class="header-a-mobile"
           target="_blank"
           href="https://wiki.tasaed.top/wiki/tasaed.html"
        >
          关于我们
        </a>
      </div>
    </transition>
  </nav>
</template>
