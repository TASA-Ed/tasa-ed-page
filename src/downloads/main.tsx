import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../index.css'
import DownloadListPage, { type DownloadGroup } from './down.tsx';

const sampleGroups: DownloadGroup[] = [
    {
        id: 'scp25d',
        title: 'SCP 2.5D下载',
        items: [
            { id: 'scp25d-1', title: 'SCP：2.5D GitHub', description: 'SCP：2.5D。', thumbnail: "github", href: 'https://github.com/tasa-ed/scp25d/' },
            { id: 'scp25d-2', title: 'SCP：2.5D - SE GitHub', description: 'SCP：2.5D 的剧本编辑器版本。', thumbnail: "github", href: 'https://github.com/tasa-ed/scp25d-SE/' },
            { id: 'scp25d-3', title: 'SCP：2.5D - SE 版本存档', description: 'SCP：2.5D - SE 的所有版本存档。（OneDrive）', thumbnail: "archive", size: '719 MB', href: 'https://1drv.ms/f/c/568ae44e1937060b/Ei5p0i5BjlRPk6XY3ZY7SM8BZ2yUEuUD595KLNpcLvPp4g?e=Ny6CjV' },
            { id: 'scp25d-4', title: 'SCP：2.5D - SE 版本存档', description: 'SCP：2.5D - SE 的所有版本存档。（百度网盘，提取码：S25D）', thumbnail: "archive", size: '719 MB', href: 'https://pan.baidu.com/s/1I-1hTPN6UMhj9RXN1Ftk2A?pwd=S25D' }
        ]
    },
    {
        id: 'software',
        title: 'TASA-Ed 软件下载',
        items: [
            { id: 'software-1', title: '鹰歌游戏启动器 V2 GitHub', description: '鹰歌游戏启动器 V2。', thumbnail: "github", href: 'https://github.com/TASA-Ed/MakerFrameLauncherV2' },
            { id: 'software-1-32', title: '鹰歌游戏启动器 V2 32', description: '鹰歌游戏启动器 V2 v2.0.1.0 x86（32位）。', size: '100 KB', thumbnail: "01", href: 'https://api.tasaed.top/otoe/?otoid=mfl32' },
            { id: 'software-1-64', title: '鹰歌游戏启动器 V2 64', description: '鹰歌游戏启动器 V2 v2.0.1.0 x64（64位）。', size: '106 KB', thumbnail: "01", href: 'https://api.tasaed.top/otoe/?otoid=mfl64' },
            { id: 'software-2', title: 'Mi计划 GitHub', description: '一个简单的软件，可以用来做一些笔记，或者记一些账单。', thumbnail: "github", href: 'https://github.com/TASA-Ed/iamiplan' },
            { id: 'software-2-32', title: 'Mi计划 32', description: 'Mi计划 v0.3.2 32位。', size: '4.11 MB', thumbnail: "01", href: 'https://api.tasaed.top/otoe/?otoid=mi32' },
            { id: 'software-2-64', title: 'Mi计划 64', description: 'Mi计划 v0.3.2 64位。', size: '4.09 MB', thumbnail: "01", href: 'https://api.tasaed.top/otoe/?otoid=mi64' }
        ]
    },
    {
        id: 'script-editor',
        title: '剧本编辑器下载',
        items: [
            { id: 'script-editor-a11', title: '剧本编辑器安卓11适配版', description: '剧本编辑器安卓11适配版（By TASA-Ed）。', size: '28.2 MB', thumbnail: "zip", href: 'https://api.tasaed.top/otoe/?otoid=sea11' },
            { id: 'script-editor-281f', title: '剧本编辑器 2.8.1f', description: '剧本编辑器 2.8.1f（By TASA-Ed）。', size: '56.5 MB', thumbnail: "zip", href: 'https://api.tasaed.top/otoe/?otoid=se281f' }
        ]
    },
    {
        id: 'sgas',
        title: 'SCP游戏助手存档',
        items: [
            { id: 'sgas-1', title: 'SCP 游戏助手存档', description: 'SCP 游戏助手的所有版本存档。（百度网盘，提取码：SGAs）', size: '59.8 MB', thumbnail: "archive", href: 'https://pan.baidu.com/s/1l9Z9MfEwGGpvdIETPGck1Q?pwd=SGAs' }
        ]
    },
    {
        id: 'edlest',
        title: '与之海edlest整理的文件',
        items: [
            { id: 'kb4474419', title: 'KB4474419', description: 'KB4474419（123网盘，提取码：lest）', size: '174.46MB', thumbnail: "iso", href: 'https://www.123pan.com/s/0JA9-FWYmH.html' },
            { id: 'kb4474419-2', title: 'KB4474419-2', description: 'KB4474419（百度网盘，提取码：p8ny）', size: '174.46MB', thumbnail: "iso", href: 'https://pan.baidu.com/s/1s4LcwGolNFVjpSwwR4afng?pwd=p8ny' },
            { id: 'kb4474419-3', title: 'KB4474419-3', description: 'KB4474419（天翼云盘，提取码：3ltv）', size: '174.46MB', thumbnail: "iso", href: 'https://cloud.189.cn/web/share?code=6Jnmy2BVVrQr' },
            { id: 'kb2919355', title: 'KB2919355', description: 'KB2919355（百度网盘，提取码：n6er）', size: '1.3GB', thumbnail: "iso", href: 'https://pan.baidu.com/s/1QqsIH8UzzpMgaRa4_FbR9w?pwd=n6er' },
            { id: 'kb2919355-2', title: 'KB2919355-2', description: 'KB2919355（天翼云盘，提取码：9fvk）', size: '1.3GB', thumbnail: "iso", href: 'https://cloud.189.cn/web/share?code=UzeayyfMn6Vr' }
        ]
    }
];

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DownloadListPage groups={sampleGroups} />
    </StrictMode>,
)
