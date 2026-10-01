<script lang="ts">
  import { onMount } from "svelte";
  import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
  import Mail from "@lucide/svelte/icons/mail";
  import SiGithub from '@icons-pack/svelte-simple-icons/icons/SiGithub';
  import SiQq from '@icons-pack/svelte-simple-icons/icons/SiQq';
  import type { Project, SocialLink } from "$lib";
  import { isExternalLink } from "$lib/utils";

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

  const projects = [
    {
      id: "project-1",
      title: "SCP 2.5D",
      href: "https://github.com/TASA-Ed/scp25d",
      description: "TASA-Ed 工作室的第一个项目，一款 SCP 基金会题材游戏。",
      tags: ["游戏", "SCP 基金会"],
      headline: "工作室的起点。",
    },
    {
      id: "project-2",
      title: "历史时代2：DE - LLM Playing Agent",
      href: "https://github.com/TASA-Ed/aoh2de-llm-playing-agent",
      description: "让 LLM 游玩 历史时代2：DE。LLM Playing 的 Agent 端，可以对接 LLM Playing 服务端，然后研究 AI 在策略游戏中的应用。",
      tags: ["应用", "AI", "Agent"],
      headline: "让 LLM 游玩 历史时代2：DE。（Agent 端）",
    },
    {
      id: "project-3",
      title: "NanoYunhu",
      href: "https://github.com/TASA-Ed/nanoyunhu",
      description: "Nanoyunhu，无头云湖。使用 TypeScript 实现的云湖聊天软件协议端，提供 Satori 协议接入与插件支持。",
      tags: ["应用", "协议端"],
      headline: "Nanoyunhu，无头云湖。",
    },
    {
      id: "project-4",
      title: "站点：凛冬",
      href: "https://store.steampowered.com/app/3629270",
      description: "《站点：凛冬》是由 NextEpoch 工作室开发的一款多人探索硬核射击游戏。TASA-Ed 负责运营部分。",
      tags: ["游戏", "SCP 基金会"],
      headline: "一场风暴席卷神州大地 洁白的雪，与记忆一同洒落...",
    }
  ] satisfies (Project & {
    headline: string;
  })[];

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

  let workSection: HTMLElement;
  let activeProject = $state(0);

  onMount(() => {
    const cards = workSection.querySelectorAll<HTMLElement>(".project-card");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealed = new WeakSet<Element>();
    const animations = new Set<Animation>();
    const revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || revealed.has(entry.target)) continue;
        revealed.add(entry.target);
        if (motion.matches) continue;
        const animation = entry.target.animate(
          [{ opacity: 0, transform: "translateY(32px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 700, easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0.1 });
    const activeObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeProject = Number((entry.target as HTMLElement).dataset.index);
      }
    }, { rootMargin: "-20% 0px -55% 0px" });
    const stopAnimations = () => {
      if (motion.matches) {
        for (const animation of animations) animation.cancel();
        animations.clear();
      }
    };
    for (const card of cards) {
      revealObserver.observe(card);
      activeObserver.observe(card);
    }
    motion.addEventListener("change", stopAnimations);
    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
      motion.removeEventListener("change", stopAnimations);
      for (const animation of animations) animation.cancel();
    };
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
</svelte:head>

<section class="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16">
  <div class="flex flex-col gap-6">
    <div class="space-y-6">
      <h1 class="text-4xl font-semibold leading-tight md:text-6xl">TASA-Ed 工作室</h1>
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

<section id="work" bind:this={workSection} aria-labelledby="work-title" class="mx-auto max-w-6xl px-6 pb-28">
  <div class="space-y-4 border-t border-slate-200 pb-12 pt-10 dark:border-slate-800 md:pb-16">
    <p class="text-xs font-semibold tracking-[0.3em] text-slate-500 dark:text-slate-400">我们在做什么</p>
    <h2 id="work-title" class="text-3xl font-semibold md:text-4xl">精选项目</h2>
    <p class="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">如需更多项目请查看 GitHub 或 Wiki。</p>
  </div>
  <div class="project-showcase border-y border-slate-200 dark:border-slate-800">
    <nav aria-label="精选项目索引" class="project-index hidden border-r border-slate-200 pr-6 dark:border-slate-800 lg:block">
      <div class="sticky top-28 space-y-2 py-8">
        <p class="mb-6 text-xs tracking-[0.2em] text-slate-500 dark:text-slate-400">精选项目</p>
        {#each projects as project, index (project.id)}
          <a href={`#${project.id}`} aria-current={activeProject === index ? "location" : undefined} class="project-index-link flex min-h-11 items-start gap-3 rounded-lg px-3 py-3 text-sm text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500 motion-reduce:transition-none dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white">
            <span>{project.title}</span>
          </a>
        {/each}
      </div>
    </nav>
    <div class="min-w-0 divide-y divide-slate-200 dark:divide-slate-800">
      {#each projects as project, index (project.id)}
        <article id={project.id} data-index={index} class="project-card grid gap-6 py-10 md:py-14 lg:grid-cols-2 lg:gap-16 lg:pl-10">
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold leading-snug md:text-3xl">{project.title}</h3>
            <p class="text-lg font-medium text-slate-700 dark:text-slate-200">{project.headline}</p>
          </div>
          <div class="flex h-full flex-col gap-6">
            <p class="max-w-lg text-base leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
            <div class="mt-auto space-y-4">
              <div class="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
                {#each project.tags as tag (tag)}
                  <span class="rounded-full border border-slate-200 px-3 py-1.5 dark:border-slate-700">{tag}</span>
                {/each}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="external noopener noreferrer"
                aria-label={`查看 ${project.title} 项目`}
                class="inline-flex min-h-11 items-center gap-3 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold transition-colors hover:border-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500 motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-400 dark:hover:bg-slate-800"
              >
                查看项目
                <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>
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
              <link.icon class="h-5 w-5 shrink-0" aria-hidden="true" />
              <span class="break-all">{link.display}</span>
            </a>
          {:else}
            <a
              class="flex cursor-pointer items-center gap-3 text-base font-medium text-slate-900 transition-colors duration-200 hover:text-slate-600 motion-reduce:transition-none dark:text-white dark:hover:text-slate-300"
              href={`mailto:${link.href}`}
              title={link.label}
              aria-label={link.label}
            >
              <link.icon class="h-5 w-5 shrink-0" aria-hidden="true" />
              <span class="break-all">{link.display}</span>
            </a>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .project-index-link[aria-current="location"] {
    background: var(--color-slate-200);
    color: var(--color-slate-900);
    font-weight: 600;
  }
  @media (prefers-color-scheme: dark) {
    .project-index-link[aria-current="location"] {
      background: var(--color-slate-800);
      color: var(--color-slate-100);
    }
  }


  @media (min-width: 1024px) {
    .project-showcase {
      display: grid;
      grid-template-columns: 13rem minmax(0, 1fr);
    }
  }

</style>
