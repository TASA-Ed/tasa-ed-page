import { motion } from "framer-motion";
import { useScrollTo } from "./useScrollTo.tsx";
import { FiMenu, FiChevronLeft } from "react-icons/fi";

import * as constant from "./json/constant.json";

export default function Header() {
    const { open, setOpen, scrollTo } = useScrollTo();

    return (
        <div>
            <header className="fixed inset-x-0 top-4 z-50 flex justify-center">
                <nav className="w-[92%] max-w-6xl bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-slate-100 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            className="rounded-lg px-1 flex font-semibold text-lg hover:bg-slate-50"
                            onClick={() => scrollTo("hero")}
                        >
                            <img width="26px" height="26px" src="/assets/tasaed.svg" alt="Logo" />
                            <span className="pl-1">{constant.name}</span>
                            <span className="text-indigo-600"> 工作室</span>
                        </button>
                        <div className="hidden md:flex items-center gap-1 text-sm text-slate-700">
                            <a className="px-3 py-2 rounded-md hover:bg-slate-50"
                               href="/">首页</a>
                            <a className="px-3 py-2 rounded-md hover:bg-slate-50"
                               href="/downloads/">下载</a>
                            <a className="px-3 py-2 rounded-md hover:bg-slate-50" target="_blank"
                               href="https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/">Q群</a>
                            <a className="px-3 py-2 rounded-md hover:bg-slate-50" target="_blank"
                               href="https://wiki.tasaed.top/zh/wiki/api">PHP-API</a>
                            <a className="px-3 py-2 rounded-md hover:bg-slate-50" target="_blank"
                               href="https://wiki.tasaed.top/zh/wiki/ourwebsite#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">常见问题</a>
                            <a className="px-3 py-2 rounded-md hover:bg-slate-50" target="_blank"
                               href="https://wiki.tasaed.top/zh/wiki/tasaed">关于我们</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            className="md:hidden p-2 rounded-md"
                            onClick={() => setOpen((s) => !s)}
                            aria-label="menu"
                        >
                            {open ? <FiChevronLeft /> : <FiMenu />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* 移动设备的导航栏 */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed inset-x-4 top-20 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-4 md:hidden"
                >
                    <div className="flex flex-col gap-2">
                        <a className="text-left px-3 py-2 hover:bg-slate-50"
                           href="/">首页</a>
                        <a className="text-left px-3 py-2 hover:bg-slate-50"
                           href="/downloads/">下载</a>
                        <a className="text-left px-3 py-2 hover:bg-slate-50" target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/">Q群</a>
                        <a className="text-left px-3 py-2 hover:bg-slate-50" target="_blank" href="https://wiki.tasaed.top/zh/wiki/api">PHP-API</a>
                        <a className="text-left px-3 py-2 hover:bg-slate-50" target="_blank" href="https://wiki.tasaed.top/zh/wiki/ourwebsite#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">常见问题</a>
                        <a className="text-left px-3 py-2 hover:bg-slate-50" target="_blank" href="https://wiki.tasaed.top/zh/wiki/tasaed">关于我们</a>
                    </div>
                </motion.div>
            )}
        </div>
    );
}