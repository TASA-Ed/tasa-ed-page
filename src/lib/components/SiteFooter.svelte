<script lang="ts">
  import type { FooterBadge } from "$lib";

  const currentYear = new Date().getFullYear();

  const footerBadges: FooterBadge[] = [
    {
      id: "badge-1",
      label: "技术支持：Svelte",
      href: "https://svelte.dev",
      icon: "https://img.shields.io/badge/Svelte-18181b?style=flat&logo=svelte&logoColor=ffffff",
      width: "63",
      height: "20"
    },
    {
      id: "badge-2",
      label: "凌霞软件",
      href: "https://www.lxware.cn?code=tasaed",
      icon: "https://img.shields.io/badge/lxware-18181b?style=flat&logo=1panel&logoColor=ffffff",
      width: "65",
      height: "20"
    },
    {
      id: "badge-4",
      label: "鹰歌游戏引擎文档",
      href: "https://docs-mf.tasaed.top/",
      icon: "https://img.shields.io/badge/Maker--Frame-18181b?style=flat&logo=github&logoColor=ffffff",
      width: "101",
      height: "20"
    },
    {
      id: "badge-3",
      label: "博客：Astro",
      href: "https://astro.build",
      icon: "https://img.shields.io/badge/Astro-18181b?style=flat&logo=astro&logoColor=ffffff",
      width: "57",
      height: "20"
    }
  ];
</script>

<footer class="border-t border-zinc-200/50 py-10 dark:border-zinc-800/50">
  <div
    class="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-xs text-zinc-500 dark:text-zinc-300 md:flex-row md:items-center lg:justify-between"
  >
    <!-- 左侧：版权声明 -->
    <div>
      <p class="text-sm font-normal">
        Copyright © 2020 - {currentYear} By TASA-Ed 工作室
      </p>
    </div>

    <!-- 中间：备案信息（优化了对齐与悬停交互） -->
    <div class="flex flex-col gap-1.5 space-y-2">
      <a
        class="group inline-flex items-center text-sm gap-1.5 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        href="https://beian.miit.gov.cn/#/Integrated/index"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/icp.webp"
          alt="ICP"
          class="h-4 w-4 object-contain transition-opacity"
          width="20"
          height="20"
          loading="lazy"
        />
        <span class="underline-offset-4 group-hover:underline">蒙ICP备 2026001527号-1</span>
      </a>
      <a
        class="group inline-flex items-center text-sm gap-1.5 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        href="https://beian.mps.gov.cn/#/query/webSearch?code=15010202151757"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/ga.webp"
          alt="GA"
          class="h-4 w-4 object-contain transition-opacity"
          width="20"
          height="20"
          loading="lazy"
        />
        <span class="underline-offset-4 group-hover:underline">蒙公网安备 15010202151757号</span>
      </a>
    </div>

    <!-- 右侧：徽章（融入黑白风：默认无彩色/低不透明度，悬停时恢复色彩） -->
    <div class="flex flex-wrap items-center lg:gap-3 gap-2">
      {#each footerBadges as badge (badge.id)}
        <a
          aria-label={badge.label}
          title={badge.label}
          href={badge.href}
          rel="noopener noreferrer"
          target="_blank"
          class="transition-all duration-300 opacity-85 hover:opacity-100"
        >
          <img
            class="rounded-sm"
            src={badge.icon}
            alt={badge.label}
            width={badge.width}
            height={badge.height}
            loading="lazy"
          />
        </a>
      {/each}
    </div>
  </div>
</footer>
