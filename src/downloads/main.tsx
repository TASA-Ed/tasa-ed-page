import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../index.css'
import downloadGroups from '../json/downloadGroups.json'
import DownloadListPage, { type DownloadGroup } from './download.tsx';

const sampleGroups: DownloadGroup[] = downloadGroups.groups;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DownloadListPage groups={sampleGroups} />
    </StrictMode>,
)
