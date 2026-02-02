<script lang="ts">
  import {onMount} from 'svelte';
  import {goto} from "$app/navigation";
  import {resolve} from "$app/paths";
  import {ArrowLeft, House} from "@lucide/svelte";

  let mounted = $state(false);

  onMount(() => {
    mounted = true;
    window.document.title = "TASA-Ed 官网 - 404";
  });

  function goHome(): void {
    goto(resolve("/"));
  }

  function goBack(): void {
    window.history.back();
  }
</script>

<div class="mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 pb-20">
    <div class="max-w-2xl w-full text-center">
        <!-- 404 数字动画 -->
        <div class="mb-8 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
            <h1 class="text-9xl sm:text-[12rem] font-bold bg-clip-text bg-linear-to-r text-slate-900 dark:text-white">
                404
            </h1>
        </div>

        <!-- 错误信息 -->
        <div class="mb-12 {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 ease-out">
            <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                页面未找到
            </h2>
            <p class="text-lg text-slate-500 dark:text-slate-400 mb-2">
                很抱歉，我们找不到您要访问的页面。
            </p>
        </div>

        <!-- 操作按钮 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center {mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-300 ease-out">
            <button
                    onclick={goHome}
                    title="返回首页"
                    aria-label="返回首页"
                    class="inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700 motion-reduce:transition-none dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
                <House class="h-4 w-4" aria-hidden="true"/>
                返回首页
            </button>

            <button
                    onclick={goBack}
                    title="返回上一页"
                    aria-label="返回上一页"
                    class="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-900 hover:text-slate-900 motion-reduce:transition-none dark:border-slate-700 dark:text-slate-200 dark:hover:border-white dark:hover:text-white"
            >
                <ArrowLeft class="h-4 w-4" aria-hidden="true"/>
                返回上一页
            </button>
        </div>
    </div>
</div>
