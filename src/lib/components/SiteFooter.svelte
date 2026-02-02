<script lang="ts">
  import type {FooterBadge} from "$lib";

  const currentYear = new Date().getFullYear();

  const footerBadges: FooterBadge[] = [
    {
      id: 'badge-1',
      label: '技术支持：Svelte',
      href: 'https://svelte.dev',
      icon: 'https://img.shields.io/badge/Svelte-blue?style=flat&color=ff3e00&labelColor=0a2639&logo=svelte'
    },
    {
      id: 'badge-2',
      label: 'SCP 2.5D',
      href: 'https://github.com/TASA-Ed/scp25d',
      icon: 'https://img.shields.io/badge/SCP-2.5D-blue?style=flat-square&color=A8A8A8&labelColor=555555&logo=scpfoundation'
    },
    {
      id: 'badge-3',
      label: '凌霞软件',
      href: 'https://www.lxware.cn?code=tasaed',
      icon: 'https://img.shields.io/badge/lxware-purple?style=flat&color=677fd7&labelColor=eeeeee&logo=1panel&logoColor=4b68ce'
    },
    {
      id: 'badge-4',
      label: '萌ICP备20242486号',
      href: 'https://icp.gov.moe/?keyword=20242486',
      icon: 'https://img.shields.io/badge/%E8%90%8CICP%E5%A4%87-20242486%E5%8F%B7-blue?style=flat&color=f67280&labelColor=ff165d'
    },
    {
      id: 'badge-5',
      label: '鹰歌游戏引擎文档',
      href: 'https://docs-mf.tasaed.top/',
      icon: 'https://img.shields.io/badge/Maker-Frame-blue?style=flat-square&color=99CC66&labelColor=FFFF66&logo=github&logoColor=000000'
    },
    {
      id: 'badge-6',
      label: '博客：Astro',
      href: 'https://astro.build',
      icon: 'https://img.shields.io/badge/Astro-blue?style=plastic&color=bc52ee&labelColor=aecbfa&logo=astro'
    },
  ];
</script>

<footer class="border-t border-slate-200/70 py-12 dark:border-slate-800/70">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-6 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <div class="space-y-3">
            <p class="max-w-md text-base text-slate-500 dark:text-slate-400">
                Copyright © 2020 - {currentYear} By TASA-Ed 工作室
            </p>
        </div>
        <div class="flex flex-wrap items-center gap-4 text-sm">
            {#each footerBadges as badge, index(index)}
                <a
                        aria-label={badge.label}
                        title={badge.label}
                        href={badge.href}
                        rel="external"
                        target="_blank"
                >
                    <img class="rounded-sm" src={badge.icon} data-lazy-src={badge.icon} alt={badge.label}
                         loading="lazy"/>
                </a>
            {/each}
        </div>
    </div>
</footer>
