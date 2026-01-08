<script setup lang="ts">
import { ref } from 'vue';
import { FiArrowDown, FiMail, FiGithub, FiUsers } from 'vue-icons-plus/fi';
import { scrollTo } from "@/main.ts";
import IconImg from "@/components/IconImg.vue";

const email = ref('');
const message = ref('');
const emailSent = ref(false);

const services = [
  {
    icon: 'scp-2.5d_icon.png',
    title: 'SCP 2.5D',
    description: '工作室的第一个项目，一款 SCP 基金会题材游戏。'
  },
  {
    icon: 'TwemojiEagle.svg',
    title: '鹰歌游戏引擎文档',
    description: '一个关于鹰歌游戏引擎的文档。'
  },
  {
    icon: 'miplan_icon.png',
    title: 'Mi 计划',
    description: '一个简单的软件，可以用来做一些笔记，或者记一些账单。'
  },
  {
    icon: 'trophy',
    title: '开源 - 计算机制造商',
    description: '一款经营模拟题材游戏。目前正在开发中。'
  }
];

const sendEmail = () => {
  if (email.value && message.value) {
    const subject = encodeURIComponent('来自官网的咨询');
    const body = encodeURIComponent(message.value);
    window.location.href = `mailto:studio@tasaed.top?subject=${subject}&body=${body}`;

    emailSent.value = true;
    setTimeout(() => {
      emailSent.value = false
      email.value = ''
      message.value = ''
    }, 3000);
  }
};
</script>

<template>
  <main>
    <!-- 背景 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    </div>
    <!-- 主内容 -->
    <section id="hero" class="min-h-screen flex items-center justify-center px-4 pt-0 relative overflow-hidden">
      <div class="max-w-5xl mx-auto text-center relative z-10">
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">TASA-Ed</span>
          工作室
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          由德二吹风机创立的一个专注于自媒体，软件游戏开发，网站搭建的工作室。而且，我们喜欢开源！
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/blog"
            class="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            查看博客
          </a>
          <a
            href="#contact"
            @click.prevent="scrollTo('contact')"
            class="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300"
          >
            联系我们
          </a>
        </div>
      </div>

      <!-- 箭头 -->
      <a
        href="#services"
        @click.prevent="scrollTo('services')"
        title="跳至主要内容"
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FiArrowDown color="#BDBDBD"/>
      </a>
    </section>

    <!-- 项目 -->
    <section id="services" class="py-24 px-4 bg-slate-900/50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
            我们的项目
          </h2>
          <div
            class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p class="text-gray-400 mt-6 max-w-2xl mx-auto">
            仅展示部分项目。
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <IconImg :thumbnail="service.icon" :size=50 />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray-400">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系 -->
    <section id="contact" class="py-24 px-4 relative">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
            联系我们
          </h2>
          <div
            class="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p class="text-gray-400 mt-6">
            想联系我们或一起做点有意思的项目？给我们发邮件或者通过下面的表单快速联系。
          </p>
        </div>

        <div
          class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 md:p-12">
          <div v-if="emailSent"
               class="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-center">
            消息已准备发送！您的邮件客户端将会打开。
          </div>

          <form @submit.prevent="sendEmail" class="space-y-6">
            <div>
              <label for="email" class="block text-gray-300 mb-2 font-medium">
                您的邮箱
              </label>
              <input
                v-model="email"
                type="email"
                id="email"
                required
                placeholder="example@example.com"
                class="home-input"
                autocomplete="email"
              />
            </div>

            <div>
              <label for="message" class="block text-gray-300 mb-2 font-medium">
                您的消息
              </label>
              <textarea
                v-model="message"
                id="message"
                required
                rows="6"
                placeholder="内容"
                class="home-input resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              title="发送邮件"
              class="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              发送消息
            </button>
          </form>

          <div class="mt-8 pt-8 border-t border-slate-700 text-center">
            <p class="text-gray-400 mb-4">联系方式</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="home-div">
                <h4 class="home-h4">邮箱</h4>
                <a
                  class="home-a" href="mailto:studio@tasaed.top"
                >
                  <FiMail size=18 />
                  studio@tasaed.top
                </a>
              </div>
              <div class="home-div">
                <h4 class="home-h4">GitHub</h4>
                <a
                  class="home-a" href="https://github.com/orgs/TASA-Ed" target="_blank"
                >
                  <FiGithub size=18 />
                  @TASA-Ed
                </a>
              </div>
              <div class="home-div">
                <h4 class="home-h4">QQ群</h4>
                <a
                  class="home-a" href="https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/" target="_blank"
                >
                  <FiUsers size=18 />
                  597524393
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
