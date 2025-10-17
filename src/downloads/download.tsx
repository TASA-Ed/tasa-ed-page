import React from "react";
import { LuDisc3, LuFileArchive, LuFileDigit, LuFileDown } from "react-icons/lu";
import { FiArchive, FiGithub } from 'react-icons/fi'

import Footer from "../footer.tsx";
import Header from "../header.tsx";

export type DownloadItem = {
    id: string;
    title: string;
    description?: string;
    fileName?: string;
    size?: string; // e.g. "12 MB"
    thumbnail?: string; // 图片链接（可选），如果没有会展示内置图标
    time?: string; // 时间
    href: string; // 点击跳转的下载链接
};

export type DownloadGroup = {
    id: string;
    title?: string;
    items: DownloadItem[];
};

export type DownloadListProps = {
    /** 如果提供 groups，将按组渲染；否则用 items 渲染一个默认组 */
    groups?: DownloadGroup[];
    /** 如果不分组，可以直接传 items */
    items?: DownloadItem[];
    /** 自定义样式容器 */
    className?: string;
    /** 卡片额外类名 */
    cardClassName?: string;
    /** 缩略图大小（像素或 tailwind 尺寸，比如 16/24/32/40/48/56/64） */
    thumbnailSize?: number;
    /** 点击下载前的回调（例如上报事件），返回 false 可阻止跳转 */
    onBeforeDownload?: (item: DownloadItem) => boolean | void;
};

const FallbackIcon: React.FC<{ size: number }> = ({size}) => {
    const s = Math.max(24, size);
    return (
        <LuFileDown size={s}/>
    );
};

function Icon(it: DownloadItem, thumbSize: number): React.ReactNode {
    switch (it.thumbnail) {
        case "github":
            return (<FiGithub size={thumbSize * 0.65}/>)
        case "archive":
            return (<FiArchive size={thumbSize * 0.65}/>)
        case "iso":
            return (<LuDisc3 size={thumbSize * 0.65}/>)
        case "zip":
            return (<LuFileArchive size={thumbSize * 0.65}/>)
        case "01":
            return (<LuFileDigit size={thumbSize * 0.65}/>)
        case undefined:
            return (
                <div className="text-slate-500 dark:text-slate-300">
                    <FallbackIcon size={Math.round(thumbSize * 0.65)}/>
                </div>
            )
        default:
            return (<img
                src={it.thumbnail}
                alt={it.title}
                className="object-cover w-full h-full"
                loading="lazy"
            />)
    }
}

export default function DownloadListPage(
    {
        groups,
        items,
        className = "",
        cardClassName = "",
        thumbnailSize = 56,
    }: DownloadListProps) {
    // 规范化分组：若提供分组则使用，否则将项目包裹在默认分组中
    const normalizedGroups: DownloadGroup[] = React.useMemo(() => {
        if (groups && groups.length) return groups;
        if (items && items.length) return [{id: "default", title: undefined, items}];
        return [];
    }, [groups, items]);

    if (!normalizedGroups.length) {
        return (
            <div className={`max-w-4xl mx-auto p-4 ${className}`}>
                <div className="text-center text-muted-foreground/80 py-12">
                    当前没有可下载项。
                </div>
            </div>
        );
    }

    return (
        <div className={`bg-white dark:bg-zinc-700`}>
            <Header/>
            <div id="hero" className={`max-w-5xl mx-auto ${className}`}>
                {normalizedGroups.map((g) => (
                    <section key={g.id} className="px-8 pt-[var(--studio-nav-height)] mb-6">
                        {g.title && (
                            <header className="mb-4">
                                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{g.title}</h2>
                                <p className="text-sm text-slate-500">{g.items.length} 个项目</p>
                            </header>
                        )}

                        <div className="space-y-3">
                            {g.items.map((it) => {
                                const thumbSize = typeof thumbnailSize === "number" ? thumbnailSize : 56;

                                return (
                                    <a
                                        key={it.id}
                                        href={it.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group block bg-white/80 dark:bg-slate-800/60 shadow-sm hover:shadow-md transition rounded-2xl overflow-hidden ${cardClassName}`}
                                    >
                                        <div className="flex gap-4 items-center p-4 md:p-5">
                                            <div className="flex-shrink-0"
                                                 style={{width: thumbSize, height: thumbSize}}
                                            >
                                                <div
                                                    className="w-full h-full rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-700 flex items-center justify-center">
                                                    {Icon(it, thumbSize)}
                                                </div>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div className="min-w-0">
                                                        <div
                                                            className="text-sm md:text-base font-medium text-slate-900 dark:text-slate-100 truncate">{it.title}</div>
                                                        {it.description && (
                                                            <div className="mt-1 text-xs md:text-sm text-slate-500 dark:text-slate-300 line-clamp-4">{it.description}</div>
                                                        )}
                                                    </div>

                                                    <div className="flex-shrink-0 ml-3 text-right">
                                                        {it.time && <div
                                                            className="text-xs text-slate-500 dark:text-slate-400 pb-2">{it.time}</div>}
                                                        {it.size && <div
                                                            className="text-xs text-slate-500 dark:text-slate-400">{it.size}</div>}
                                                    </div>
                                                </div>

                                                {it.fileName && (
                                                    <div
                                                        className="mt-3 text-xs text-slate-400 truncate">{it.fileName}</div>
                                                )}
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
            <Footer/>
        </div>
    );
}
