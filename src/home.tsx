import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiChevronLeft, FiMail, FiGithub } from "react-icons/fi";
import Footer from "./footer.tsx";

const STUDIO = "TASA-Ed";

const MAIL = "studio@tasaed.top";

export default function StudioHome(): JSX.Element {
    const [open, setOpen] = useState(false);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <div className="font-sans text-slate-800 antialiased scroll-smooth">
            {/* NAVBAR */}
            <header className="fixed inset-x-0 top-4 z-50 flex justify-center">
                <nav className="w-[92%] max-w-6xl bg-white/60 backdrop-blur-md rounded-2xl shadow-md border border-slate-100 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            className="rounded-lg px-1 flex font-semibold text-lg hover:bg-slate-50"
                            onClick={() => scrollTo("hero")}
                        >
                            <img width="26px" height="26px" src="/assets/tasaed.svg" alt="Logo" />
                            <span className="pl-1">TASA-Ed</span>
                            <span className="text-indigo-600"> 工作室</span>
                        </button>
                        <div className="hidden md:flex items-center gap-1 text-sm text-slate-700">
                            <a className="px-3 py-2 rounded-md hover:bg-slate-50" target="_blank"
                               href="https://www.tasaed.top/blog">博客</a>
                            <a className="px-3 py-2 rounded-md hover:bg-slate-50" target="_blank"
                               href="https://www.tasaed.top/downloads">下载</a>
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

            {/* Mobile nav drawer */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed inset-x-4 top-20 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-4 md:hidden"
                >
                    <div className="flex flex-col gap-2">
                        <a className="text-left px-3 py-2 hover:bg-slate-50" target="_blank" href="https://www.tasaed.top/blog">博客</a>
                        <a className="text-left px-3 py-2 hover:bg-slate-50" target="_blank" href="https://www.tasaed.top/downloads">下载</a>
                        <a className="text-left px-3 py-2 hover:bg-slate-50" target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=meZHnANAtGqxFXNHBnad1m1ms3li_Pgj&jump_from=webapi&authKey=YfabJovSWyCBqhrV7B5VWkVSG5hQTsd19AEvjMTFy2jafZ9goaIlJOm9jh7dv6f/">Q群</a>
                        <a className="text-left px-3 py-2 hover:bg-slate-50" target="_blank" href="https://wiki.tasaed.top/zh/wiki/api">PHP-API</a>
                        <a className="text-left px-3 py-2 hover:bg-slate-50" target="_blank" href="https://wiki.tasaed.top/zh/wiki/ourwebsite#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">常见问题</a>
                        <a className="text-left px-3 py-2 hover:bg-slate-50" target="_blank" href="https://wiki.tasaed.top/zh/wiki/tasaed">关于我们</a>
                    </div>
                </motion.div>
            )}

            <main className="w-full">
                {/* HERO */}
                <section style={{backgroundImage: `url("/assets/subtle-prism.svg")`}} id="hero" className="min-h-screen flex items-center pt-[var(--studio-nav-height)] lg:pt-0">
                    <div className="w-[92%] py-2 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                <span className="text-purple-600">{STUDIO} </span>
                                工作室
                            </h1>
                            <p className="text-slate-600 max-w-xl">
                                成立于 2020 年 12 月 30 日，一个专注于自媒体，软件游戏开发，网站搭建的工作室，而且，我们喜欢开源！
                            </p>

                            <div className="flex gap-3">
                                <a className="rounded-2xl px-6 py-3 bg-purple-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform" target="_blank" href="https://www.tasaed.top/blog">
                                    查看博客
                                </a>
                                <button
                                    onClick={() => scrollTo("contact")}
                                    className="rounded-2xl px-6 py-3 border border-slate-200 bg-white hover:bg-slate-50 transition"
                                >
                                    联系我们
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/assets/dev.jpg"
                                alt="studio hero"
                                className="w-full h-[60vh] object-cover md:h-[60vh] lg:h-[60vh]"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* CONTACT */}
                <section style={{backgroundImage: `url("/assets/scattered-forcefields.svg")`}} id="contact" className="min-h-screen flex items-center bg-slate-50">
                    <div className="w-[92%] py-2 max-w-4xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h2 className="text-3xl font-bold mb-2">联系我们</h2>
                            <p className="text-slate-600 mb-8">想一起做点有意思的项目？给我们发邮件或者通过下面的表单快速联系。</p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="rounded-xl p-4 bg-white shadow">
                                        <h4 className="font-semibold">邮箱</h4>
                                        <a className="mt-2 inline-flex items-center gap-2 text-sm text-indigo-600" href={`mailto:${MAIL}?subject=合作咨询`}>
                                            <FiMail size={18} /> {MAIL}
                                        </a>
                                    </div>

                                    <div className="rounded-xl p-4 bg-white shadow">
                                        <h4 className="font-semibold">GitHub</h4>
                                        <a className="mt-2 inline-flex items-center gap-2 text-sm text-indigo-600" target="_blank" href={"https://github.com/orgs/TASA-Ed"}>
                                            <FiGithub size={18} /> @TASA-Ed
                                        </a>
                                    </div>
                                </div>

                                <form
                                    className="rounded-xl p-6 bg-white shadow space-y-4"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const form = e.currentTarget as HTMLFormElement & {
                                            name: { value: string };
                                            email: { value: string };
                                            message: { value: string };
                                        };
                                        const subject = encodeURIComponent("合作咨询：" + form.name.value);
                                        const body = encodeURIComponent(form.message.value + "\n\n来自：" + form.email.value);
                                        window.location.href = `mailto:${MAIL}?subject=${subject}&body=${body}`;
                                    }}
                                >
                                    <div>
                                        <label className="text-sm font-medium">姓名</label>
                                        <input name="name" required className="mt-2 w-full rounded-md border p-2" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">邮箱</label>
                                        <input name="email" type="email" required className="mt-2 w-full rounded-md border p-2" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">内容</label>
                                        <textarea name="message" rows={5} required className="mt-2 w-full rounded-md border p-2" />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button type="submit" className="rounded-2xl px-5 py-2 bg-indigo-600 text-white font-semibold">
                                            发送邮件
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FOOTER */}
                <Footer />
            </main>
        </div>
    );
}
