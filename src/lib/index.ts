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
  width: string;
  height: string;
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

export interface InsertedAt {
  __type: string;
  iso: string;
}

export interface Comment {
  nick: string;
  ip?: string;
  updatedAt: string;
  objectId: string;
  mail: string;
  ua: string;
  insertedAt: InsertedAt;
  createdAt: string;
  pid?: string;
  link: string;
  comment: string;
  url: string;
  QQAvatar?: string;
  rid?: string;
}
