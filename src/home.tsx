import { type JSX } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub } from "react-icons/fi";
import { useScrollTo } from "./useScrollTo.tsx";

import * as constant from "./json/constant.json";

import Footer from "./footer.tsx";
import Header from "./header.tsx";

export default function StudioHome(): JSX.Element {
    const { scrollTo } = useScrollTo();

    return (
        <div className="font-sans text-slate-800 antialiased scroll-smooth">
            {/* 导航栏 */}
            <Header />

            <main className="w-full">
                {/* 首屏 */}
                <section style={{backgroundImage: `url("/assets/subtle-prism.svg")`}} id="hero" className="min-h-screen flex items-center pt-[var(--studio-nav-height)] lg:pt-0">
                    <div className="w-[92%] py-2 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                <span className="text-purple-600">{constant.name} </span>
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

                {/* 联系 */}
                <section style={{backgroundImage: `url("/assets/scattered-forcefields.svg")`}} id="contact" className="min-h-screen flex items-center bg-slate-50">
                    <div className="w-[92%] py-2 max-w-4xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <h2 className="text-3xl font-bold mb-2">联系我们</h2>
                            <p className="text-slate-600 mb-8">想一起做点有意思的项目？给我们发邮件或者通过下面的表单快速联系。</p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="rounded-xl p-4 bg-white shadow">
                                        <h4 className="font-semibold">邮箱</h4>
                                        <a className="mt-2 inline-flex items-center gap-2 text-sm text-indigo-600" href={`mailto:${constant.email}?subject=合作咨询`}>
                                            <FiMail size={18} /> {constant.email}
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
                                        window.location.href = `mailto:${constant.email}?subject=${subject}&body=${body}`;
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

                {/* 页脚 */}
                <Footer />
            </main>
        </div>
    );
}
