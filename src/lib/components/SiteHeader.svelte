<script lang="ts">
    import {resolve} from '$app/paths';
    import {isExternalLink, isNavGroup, type Link, type NavItem} from '$lib';
    import { ChartNoAxesGantt } from '@lucide/svelte';

    const navLinks: NavItem[] = [
        {label: '首页', href: ''},
        {label: '博客', href: 'https://www.tasaed.top/blog/'},
        {label: '下载', href: 'downloads'},
        {label: 'Q群', href: 'https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/'},
        {
            label: 'Wiki',
            items: [
                {label: 'PHP-API', href: 'https://wiki.tasaed.top/wiki/api.html'},
                {label: '常见问题', href: 'https://wiki.tasaed.top/wiki/ourwebsite.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98'},
                {label: '关于我们', href: 'https://wiki.tasaed.top/wiki/tasaed.html'},
            ]
        },
    ];

    let isMenuOpen = $state(false);
    let openGroup = $state<string | null>(null);
    let openMobileGroup = $state<string | null>(null);

    function toggleMenu(): void {
        isMenuOpen = !isMenuOpen;
        if (!isMenuOpen) openMobileGroup = null;
    }

    function closeMenu(): void {
        isMenuOpen = false;
        openMobileGroup = null;
    }

    function handleLinkClick(): void {
        closeMenu();
    }

    function scrollToTop(): void {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    function toggleDesktopGroup(label: string): void {
        openGroup = openGroup === label ? null : label;
    }

    function closeDesktopGroup(): void {
        openGroup = null;
    }

    function toggleMobileGroup(label: string): void {
        openMobileGroup = openMobileGroup === label ? null : label;
    }

    function getLinkHref(link: Link): string {
        return isExternalLink(link.href) ? link.href : resolve(`/${link.href}`);
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
            <img width="35px" height="35px" src="/assets/tasaed.svg" alt="Logo" loading="lazy" />
            <span class="animate-gradient">
                TASA-Ed 工作室
            </span>
        </button>

        <!-- 桌面端导航 -->
        <nav class="hidden items-center gap-6 text-sm font-medium px-4 py-2 text-slate-600 dark:text-slate-300 md:flex">
            {#each navLinks as item, index (index)}
                {#if isNavGroup(item)}
                    <!-- 分组下拉菜单 -->
                    <div class="relative">
                        <button
                          class="flex cursor-pointer items-center gap-1 transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
                          aria-haspopup="true"
                          aria-expanded={openGroup === item.label}
                          onclick={() => toggleDesktopGroup(item.label)}
                        >
                            <ChartNoAxesGantt class="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                            {item.label}
                            <svg
                              class="h-3.5 w-3.5 transition-transform duration-200"
                              class:rotate-180={openGroup === item.label}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>

                        {#if openGroup === item.label}
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <div class="fixed inset-0 z-10" onclick={closeDesktopGroup}></div>

                            <div class="absolute left-1/2 z-20 mt-2 min-w-36 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 shadow-lg backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/95 animate-slide-down">
                                {#each item.items as link (link.href)}
                                    <a
                                      class="block px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                      aria-label={link.label}
                                      title={link.label}
                                      href={getLinkHref(link)}
                                      target={isExternalLink(link.href) ? '_blank' : undefined}
                                      rel={isExternalLink(link.href) ? 'external' : undefined}
                                      onclick={closeDesktopGroup}
                                    >
                                        {link.label}
                                    </a>
                                {/each}
                            </div>
                        {/if}
                    </div>
                {:else}
                    <!-- 普通链接 -->
                    <a
                      class="cursor-pointer transition-colors duration-200 hover:text-slate-900 dark:hover:text-white"
                      aria-label={item.label}
                      title={item.label}
                      href={getLinkHref(item)}
                      target={isExternalLink(item.href) ? '_blank' : undefined}
                      rel={isExternalLink(item.href) ? 'external' : undefined}
                    >
                        {item.label}
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
                {#each navLinks as item, index (index)}
                    {#if isNavGroup(item)}
                        <!-- 移动端分组：可折叠 -->
                        <div>
                            <button
                              class="flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                              onclick={() => toggleMobileGroup(item.label)}
                              aria-expanded={openMobileGroup === item.label}
                            >
                                <span class="flex items-center gap-1.5">
                                    <ChartNoAxesGantt class="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                                    {item.label}
                                </span>
                                <svg
                                  class="h-3.5 w-3.5 transition-transform duration-200"
                                  class:rotate-180={openMobileGroup === item.label}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </button>

                            {#if openMobileGroup === item.label}
                                <div class="ml-4 mt-1 flex flex-col border-l-2 border-slate-100 pl-2 dark:border-slate-800 animate-slide-down">
                                    {#each item.items as link (link.href)}
                                        <a
                                          class="cursor-pointer rounded-lg px-4 py-2.5 text-sm font-medium text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                                          aria-label={link.label}
                                          title={link.label}
                                          href={getLinkHref(link)}
                                          target={isExternalLink(link.href) ? '_blank' : undefined}
                                          rel={isExternalLink(link.href) ? 'external' : undefined}
                                          onclick={handleLinkClick}
                                        >
                                            {link.label}
                                        </a>
                                    {/each}
                                </div>
                            {/if}
                        </div>
                    {:else}
                        <!-- 普通链接 -->
                        <a
                          class="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                          aria-label={item.label}
                          title={item.label}
                          href={getLinkHref(item)}
                          target={isExternalLink(item.href) ? '_blank' : undefined}
                          rel={isExternalLink(item.href) ? 'external' : undefined}
                          onclick={handleLinkClick}
                        >
                            {item.label}
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
</style>
