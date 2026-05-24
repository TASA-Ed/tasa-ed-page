<script module lang="ts">
  const trustedHTML = (globalThis.window as any)?.trustedTypes?.createPolicy("app-html", {
    createHTML: (s: string) => s
  });

  function trusted(html: string) {
    return trustedHTML?.createHTML(html) ?? html;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import Reply from "$lib/jsons/reply.json";
  import Comments from "$lib/jsons/comments.json";
  import type { Comment } from "$lib";
  import { getBrowserKernelVersion, getOS } from "$lib/utils";

  // ── State ──────────────────────────────────────────────
  let comments = $state<Comment[]>([]);
  let loading = $state(true);
  let error = $state("");

  // ── Helpers ────────────────────────────────────────────
  function getInitial(nick: string): string {
    return nick.trim().charAt(0).toUpperCase() || "?";
  }

  function formatDate(iso: string): string {
    const d = new Date(iso);
    return d.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  // Deterministic pastel color per objectId
  const AVATAR_PALETTES = [
    { bg: "bg-pink-200 dark:bg-pink-900/50", text: "text-pink-700 dark:text-pink-300" },
    { bg: "bg-purple-200 dark:bg-purple-900/50", text: "text-purple-700 dark:text-purple-300" },
    { bg: "bg-teal-200 dark:bg-teal-900/50", text: "text-teal-700 dark:text-teal-300" },
    { bg: "bg-yellow-200 dark:bg-yellow-900/50", text: "text-yellow-700 dark:text-yellow-300" },
    { bg: "bg-sky-200 dark:bg-sky-900/50", text: "text-sky-700 dark:text-sky-300" },
    { bg: "bg-orange-200 dark:bg-orange-900/50", text: "text-orange-700 dark:text-orange-300" }
  ];

  function avatarPalette(id: string) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) & 0xffff;
    return AVATAR_PALETTES[hash % AVATAR_PALETTES.length];
  }

  function isReply(c: Comment) {
    return !!c.pid;
  }

  // Build threaded tree: top-level + their replies
  interface Thread {
    root: Comment;
    replies: Comment[];
  }

  function buildThreads(list: Comment[]): Thread[] {
    const map = new Map<string, Thread>();
    const orphans: Comment[] = [];

    for (const c of list) {
      if (!isReply(c)) {
        map.set(c.objectId, { root: c, replies: [] });
      }
    }
    for (const c of list) {
      if (isReply(c) && c.rid) {
        if (map.has(c.rid)) {
          map.get(c.rid)!.replies.push(c);
        } else {
          orphans.push(c);
        }
      }
    }

    const threads: Thread[] = [...map.values()];
    for (const o of orphans) threads.push({ root: o, replies: [] });

    // Sort newest first
    threads.sort(
      (a, b) => new Date(b.root.createdAt).getTime() - new Date(a.root.createdAt).getTime()
    );
    return threads;
  }

  let threads = $derived(buildThreads(comments));

  // ── Load data ──────────────────────────────────────────
  onMount(async () => {
    comments = Comments.results.concat(Reply.results);
    loading = false;
    return;
  });

  const desc =
    "剧本编辑器留言簿的备份，由于 LeanCloud 将于 2027 年 1 月 12 日关停，所以我们备份了剧本编辑器的留言簿。";
  const title = "TASA-Ed 官网 - 剧本留言簿备份";

  onMount(() => {
    window.document.title = title;
  });
</script>

<svelte:head>
  <meta name="description" content={desc} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
</svelte:head>

<div class="kawaii-root min-h-screen px-4 py-10 font-sans">
  <!-- Header -->
  <header class="mb-10 text-center">
    <div
      class="inline-flex items-center gap-2.5 rounded-full border border-pink-200 bg-white/80 px-6 py-2.5 shadow-sm backdrop-blur dark:border-pink-500/30 dark:bg-slate-800/80"
    >
      <span class="text-lg">💬</span>
      <h1 class="kawaii-title text-xl font-bold text-pink-500 dark:text-pink-400">
        剧本编辑器留言簿备份
      </h1>
      <span class="text-lg">✨</span>
    </div>
    <div class="mx-auto mt-4 max-w-xl space-y-2">
      <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        古阳的留言簿部署在 LeanCloud，但是 LeanCloud <a
          href="https://docs.leancloud.cn/sdk/announcements/sunset-announcement/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-pink-500 underline-offset-2 hover:underline dark:text-pink-400"
          >将于 2027 年 1 月 12 日关停</a
        >，因此我们将全部留言数据备份于此。
      </p>
      <p class="text-xs text-slate-500 dark:text-slate-400">
        此页面仅供浏览 · 如需原始数据请查看<a
          href="https://github.com/TASA-Ed/tasa-ed-page/tree/master/src/lib/jsons/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-pink-500 underline-offset-2 hover:underline dark:text-pink-400">源码仓库</a
        >
      </p>
    </div>
    {#if !loading}
      <p class="mt-3 text-sm text-pink-300 dark:text-pink-400/70">
        共 {comments.length} 条留言 ·
        <span class="text-teal-400 dark:text-teal-300">{threads.length} 个主题</span>
      </p>
    {/if}
  </header>

  <!-- ── Loading ── -->
  {#if loading}
    <div class="flex flex-col items-center gap-4 py-20">
      <div class="loading-dots flex gap-2">
        <span class="h-3 w-3 rounded-full bg-pink-400 dark:bg-pink-500"></span>
        <span class="h-3 w-3 rounded-full bg-purple-400 dark:bg-purple-500"></span>
        <span class="h-3 w-3 rounded-full bg-teal-400 dark:bg-teal-500"></span>
      </div>
      <p class="text-sm text-pink-300 dark:text-pink-400/70">正在加载留言…</p>
    </div>

    <!-- ── Error ── -->
  {:else if error}
    <div
      class="mx-auto max-w-md rounded-3xl border border-pink-200 bg-white/80 p-6 text-center shadow dark:border-pink-500/20 dark:bg-slate-800/80 dark:shadow-pink-500/5"
    >
      <div class="mb-2 text-3xl">🌧️</div>
      <p class="font-medium text-pink-500 dark:text-pink-400">哎呀，出错啦</p>
      <p class="mt-1 text-sm text-pink-300 dark:text-pink-400/60">{error}</p>
    </div>

    <!-- ── Empty ── -->
  {:else if threads.length === 0}
    <div
      class="mx-auto max-w-md rounded-3xl border border-pink-200 bg-white/80 p-8 text-center shadow dark:border-pink-500/20 dark:bg-slate-800/80 dark:shadow-pink-500/5"
    >
      <div class="mb-3 text-5xl">🌸</div>
      <p class="font-medium text-pink-400 dark:text-pink-300">还没有留言哦</p>
      <p class="mt-1 text-sm text-pink-200 dark:text-pink-400/50">快来成为第一个留言的人吧！</p>
    </div>

    <!-- ── Comment threads ── -->
  {:else}
    <ul class="mx-auto flex max-w-2xl flex-col gap-5">
      {#each threads as thread (thread.root.objectId)}
        {@const pal = avatarPalette(thread.root.objectId)}
        <li
          class="comment-card group rounded-3xl border border-white/80 bg-white/70 p-5 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-800/70 dark:shadow-slate-900/30 dark:hover:shadow-slate-900/50"
          id={thread.root.objectId}
        >
          <!-- Root comment -->
          <div class="flex gap-3">
            <!-- Avatar -->
            <div
              class="avatar-blob shrink-0 {pal.bg} {pal.text} flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-bold shadow-sm dark:shadow-none"
            >
              {getInitial(thread.root.nick)}
            </div>

            <!-- Body -->
            <div class="min-w-0 flex-1">
              <!-- Meta row -->
              <div class="mb-1 flex flex-wrap items-center gap-2">
                <span class="font-semibold text-gray-700 dark:text-slate-200">
                  {#if thread.root.link}
                    <a
                      href={thread.root.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-pink-500 underline-offset-2 hover:underline dark:text-pink-400"
                      >{thread.root.nick}</a
                    >
                  {:else}
                    {thread.root.nick}
                  {/if}
                </span>
                <span
                  class="device-badge rounded-full border border-pink-100 bg-pink-50 px-2 py-0.5 text-xs text-pink-400 dark:border-pink-500/30 dark:bg-pink-500/10 dark:text-pink-300"
                >
                  {getBrowserKernelVersion(thread.root.ua)}
                </span>
                <span
                  class="device-badge rounded-full border border-cyan-100 bg-cyan-50 px-2 py-0.5 text-xs text-cyan-400 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300"
                >
                  {getOS(thread.root.ua)}
                </span>
                <time class="ml-auto text-xs text-gray-400 dark:text-slate-400">
                  {formatDate(thread.root.createdAt)}
                </time>
              </div>

              <!-- Comment text -->
              <p class="leading-relaxed text-gray-600 wrap-break-word dark:text-slate-300">
                {@html trusted(thread.root.comment)}
              </p>
            </div>
          </div>

          <!-- Replies -->
          {#if thread.replies.length > 0}
            <ul
              class="mt-4 flex flex-col gap-3 border-l-2 border-dashed border-pink-100 pl-4 dark:border-pink-500/30"
            >
              {#each thread.replies as reply (reply.objectId)}
                {@const rpal = avatarPalette(reply.objectId)}
                <li class="flex gap-3" id={reply.objectId}>
                  <!-- Reply avatar -->
                  <div
                    class="avatar-blob shrink-0 {rpal.bg} {rpal.text} flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold shadow-sm dark:shadow-none"
                  >
                    {getInitial(reply.nick)}
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="mb-0.5 flex flex-wrap items-center gap-2">
                      <span class="text-sm font-semibold text-gray-600 dark:text-slate-300">
                        {reply.nick}
                      </span>
                      <span
                        class="rounded-full border border-purple-100 bg-purple-50 px-1.5 py-0.5 text-xs text-purple-300 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300"
                      >
                        {getBrowserKernelVersion(reply.ua)}
                      </span>
                      <span
                        class="rounded-full border border-teal-100 bg-teal-50 px-1.5 py-0.5 text-xs text-teal-300 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300"
                      >
                        {getOS(reply.ua)}
                      </span>
                      <time class="ml-auto text-xs text-gray-400 dark:text-slate-400">
                        {formatDate(reply.createdAt)}
                      </time>
                    </div>
                    <p
                      class="text-sm leading-relaxed text-gray-500 wrap-break-word dark:text-slate-400"
                    >
                      {@html trusted(reply.comment)}
                    </p>
                  </div>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  /* ── Kawaii background ───────────────────────────────── */
  .kawaii-root {
    font-family: "Hiragino Sans", "PingFang SC", "Microsoft YaHei", sans-serif;
  }

  /* ── Hand-written feel for title ────────────────────── */
  .kawaii-title {
    letter-spacing: 0.05em;
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: unset;
    color: inherit;
    animation: none;
  }

  /* ── Blob avatar — bubbly shape ─────────────────────── */
  .avatar-blob {
    border-radius: 40% 60% 55% 45% / 50% 45% 55% 50%;
  }

  /* ── Card bounce on hover ────────────────────────────── */
  .comment-card {
    transition:
      transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.25s ease-out;
  }

  /* ── Loading dots bounce ─────────────────────────────── */
  .loading-dots span {
    animation: bounce-dot 0.9s ease-in-out infinite;
  }
  .loading-dots span:nth-child(2) {
    animation-delay: 0.15s;
  }
  .loading-dots span:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes bounce-dot {
    0%,
    80%,
    100% {
      transform: translateY(0);
      opacity: 0.6;
    }
    40% {
      transform: translateY(-8px);
      opacity: 1;
    }
  }
</style>
