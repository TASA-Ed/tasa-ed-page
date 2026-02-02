<script lang="ts">
  import {onMount} from 'svelte';
  import {ArrowUpRight, Github, Mail, Users} from '@lucide/svelte';
  import {isExternalLink, type Project, type SocialLink, type Stat} from "$lib";
  import {resolve} from "$app/paths";

  const email = 'studio@tasaed.top';

  onMount(() => {
    window.document.title = "TASA-Ed 官网 - TASA-Ed 工作室";
  });

  const socialLinks: SocialLink[] = [
    {
      id: 'email',
      label: 'Email',
      href: email,
      icon: Mail,
      display: email
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/TASA-Ed',
      icon: Github,
      display: '@TASA-Ed'
    },
    {
      id: 'qq',
      label: 'QQ',
      href: 'https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/',
      icon: Users,
      display: '597524393'
    }
  ];

  const projects: Project[] = [
    {
      id: "project-1",
      title: 'SCP 2.5D',
      href: 'https://github.com/TASA-Ed/scp25d',
      description: '工作室的第一个项目，一款 SCP 基金会题材游戏。',
      tags: ['游戏', 'SCP 基金会']
    },
    {
      id: "project-2",
      title: '鹰歌游戏引擎文档',
      href: 'https://docs-mf.tasaed.top',
      description: '一个关于鹰歌游戏引擎的文档。',
      tags: ['游戏引擎', '文档', '公益']
    },
    {
      id: "project-3",
      title: 'Mi 计划',
      href: 'https://github.com/TASA-Ed/iamiplan',
      description: '一个简单的软件，可以用来做一些笔记，或者记一些账单。',
      tags: ['应用']
    },
    {
      id: "project-4",
      title: '开源 - 计算机制造商',
      href: '#',
      description: '一款经营模拟题材游戏。目前正在开发中。',
      tags: ['游戏', '模拟']
    }
  ];

  const stats: Stat[] = [
    {id: "stat-1", value: '10+', label: '开源项目'},
    {id: "stat-2", value: '5 年+', label: '工作室成立时间'},
    {id: "stat-3", value: '1 周+', label: '平均完成时间'}
  ];
</script>

<section class="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16">
    <div class="flex flex-col gap-6">
        <div class="space-y-6">
            <h1 class="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-6xl">
                TASA-Ed 工作室
            </h1>
            <p class="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                由德二吹风机创立的一个专注于自媒体，软件游戏开发，网站搭建的工作室。而且，我们喜欢开源！
            </p>
        </div>
        <div class="flex flex-wrap items-center gap-4">
            <a
                    class="inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700 motion-reduce:transition-none dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                    href="#work"
                    title="查看作品"
                    aria-label="查看作品"
            >
                查看作品
                <ArrowUpRight class="h-4 w-4" aria-hidden="true"/>
            </a>
            <a
                    class="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-900 hover:text-slate-900 motion-reduce:transition-none dark:border-slate-700 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
                    href="#contact"
                    title="联系我们"
                    aria-label="联系我们"
            >
                联系我们
            </a>
        </div>
    </div>
    <div class="grid gap-6 rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-sm text-slate-600 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300 md:grid-cols-3">
        {#each stats as item(item.id)}
            <div class="space-y-2 space-x-4">
                <p class="text-2xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
                <p>{item.label}</p>
            </div>
        {/each}
    </div>
</section>

<section id="work" class="mx-auto max-w-6xl px-6 pb-20">
    <div class="flex flex-col gap-4 pb-10 md:flex-row md:items-end md:justify-between">
        <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                我们一路走来的成就</p>
            <h2 class="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">精选项目</h2>
        </div>
        <p class="max-w-xl text-sm text-slate-600 dark:text-slate-300">
            从游戏到网站，涵盖多方面的项目。
        </p>
    </div>
    <div class="grid gap-6 md:grid-cols-2">
        {#each projects as project(project.id)}
            {#if isExternalLink(project.href)}
                <a
                        title={`${project.title} 项目详情`}
                        aria-label={`${project.title} 项目详情`}
                        class="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition-colors duration-200 hover:border-slate-400 motion-reduce:transition-none dark:border-slate-800/70 dark:bg-slate-900/60 dark:hover:border-slate-600"
                        href={project.href}
                        rel="external"
                        target="_blank"
                >
                    <div class="space-y-3">
                        <div class="flex items-center justify-between text-sm font-semibold text-slate-900 dark:text-white">
                            <span>{project.title}</span>
                            <ArrowUpRight
                                    class="h-4 w-4 text-slate-400 transition-colors duration-200 group-hover:text-slate-900 dark:group-hover:text-white"
                                    aria-hidden="true"/>
                        </div>
                        <p class="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                        <div class="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                            {#each project.tags as tag, index (index)}
                                <span class="rounded-full border border-slate-200/80 px-3 py-1 dark:border-slate-700/80">{tag}</span>
                            {/each}
                        </div>
                    </div>
                </a>
            {:else}
                <a
                        title={`${project.title} 项目详情`}
                        aria-label={`${project.title} 项目详情`}
                        class="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition-colors duration-200 hover:border-slate-400 motion-reduce:transition-none dark:border-slate-800/70 dark:bg-slate-900/60 dark:hover:border-slate-600"
                        href={resolve(`/${project.href}`)}
                >
                    <div class="space-y-3">
                        <div class="flex items-center justify-between text-sm font-semibold text-slate-900 dark:text-white">
                            <span>{project.title}</span>
                            <ArrowUpRight
                                    class="h-4 w-4 text-slate-400 transition-colors duration-200 group-hover:text-slate-900 dark:group-hover:text-white"
                                    aria-hidden="true"/>
                        </div>
                        <p class="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                        <div class="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                            {#each project.tags as tag, index (index)}
                                <span class="rounded-full border border-slate-200/80 px-3 py-1 dark:border-slate-700/80">{tag}</span>
                            {/each}
                        </div>
                    </div>
                </a>
            {/if}
        {/each}
    </div>
</section>

<section id="contact" class="mx-auto max-w-6xl px-6 pb-24">
    <div class="grid gap-10 rounded-3xl border border-slate-200/70 bg-white/80 p-10 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60 md:grid-cols-[1.2fr_1fr]">
        <div class="space-y-4">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">联系我们</p>
            <h2 class="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
                想联系我们或一起做点有意思的项目？</h2>
            <p class="text-sm text-slate-600 dark:text-slate-300">
                通过邮件、GitHub 或社交媒体联系我们，我们会在 24 小时内回复。
            </p>
        </div>
        <div class="space-y-4 rounded-2xl border border-slate-200/70 bg-white/90 p-6 dark:border-slate-800/70 dark:bg-slate-950/70">
            <p class="text-sm font-semibold text-slate-900 dark:text-white">联系方式</p>
            <div class="space-y-4">
                {#each socialLinks as link(link.id)}
                    {#if isExternalLink(link.href)}
                        <a class="flex cursor-pointer items-center gap-3 text-base font-medium text-slate-900 transition-colors duration-200 hover:text-slate-600 motion-reduce:transition-none dark:text-white dark:hover:text-slate-300"
                           href={link.href}
                           target="_blank"
                           rel="external"
                           title={link.label}
                           aria-label={link.label}
                        >
                            <svelte:component this={link.icon} class="h-5 w-5 shrink-0" aria-hidden="true"/>
                            <span class="break-all">{link.display}</span>
                        </a>
                    {:else}
                        <a class="flex cursor-pointer items-center gap-3 text-base font-medium text-slate-900 transition-colors duration-200 hover:text-slate-600 motion-reduce:transition-none dark:text-white dark:hover:text-slate-300"
                           href={`mailto:${link.href}`}
                           title={link.label}
                           aria-label={link.label}
                        >
                            <svelte:component this={link.icon} class="h-5 w-5 shrink-0" aria-hidden="true"/>
                            <span class="break-all">{link.display}</span>
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</section>
