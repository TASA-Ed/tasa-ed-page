<script lang="ts">
  import { onMount } from "svelte";
  import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
  import Mail from "@lucide/svelte/icons/mail";
  import SiGithub from '@icons-pack/svelte-simple-icons/icons/SiGithub';
  import SiQq from '@icons-pack/svelte-simple-icons/icons/SiQq';
  import type { Project, SocialLink, Directions } from "$lib";
  import { isExternalLink } from "$lib/utils";
  import { resolve } from "$app/paths";

  const email = "studio@tasaed.top";

  const socialLinks: SocialLink[] = [
    {
      id: "email",
      label: "Email",
      href: email,
      icon: Mail,
      display: email
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/TASA-Ed",
      icon: SiGithub,
      display: "@TASA-Ed"
    },
    {
      id: "qq",
      label: "QQ",
      href: "https://qm.qq.com/q/nC2N5Y1UX0",
      icon: SiQq,
      display: "597524393"
    }
  ];

  const projects: Project[] = [
    {
      id: "project-1",
      title: "SCP 2.5D",
      href: "https://github.com/TASA-Ed/scp25d",
      description: "工作室的第一个项目，一款 SCP 基金会题材游戏。",
      tags: ["游戏", "SCP 基金会"]
    },
    {
      id: "project-2",
      title: "历史时代2：DE - LLM Playing Agent",
      href: "https://github.com/TASA-Ed/aoh2de-llm-playing-agent",
      description: "LLM Playing 的 Agent 端，连接服务端，探索 AI 在策略游戏中的应用。",
      tags: ["应用", "AI", "Agent"]
    },
    {
      id: "project-3",
      title: "NanoYunhu",
      href: "https://github.com/TASA-Ed/nanoyunhu",
      description: "无头云湖：使用 TypeScript 实现的云湖聊天软件协议端，提供 Satori 协议接入与插件支持。",
      tags: ["应用", "协议端"]
    },
    {
      id: "project-4",
      title: "站点：凛冬",
      href: "https://store.steampowered.com/app/3629270",
      description: "由 NextEpoch 工作室开发的多人探索硬核射击游戏，TASA-Ed 负责运营部分。",
      tags: ["游戏", "SCP 基金会", "协同运营"]
    }
  ];

  const directions: Directions[] = [
    {
      id: "games",
      title: "游戏与交互探索",
      description: "我们从 SCP 2.5D 起步，也参与了《站点：凛冬》游戏的运营。还通过 LLM Playing 项目和模组开发 Skills 研究游戏与 AI 的结合。"
    },
    {
      id: "tools",
      title: "软件与实用工具",
      description: "我们开发了 NanoYunHu、NodeBB 插件等工具，从聊天协议到社区功能，我们把具体需求变成可以使用的开源软件。"
    }
  ];

  const resources: Project[] = [
    {
      id: "blog",
      title: "德二吹风机的博客",
      href: "https://www.tasaed.top/blog/",
      description: "阅读工作室创立者的文章，查看工作室的公告。",
      tags: ["文章"]
    },
    {
      id: "wiki",
      title: "TASA-Ed Wiki",
      href: "https://wiki.tasaed.top/wiki/tasaed.html",
      description: "了解工作室的详细信息和常见问题等。",
      tags: ["资料"]
    },
    {
      id: "afdian",
      title: "爱发电",
      href: "https://afdian.com/a/tasafoe3469",
      description: "查看我们的爱发电动态，或支持工作室的发展。",
      tags: ["赞助"]
    }
  ];

  const desc =
    "TASA-Ed 工作室由德二吹风机创立，成立于 2020 年 12 月 20 日。从 SCP 2.5D 到开源软件、游戏 AI 与社区文档，我们希望做出能被他人采用的作品。";
  const title = "TASA-Ed 官网 - TASA-Ed 工作室";

  onMount(() => {
    window.document.title = title;
  });
</script>

<svelte:head>
  <meta name="description" content={desc} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
</svelte:head>

<section class="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16">
  <div class="flex flex-col gap-6">
    <div class="space-y-6">
      <h1 class="text-4xl font-semibold leading-tight motion-reduce:animate-none dark:from-slate-100 dark:via-slate-300 dark:to-slate-400 md:text-6xl">TASA-Ed 工作室</h1>
      <p class="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
        由德二吹风机创立，专注于自媒体、软件与游戏开发、网站建设。我们喜欢开源，也希望所做的作品能被他人采用！
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <a
        class="inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700 motion-reduce:transition-none dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        href="#work"
        title="探索我们的项目"
      >
        探索项目
        <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
      </a>
      <a
        class="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-900 hover:bg-slate-100 hover:text-slate-900 motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:border-white dark:hover:bg-slate-800 dark:hover:text-white"
        href="#contact"
        title="联系我们"
        aria-label="联系我们"
      >
        联系我们
        <Mail class="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  </div>
</section>

<section id="about" aria-labelledby="about-title" class="mx-auto max-w-6xl px-6 pb-20">
  <div class="grid gap-10 border-t border-slate-200 pt-10 dark:border-slate-800 md:grid-cols-2 md:gap-16">
    <div class="space-y-5">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
        关于我们
      </p>
      <h2 id="about-title" class="text-3xl font-semibold leading-tight md:text-4xl">
        从一个游戏开始，<br />把想法变成作品。
      </h2>
      <p class="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
        2020 年，工作室最初为了 SCP 2.5D 而成立。后来，我们从游戏走向软件、网站和内容创作。
      </p>
      <p class="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
        做出对他人有用的东西，是我们一直以来的目标，无论是一款游戏还是一个工具，我们都希望它能够被使用，或给你带来一些有用的想法！
      </p>
      <a
        class="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500"
        href="https://wiki.tasaed.top/wiki/tasaed.html"
        target="_blank"
        rel="external noopener noreferrer"
      >
        了解工作室的故事
        <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
    <div class="divide-y divide-slate-200 dark:divide-slate-800">
      {#each directions as direction (direction.id)}
        <article class="space-y-3 py-6 first:pt-0 last:pb-0">
          <h3 class="text-lg font-semibold">{direction.title}</h3>
          <p class="text-base leading-7 text-slate-600 dark:text-slate-300">{direction.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section id="work" class="mx-auto max-w-6xl px-6 pb-20">
  <div class="flex flex-col gap-2 pb-10">
    <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
      我们在做什么
    </p>
    <h2 class="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">精选项目</h2>
    <p class="max-w-xl text-sm text-slate-600 dark:text-slate-300">
      游戏、实用工具与开发资料等。
    </p>
  </div>
  <div class="grid gap-6 md:grid-cols-2">
    {#each projects as project (project.id)}
      {#if isExternalLink(project.href)}
        <a
          title={`${project.title} 项目详情`}
          aria-label={`${project.title} 项目详情`}
          class="group relative flex flex-col cursor-pointer overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition-all duration-200 hover:border-slate-400 hover:shadow-md motion-reduce:transition-none dark:border-slate-800/70 dark:bg-slate-900/60 dark:hover:border-slate-600"
          href={project.href}
          rel="external"
          target="_blank"
        >
          <div class="flex flex-1 flex-col justify-between space-y-3">
            <div class="space-y-3">
              <div
                class="flex items-center justify-between text-sm font-semibold text-slate-900 dark:text-white"
              >
                <span>{project.title}</span>
                <ArrowUpRight
                  class="h-4 w-4 text-slate-400 transition-colors duration-200 group-hover:text-slate-900 dark:group-hover:text-white"
                  aria-hidden="true"
                />
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
            </div>
            <div class="flex flex-wrap gap-2 pt-1 text-xs text-slate-600 dark:text-slate-300">
              {#each project.tags as tag, index (index)}
                <span
                  class="rounded-full border border-slate-200/80 px-3 py-1 dark:border-slate-700/80"
                  >{tag}</span
                >
              {/each}
            </div>
          </div>
        </a>
      {:else}
        <a
          title={`${project.title} 项目详情`}
          aria-label={`${project.title} 项目详情`}
          class="group relative flex flex-col cursor-pointer overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition-all duration-200 hover:border-slate-400 hover:shadow-md motion-reduce:transition-none dark:border-slate-800/70 dark:bg-slate-900/60 dark:hover:border-slate-600"
          href={resolve(`/${project.href}`)}
        >
          <div class="flex flex-1 flex-col justify-between space-y-3">
            <div class="space-y-3">
              <div
                class="flex items-center justify-between text-sm font-semibold text-slate-900 dark:text-white"
              >
                <span>{project.title}</span>
                <ArrowUpRight
                  class="h-4 w-4 text-slate-400 transition-colors duration-200 group-hover:text-slate-900 dark:group-hover:text-white"
                  aria-hidden="true"
                />
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
            </div>
            <div class="flex flex-wrap gap-2 pt-1 text-xs text-slate-600 dark:text-slate-300">
              {#each project.tags as tag, index (index)}
                <span
                  class="rounded-full border border-slate-200/80 px-3 py-1 dark:border-slate-700/80"
                  >{tag}</span
                >
              {/each}
            </div>
          </div>
        </a>
      {/if}
    {/each}
  </div>
</section>

<section id="community" aria-labelledby="community-title" class="mx-auto max-w-6xl px-6 pb-20">
  <div class="space-y-3 pb-8">
    <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
      内容与社区
    </p>
    <h2 id="community-title" class="text-3xl font-semibold md:text-4xl">不止代码</h2>
    <p class="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
      项目之外，还有文章、资料和赞助。你可以从这些地方继续了解我们的信息。
    </p>
  </div>
  <div class="grid gap-6 md:grid-cols-3">
    {#each resources as resource (resource.id)}
      <a
        class="group flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition-colors duration-200 hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500 motion-reduce:transition-none dark:border-slate-800/70 dark:bg-slate-900/60 dark:hover:border-slate-600"
        href={resource.href}
        target="_blank"
        rel="external noopener noreferrer"
      >
        <p class="text-xs font-medium text-slate-500 dark:text-slate-400">{resource.tags[0]}</p>
        <div class="flex items-center justify-between gap-3">
          <h3 class="text-lg font-semibold">{resource.title}</h3>
          <ArrowUpRight class="h-4 w-4 shrink-0 text-slate-500 dark:text-slate-400" aria-hidden="true" />
        </div>
        <p class="text-base leading-7 text-slate-600 dark:text-slate-300">{resource.description}</p>
      </a>
    {/each}
  </div>
  <div class="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl bg-slate-100 p-6 dark:bg-slate-900 md:flex-row md:items-center md:p-8">
    <div class="max-w-2xl space-y-3">
      <h3 class="text-xl font-semibold">喜欢开源吗？一起参与吧！</h3>
      <p class="text-base leading-7 text-slate-600 dark:text-slate-300">
        在 GitHub 查看我们所有的开源项目。遇到问题可以在对应的仓库提交 Issue，也欢迎通过 PR 改进项目。不过参与前请先阅读项目的许可证与贡献说明！
      </p>
    </div>
    <a
      class="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:border-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500 motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-950 dark:hover:border-slate-400"
      href="https://github.com/orgs/TASA-Ed/repositories?type=all"
      target="_blank"
      rel="external noopener noreferrer"
    >
      <SiGithub class="h-4 w-4" aria-hidden="true" />
      浏览开源仓库
      <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
    </a>
  </div>
</section>

<section id="contact" class="mx-auto max-w-6xl px-6 pb-24">
  <div
    class="grid gap-10 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60 md:grid-cols-[1.2fr_1fr] md:p-10"
  >
    <div class="space-y-4">
      <p
        class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300"
      >
        联系我们
      </p>
      <h2 class="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
        想联系我们或一起做点有意思的项目？
      </h2>
      <p class="text-sm text-slate-600 dark:text-slate-300">
        想要与我们交流技术想法或合作吗？可以通过邮件、GitHub 或 QQ 群来联系我们！
      </p>
    </div>
    <div
      class="space-y-4 rounded-2xl border border-slate-200/70 bg-white/90 p-6 dark:border-slate-800/70 dark:bg-slate-950/70"
    >
      <p class="text-sm font-semibold text-slate-900 dark:text-white">联系方式</p>
      <div class="space-y-4">
        {#each socialLinks as link (link.id)}
          {#if isExternalLink(link.href)}
            <a
              class="flex cursor-pointer items-center gap-3 text-base font-medium text-slate-900 transition-colors duration-200 hover:text-slate-600 motion-reduce:transition-none dark:text-white dark:hover:text-slate-300"
              href={link.href}
              target="_blank"
              rel="external"
              title={link.label}
              aria-label={link.label}
            >
              <svelte:component this={link.icon} class="h-5 w-5 shrink-0" aria-hidden="true" />
              <span class="break-all">{link.display}</span>
            </a>
          {:else}
            <a
              class="flex cursor-pointer items-center gap-3 text-base font-medium text-slate-900 transition-colors duration-200 hover:text-slate-600 motion-reduce:transition-none dark:text-white dark:hover:text-slate-300"
              href={`mailto:${link.href}`}
              title={link.label}
              aria-label={link.label}
            >
              <svelte:component this={link.icon} class="h-5 w-5 shrink-0" aria-hidden="true" />
              <span class="break-all">{link.display}</span>
            </a>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>
