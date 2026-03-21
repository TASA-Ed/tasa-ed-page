import type { Component } from "svelte";

export interface Link {
  href: string;
  label: string;
}

export interface NavGroup {
  /** 分组标签，显示为下拉菜单的触发按钮 */
  label: string;
  items: Link[];
}

/** 导航项：单个链接 或 链接分组 */
export type NavItem = Link | NavGroup;

/** 类型守卫：判断是否为分组 */
export function isNavGroup(item: NavItem): item is NavGroup {
  return "items" in item;
}

export interface Project {
  id: string;
  title: string;
  href: string;
  description: string;
  tags: string[];
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: Component;
  display: string;
}

export interface FooterBadge {
  id: string;
  label: string;
  /** 只接受外部链接 */
  href: string;
  icon: string;
}

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  /** 只接受外部链接 */
  href: string;
  icon: Component;
  date: string;
  size?: string;
}

export interface DownloadGroup {
  id: string;
  title: string;
  items: DownloadItem[];
}

export function isExternalLink(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//");
}
