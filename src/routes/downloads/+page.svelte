<script lang="ts">
	import {onMount} from 'svelte';
	import {Archive, Download, Github, FileDigit, Calendar, File, Disc} from '@lucide/svelte';
	import {type DownloadGroup} from '$lib';

	const groups: DownloadGroup[] = [
		{
			id: "scp25d",
			title: "SCP 2.5D下载",
			items: [
				{
					id: 'scp25d-github',
					title: 'SCP：2.5D GitHub',
					description: 'SCP：2.5D',
					href: 'https://github.com/tasa-ed/scp25d/',
					icon: Github,
					date: '开发中'
				},
				{
					id: "scp25d-se-github",
					title: "SCP：2.5D - SE GitHub",
					description: "SCP：2.5D 的剧本编辑器版本",
					href: 'https://github.com/tasa-ed/scp25d-SE/',
					icon: Github,
					date: '已归档'
				},
				{
					id: "scp25d-se-archive1",
					title: "SCP：2.5D - SE 版本存档",
					description: "SCP：2.5D - SE 的所有版本存档（OneDrive）",
					href: 'https://1drv.ms/f/c/568ae44e1937060b/Ei5p0i5BjlRPk6XY3ZY7SM8BZ2yUEuUD595KLNpcLvPp4g?e=Ny6CjV',
					icon: Archive,
					date: '2025-10-02',
          size: '719 MB'
				},
				{
					id: "scp25d-se-archive2",
					title: "SCP：2.5D - SE 版本存档",
					description: "SCP：2.5D - SE 的所有版本存档（百度网盘，提取码：S25D）",
					href: 'https://pan.baidu.com/s/1I-1hTPN6UMhj9RXN1Ftk2A?pwd=S25D',
					icon: Archive,
					date: '2025-10-02',
					size: '719 MB'
				}
			]
		},
		{
			id: 'software',
			title: 'TASA-Ed 软件下载',
			items: [
				{
					id: "makerframe-launcher-source",
					title: "鹰歌游戏启动器 V2 GitHub",
					description: "鹰歌游戏启动器 V2 源代码",
					icon: Github,
					href: "https://github.com/TASA-Ed/MakerFrameLauncherV2",
					date: "开发中"
				},
				{
					id: "makerframe-launcher-32",
					title: "鹰歌游戏启动器 V2 32",
					description: "鹰歌游戏启动器 V2 v2.0.2.1 x86（32位）",
					size: "98.6 KB",
					icon: FileDigit,
					href: "https://api.tasaed.top/otoe/?otoid=mfl32",
					date: "2025-10-14"
				},
				{
					id: "makerframe-launcher-64",
					title: "鹰歌游戏启动器 V2 64",
					description: "鹰歌游戏启动器 V2 v2.0.2.1 x64（64位）",
					size: "103 KB",
					icon: FileDigit,
					href: "https://api.tasaed.top/otoe/?otoid=mfl64",
					date: "2025-10-14"
				},
				{
					id: "miplan-source",
					title: "Mi计划 GitHub",
					description: "一个简单的软件，可以用来做一些笔记，或者记一些账单",
					icon: Github,
					href: "https://github.com/TASA-Ed/iamiplan",
					date: "开发中"
				},
				{
					id: "miplan-32",
					title: "Mi计划 32",
					description: "Mi计划 v0.3.2 32位",
					size: "4.11 MB",
					icon: FileDigit,
					href: "https://api.tasaed.top/otoe/?otoid=mi32",
					date: "2025-08-12"
				},
				{
					id: "miplan-64",
					title: "Mi计划 64",
					description: "Mi计划 v0.3.2 64位",
					size: "4.09 MB",
					icon: FileDigit,
					href: "https://api.tasaed.top/otoe/?otoid=mi64",
					date: "2025-08-12"
				},
				{
					id: "time-8-0",
					title: "时间8.0",
					description: "时间 v8.0",
					size: "5.71 MB",
					icon: FileDigit,
					href: "https://api.tasaed.top/otoe/?otoid=time8",
					date: "2026-01-26"
				}
			]
		},
		{
			id: "sgas",
			title: "SCP游戏助手存档",
      items: [
	      {
		      id: "sgas-archive",
		      title: "SCP 游戏助手存档",
		      description: "SCP 游戏助手的所有版本存档（百度网盘，提取码：SGAs）",
		      size: "59.8 MB",
		      icon: Archive,
		      href: "https://pan.baidu.com/s/1l9Z9MfEwGGpvdIETPGck1Q?pwd=SGAs",
		      date: "2022-03-08"
	      }
      ]
    },
		{
			id: "edlest",
      title: "与之海edlest整理的文件",
      items: [
	      {
		      id: "kb4474419",
		      title: "KB4474419",
		      description: "KB4474419（123网盘，提取码：lest）",
		      size: "174.46MB",
		      icon: Disc,
		      href: "https://www.123pan.com/s/0JA9-FWYmH.html",
		      date: "2022-06-21"
	      },
	      {
		      id: "kb4474419-2",
		      title: "KB4474419-2",
		      description: "KB4474419（百度网盘，提取码：p8ny）",
		      size: "174.46MB",
		      icon: Disc,
		      href: "https://pan.baidu.com/s/1s4LcwGolNFVjpSwwR4afng?pwd=p8ny",
		      date: "2022-06-21"
	      },
	      {
		      id: "kb4474419-3",
		      title: "KB4474419-3",
		      description: "KB4474419（天翼云盘，提取码：3ltv）",
		      size: "174.46MB",
		      icon: Disc,
		      href: "https://cloud.189.cn/web/share?code=6Jnmy2BVVrQr",
		      date: "2022-06-21"
	      },
	      {
		      id: "kb2919355",
		      title: "KB2919355",
		      description: "KB2919355（百度网盘，提取码：n6er）",
		      size: "1.3GB",
		      icon: Disc,
		      href: "https://pan.baidu.com/s/1QqsIH8UzzpMgaRa4_FbR9w?pwd=n6er",
		      date: "2022-08-07"
	      },
	      {
		      id: "kb2919355-2",
		      title: "KB2919355-2",
		      description: "KB2919355（天翼云盘，提取码：9fvk）",
		      size: "1.3GB",
		      icon: Disc,
		      href: "https://cloud.189.cn/web/share?code=UzeayyfMn6Vr",
		      date: "2022-08-07"
	      }
      ]
    }
	];

	onMount(() => {
		window.document.title = 'TASA-Ed 官网 - 下载';
	});
</script>

<section class="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-10 pt-16">
  <div class="space-y-4">
    <h1 class="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">下载中心</h1>
    <p class="max-w-2xl text-base text-slate-600 dark:text-slate-300">
      获取我们的项目和工具
    </p>
  </div>
</section>

<section class="mx-auto max-w-6xl space-y-10 px-6 pb-24">
  {#each groups as group (group.id)}
    <div class="space-y-4">
      <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div class="space-y-2">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">分类</p>
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl">{group.title}</h2>
        </div>
      </div>

      <div class="grid gap-4">
        {#each group.items as item (item.id)}
          <div
            class="flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60 md:flex-row md:items-center md:justify-between hover:shadow-md dark:hover:border-slate-500/70">
            <div class="flex items-start gap-4">
              <div
                class="rounded-2xl border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-700/70 dark:bg-slate-950/70">
                <svelte:component this={item.icon} class="h-6 w-6 text-slate-700 dark:text-slate-200"
                                  aria-hidden="true"/>
              </div>
              <div class="space-y-2">
                <p class="text-base font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p class="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            </div>

            <div class="flex flex-col items-end gap-3 sm:flex-row sm:items-center">
              <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span
                  class="flex gap-1 rounded-full border border-slate-200/80 px-3 py-1 dark:border-slate-700/80"><Calendar class="h-4 w-4 text-slate-700 dark:text-slate-200" aria-hidden="true"/>{item.date}</span>
                {#if item.size}
                  <span
                    class="flex gap-1 rounded-full border border-slate-200/80 px-3 py-1 dark:border-slate-700/80"><File class="h-4 w-4 text-slate-700 dark:text-slate-200" aria-hidden="true"/>{item.size}</span>
                {/if}
              </div>

              <a
                class="inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700 motion-reduce:transition-none dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                href={item.href}
                target="_blank"
                rel="external"
                title={`下载 ${item.title}`}
                aria-label={`下载 ${item.title}`}
              >
                下载
                <Download class="h-4 w-4" aria-hidden="true"/>
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>
