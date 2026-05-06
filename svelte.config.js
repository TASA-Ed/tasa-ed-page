import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      relative: false
    },
    prerender: {
      handleHttpError: "warn",
      entries: ["*", "/[...404]"]
    },
    csp: {
      mode: "hash",
      directives: {
        'default-src': ['self'],
        'img-src': ['self', 'data:', 'https://img.shields.io', 'https://ubuyaolan.github.io', 'https://img.t.sinajs.cn'],
        'script-src': ['self', 'unsafe-inline'],
        'style-src': ['self', 'unsafe-inline'],
        'require-trusted-types-for': ["script"],
        'trusted-types': ['svelte-trusted-html', 'app-html']
      }
    }
  }
};

export default config;
