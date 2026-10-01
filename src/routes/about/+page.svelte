<script lang="ts">
  import { asset, resolve } from "$app/paths";
  import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
  import type { Member } from "$lib";
  import SiGithub from "@icons-pack/svelte-simple-icons/icons/SiGithub";

  const title = "关于我们 - TASA-Ed 工作室";
  const description = "了解 TASA-Ed 工作室：我们是怎么来的、在做什么，以及工作室成员。";
  const members: Member[] = [
    {
      name: "德二吹风机",
      handle: "ccD2s",
      role: "工作室的创立者。",
      avatar: asset("/assets/ccd2s.avif"),
      href: "https://github.com/ccd2s"
    },
    {
      name: "DenSonet",
      handle: "DenSonet",
      role: "德二吹风机的好友。",
      avatar: asset("/assets/densonet.avif"),
      href: "https://github.com/DenSonet"
    }
  ];
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
</svelte:head>

<section aria-labelledby="studio-title" class="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pb-28 md:pt-20">
  <div class="flex flex-col items-center gap-8 text-center">
    <div class="flex h-32 w-32 shrink-0 items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 md:h-40 md:w-40 md:p-8">
      <img src={asset("/assets/tasaed.svg")} alt="TASA-Ed 工作室 logo" width="128" height="128" class="h-full w-full" fetchpriority="high" />
    </div>
    <div class="space-y-5">
      <p class="text-xs font-semibold tracking-[0.3em] text-slate-500 dark:text-slate-400">关于我们</p>
      <h1 id="studio-title" class="text-4xl font-semibold leading-tight md:text-6xl">TASA-Ed 工作室</h1>
      <p class="mx-auto max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">我们希望，我们所做的一切都能被他人采用。</p>
    </div>
  </div>
</section>

<section aria-labelledby="story-title" class="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
  <div class="grid gap-10 border-t border-slate-200 pt-10 dark:border-slate-800 md:grid-cols-[1fr_1.6fr] md:gap-16">
    <div class="space-y-5">
      <p class="text-xs font-semibold tracking-[0.3em] text-slate-500 dark:text-slate-400">我们的故事</p>
      <h2 id="story-title" class="text-3xl font-semibold leading-snug md:text-4xl">一开始只是为一个游戏，<br />后来做的事就多了起来。</h2>
    </div>
    <div class="space-y-6 text-base leading-8 text-slate-600 dark:text-slate-300">
      <p>TASA-Ed 工作室由德二吹风机在 2020 年 12 月 20 日创立，主要做自媒体、软件与游戏开发和网站建设。</p>
      <p>一开始只是为了 SCP 2.5D 而创立工作室，后来又陆续做起了软件、网站、开源项目等内容，可以实现的想法基本都做了一遍。</p>
      <p>我们的目标其实很简单，做出来有人用就好了，这也是能一直做下去的原因。互联网的本质就是分享，只要作品对你很有用，我们就值了。</p>
      <a href="https://wiki.tasaed.top/wiki/tasaed.html" target="_blank" rel="external noopener noreferrer" class="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-900 underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500 dark:text-white">在 Wiki 查看更多 <ArrowUpRight class="h-4 w-4" aria-hidden="true" /></a>
    </div>
  </div>
</section>

<section aria-labelledby="members-title" class="mx-auto max-w-6xl px-6 pb-24">
  <div class="space-y-4 border-t border-slate-200 pb-10 pt-10 dark:border-slate-800">
    <p class="text-xs font-semibold tracking-[0.3em] text-slate-500 dark:text-slate-400">工作室成员</p>
    <h2 id="members-title" class="text-3xl font-semibold md:text-4xl">一起做项目的人</h2>
  </div>
  <div class="grid gap-6 md:grid-cols-2">
    {#each members as member (member.handle)}
      <article class="flex flex-col items-start gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-slate-800 dark:bg-slate-900/60 sm:flex-row sm:p-8">
        <img src={member.avatar} alt={`${member.name}的头像`} width="96" height="96" loading="lazy" class="h-24 w-24 shrink-0 rounded-2xl object-cover" />
        <div class="min-w-0 space-y-3">
          <h3 class="text-xl font-semibold">{member.name}</h3>
          <p class="font-mono text-sm text-slate-500 dark:text-slate-400">@{member.handle}</p>
          <p class="text-sm leading-6 text-slate-600 dark:text-slate-300">{member.role}</p>
          <a href={member.href} target="_blank" rel="external noopener noreferrer" aria-label={`${member.name}的 GitHub 主页`} class="inline-flex min-h-11 items-center gap-2 rounded text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500"><SiGithub class="h-4 w-4" aria-hidden="true" />GitHub <ArrowUpRight class="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </article>
    {/each}
  </div>
  <div class="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-slate-100 px-6 py-6 dark:bg-slate-900 md:px-8">
    <p class="text-base leading-7 text-slate-600 dark:text-slate-300">有想法想聊一聊？随时可以找我们！</p>
    <a href={`${resolve("/")}#contact`} class="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold transition-colors hover:border-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-500 motion-reduce:transition-none dark:border-slate-700 dark:bg-slate-950 dark:hover:border-slate-400">联系我们 <ArrowUpRight class="h-4 w-4" aria-hidden="true" /></a>
  </div>
</section>
