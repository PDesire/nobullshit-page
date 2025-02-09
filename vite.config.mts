import fsp from 'fs/promises';
import { defineConfig, PluginOption } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const htmlImportPlugin = {
  serve: {
    name: "html-import:serve",
    apply: "serve",
    transform(src, id) {
      if (id.endsWith('.html')) {
        return {
          code: `export default ${JSON.stringify(src)}`,
        };
      }
    }
  } as PluginOption,
  build: {
    name: "html-import:build",
    apply: "build",
    enforce: "pre",

    async resolveId(id, importer, options) {
      if (id.endsWith('.html') && !options.isEntry) {
        let res = await this.resolve(id, importer, {
          skipSelf: true,
          ...options,
        });

        if (!res || res.external) return res;

        return res.id + "?html-import";
      }
    },

    async load(id) {
      if (!id.endsWith("?html-import")) return;
      let htmlContent = await fsp.readFile(id.replace(/[?#].*$/s, ""));
      return `export default ${JSON.stringify(htmlContent.toString('utf-8').replace(/(\r\n|\n|\r)/gm, ""))}`;
    }
  } as PluginOption
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    htmlImportPlugin.build,
    htmlImportPlugin.serve
  ],
})
