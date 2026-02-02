<script lang="ts">
  import {resolve} from '$app/paths';
  import {isExternalLink, type Link} from '$lib';

  const navLinks: Link[] = [
    {label: '首页', href: ''},
    {label: '博客', href: 'blog'},
    {label: '下载', href: 'downloads'},
    {
      label: 'Q群',
      href: 'https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/'
    },
    {label: 'PHP-API', href: 'https://wiki.tasaed.top/wiki/api.html'},
    {label: '常见问题', href: 'https://wiki.tasaed.top/wiki/ourwebsite.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98'},
    {label: '关于我们', href: 'https://wiki.tasaed.top/wiki/tasaed.html'},
  ];

  let isMenuOpen = $state(false);

  // 切换菜单状态
  function toggleMenu(): void {
    isMenuOpen = !isMenuOpen;
  }

  // 关闭菜单
  function closeMenu(): void {
    isMenuOpen = false;
  }

  // 点击链接后关闭菜单
  function handleLinkClick(): void {
    closeMenu();
  }

  function scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
</script>

<header class="fixed left-4 right-4 top-4 z-50">
    <div
            class="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-slate-200/70 bg-white/80 px-6 py-3 text-slate-900 shadow-sm backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70 dark:text-slate-100"
    >
        <!-- Logo -->
        <button
                class="cursor-pointer text-lg font-bold items-center flex gap-2"
                title="返回顶部"
                aria-label="返回顶部"
                onclick={scrollToTop}
        >
            <img width="35px" height="35px" src="/assets/tasaed.svg" alt="Logo"/>
            <span class="bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 hover:text-black/90 dark:from-slate-500 dark:via-slate-300 dark:to-slate-100 dark:hover:text-white/90 bg-clip-text text-transparent animate-gradient">
                TASA-Ed 工作室
            </span>
        </button>

        <!-- 桌面端导航 -->
        <nav class="hidden items-center gap-6 text-sm font-medium px-4 py-2 text-slate-600 dark:text-slate-300 md:flex">
            {#each navLinks as link, index (index)}
                {#if isExternalLink(link.href)}
                    <a
                            class="cursor-pointer transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
                            aria-label={link.label}
                            title={link.label}
                            href={link.href}
                            target="_blank"
                            rel="external"
                    >
                        {link.label}
                    </a>
                {:else}
                    <a
                            class="cursor-pointer transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
                            aria-label={link.label}
                            title={link.label}
                            href={resolve(`/${link.href}`)}
                    >
                        {link.label}
                    </a>
                {/if}
            {/each}
        </nav>

        <!-- 移动端汉堡菜单按钮 -->
        <button
                class="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
                onclick={toggleMenu}
                title="切换菜单"
                aria-label="切换菜单"
                aria-expanded={isMenuOpen}
        >
            <span
                    class="block h-0.5 w-6 rounded-full bg-slate-900 transition-all duration-300 dark:bg-slate-100"
                    class:rotate-45={isMenuOpen}
                    class:translate-y-2={isMenuOpen}
            ></span>
            <span
                    class="block h-0.5 w-6 rounded-full bg-slate-900 transition-all duration-300 dark:bg-slate-100"
                    class:opacity-0={isMenuOpen}
            ></span>
            <span
                    class="block h-0.5 w-6 rounded-full bg-slate-900 transition-all duration-300 dark:bg-slate-100"
                    class:-rotate-45={isMenuOpen}
                    class:-translate-y-2={isMenuOpen}
            ></span>
        </button>
    </div>

    <!-- 移动端下拉菜单 -->
    {#if isMenuOpen}
        <div
                class="mt-4 mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-lg backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/95 md:hidden"
                class:animate-slide-down={isMenuOpen}
        >
            <nav class="flex flex-col p-4">
                {#each navLinks as link, index (index)}
                    {#if isExternalLink(link.href)}
                        <a
                                class="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                aria-label={link.label}
                                title={link.label}
                                href={link.href}
                                target="_blank"
                                rel="external"
                                onclick={handleLinkClick}
                        >
                            {link.label}
                        </a>
                    {:else}
                        <a
                                class="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                aria-label={link.label}
                                title={link.label}
                                href={resolve(`/${link.href}`)}
                                onclick={handleLinkClick}
                        >
                            {link.label}
                        </a>
                    {/if}
                {/each}
            </nav>
        </div>
    {/if}
</header>

<!-- 点击遮罩关闭菜单 -->
{#if isMenuOpen}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
            class="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onclick={closeMenu}
    ></div>
{/if}

<style>
    @keyframes slide-down {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-slide-down {
        animation: slide-down 0.3s ease-out;
    }

    @keyframes gradient {
        0%, 100% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
    }
</style>
