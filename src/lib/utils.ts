import type { NavGroup, NavItem } from "$lib";

export function isExternalLink(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//");
}

/** 类型守卫：判断是否为分组 */
export function isNavGroup(item: NavItem): item is NavGroup {
  return "items" in item;
}

/**
 * 从 User-Agent 中提取浏览器内核版本
 * @param ua - 浏览器 User-Agent 字符串
 * @returns 浏览器内核版本，如 "Chrome 1.1.1.1"、"Edge 2.2.2.2"；无法识别时返回 "Unknown"
 */
export function getBrowserKernelVersion(ua: string): string {
  const lowerUA = ua.toLowerCase();

  function getVersion(regex: RegExp): string | null {
    const match = ua.match(regex);
    return match ? match[1] : null;
  }

  const edgeVersion = getVersion(/EdgA\/([\d.]+)/) || getVersion(/Edg\/([\d.]+)/);

  if (edgeVersion) {
    return `Edge ${edgeVersion}`;
  }

  const chromeVersion = getVersion(/Chrome\/([\d.]+)/);

  if (chromeVersion) {
    if (lowerUA.includes("mz-pro 6") || lowerUA.includes("qqbrowser/10.6.4163.400"))
      return `古阳 | Chrome ${chromeVersion}`;
    return `Chrome ${chromeVersion}`;
  }

  const firefoxVersion = getVersion(/Firefox\/([\d.]+)/);
  if (firefoxVersion) {
    return `Firefox ${firefoxVersion}`;
  }

  const safariVersion = getVersion(/Version\/([\d.]+)/);
  if (safariVersion && lowerUA.includes("safari")) {
    return `Safari ${safariVersion}`;
  }

  const webkitVersion = getVersion(/AppleWebKit\/([\d.]+)/);
  if (webkitVersion) {
    return `WebKit ${webkitVersion}`;
  }

  return "Unknown";
}

/**
 * 从 User-Agent 中提取操作系统及版本
 * @param ua - 浏览器 User-Agent 字符串
 * @returns 操作系统名称和版本，如 "Android 11"、"Windows 10/11"；无法识别时返回 "Unknown OS"
 */
export function getOS(ua: string): string {
  // 1. Windows（通过 Windows NT 版本映射）
  const winMatch = ua.match(/Windows NT (\d+\.\d+)/);
  if (winMatch) {
    const ntVersion = winMatch[1];
    const versionMap: Record<string, string> = {
      "10.0": "Windows 10/11", // NT 10.0 无法准确区分 Win10 / Win11
      "6.3": "Windows 8.1",
      "6.2": "Windows 8",
      "6.1": "Windows 7",
      "6.0": "Windows Vista",
      "5.1": "Windows XP"
    };
    return versionMap[ntVersion] ?? `Windows NT ${ntVersion}`;
  }

  // 2. Android
  const androidMatch = ua.match(/Android\s([\d.]+)/);
  if (androidMatch) {
    return `Android ${androidMatch[1]}`;
  }

  // 3. iOS（iPhone / iPad / iPod）
  const iosMatch = ua.match(/CPU (?:iPhone )?OS (\d+)[_](\d+)(?:[_](\d+))?/);
  if (iosMatch) {
    const major = iosMatch[1];
    const minor = iosMatch[2];
    const patch = iosMatch[3];
    const version = patch ? `${major}.${minor}.${patch}` : `${major}.${minor}`;
    return `iOS ${version}`;
  }

  // 4. macOS
  const macMatch = ua.match(/Mac OS X (\d+[_\d.]*)/);
  if (macMatch) {
    const version = macMatch[1].replace(/_/g, ".");
    return `macOS ${version}`;
  }

  // 5. Linux（但不含 Android）
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) {
    return "Linux";
  }

  // 6. Chrome OS
  const crOSMatch = ua.match(/CrOS\s\w+\s([\d.]+)/);
  if (crOSMatch) {
    return `Chrome OS ${crOSMatch[1]}`;
  }

  return "Unknown OS";
}
